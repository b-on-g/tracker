namespace $ {

	/** Backend AI/ML/Speech API (Flask app.py). Auth/tasks/classes live in Giper Baza, not here. */
	export class $bog_tracker_mpit_neolo_api extends $mol_object {

		base() {
			return 'http://localhost:5000/api'
		}

		async post(path: string, body: any): Promise<any> {
			const r = await fetch(this.base() + path, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			})
			if(!r.ok) {
				const j = await r.json().catch(() => ({}))
				return { ok: false, error: j.error || `HTTP ${r.status}` }
			}
			return r.json()
		}

		async predict_time(text: string): Promise<{ ok: boolean; minutes?: number; error?: string }> {
			return this.post('/predict_time', { text })
		}

		async ai_generate_test(title: string, desc: string, file_name: string): Promise<any> {
			return this.post('/ai/generate_test', { title, desc, file_name })
		}

		async ai_explain(title: string, desc: string): Promise<any> {
			return this.post('/ai/explain', { title, desc })
		}

		async ai_ask(topic: string, question: string, history: any[]): Promise<any> {
			return this.post('/ai/ask', { topic, question, history })
		}

		/** Streaming SSE — stats_advice returns chunks via callback */
		async stats_advice(payload: {
			overdue: any[]
			rejected: any[]
			done_count: number
			total_count: number
		}, on_token: (text: string) => void): Promise<{ ok: boolean; error?: string }> {
			try {
				const r = await fetch(this.base() + '/ai/stats_advice', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(payload),
				})
				if(!r.ok || !r.body) return { ok: false, error: `HTTP ${r.status}` }
				const reader = r.body.getReader()
				const decoder = new TextDecoder()
				let buf = ''
				while(true) {
					const { done, value } = await reader.read()
					if(done) break
					buf += decoder.decode(value, { stream: true })
					const lines = buf.split('\n')
					buf = lines.pop() ?? ''
					for(const line of lines) {
						if(!line.startsWith('data:')) continue
						const payload = line.slice(5).trim()
						if(payload === '[DONE]') return { ok: true }
						try {
							const obj = JSON.parse(payload)
							if(obj.error) return { ok: false, error: obj.error }
							if(obj.token) on_token(obj.token)
						} catch {}
					}
				}
				return { ok: true }
			} catch(e: any) {
				return { ok: false, error: e.message || String(e) }
			}
		}

		async speech_to_text(audio: Blob): Promise<{ ok: boolean; text?: string; error?: string }> {
			const fd = new FormData()
			fd.append('audio', audio, 'voice.webm')
			try {
				const r = await fetch(this.base() + '/speech', { method: 'POST', body: fd })
				return r.json()
			} catch(e: any) {
				return { ok: false, error: e.message }
			}
		}

		async upload_student_file(username: string, task_id: number, file: File): Promise<any> {
			const fd = new FormData()
			fd.append('file', file)
			try {
				const r = await fetch(`${this.base()}/tasks/${username}/${task_id}/file`, { method: 'POST', body: fd })
				return r.json()
			} catch(e: any) {
				return { ok: false, error: e.message }
			}
		}

		async upload_teacher_file(username: string, task_id: number, file: File): Promise<any> {
			const fd = new FormData()
			fd.append('file', file)
			fd.append('task_id', String(task_id))
			fd.append('username', username)
			try {
				const r = await fetch(`${this.base()}/teacher/task_file`, { method: 'POST', body: fd })
				return r.json()
			} catch(e: any) {
				return { ok: false, error: e.message }
			}
		}

	}

}
