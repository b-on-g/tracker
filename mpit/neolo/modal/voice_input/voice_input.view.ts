namespace $.$$ {

	export class $bog_tracker_mpit_neolo_modal_voice_input extends $.$bog_tracker_mpit_neolo_modal_voice_input {

		// Non-reactive recording state — kept as plain fields because they are side-effect
		// infrastructure and should not participate in reactive graph.
		media_recorder: MediaRecorder | null = null
		audio_chunks: Blob[] = []
		media_stream: MediaStream | null = null

		@ $mol_mem
		override value( next?: string ): string {
			return super.value( next ) ?? ''
		}

		@ $mol_mem
		override listening( next?: boolean ): boolean {
			return super.listening( next ) ?? false
		}

		@ $mol_mem
		override busy( next?: boolean ): boolean {
			return super.busy( next ) ?? false
		}

		@ $mol_mem
		String_field() {
			const s = new this.$.$bog_tracker_mpit_neolo_modal_voice_input_string()
			s.hint = () => this.placeholder()
			s.value = ( next?: string ) => this.value( next )
			return s
		}

		@ $mol_mem
		Textarea_field() {
			const t = new this.$.$bog_tracker_mpit_neolo_modal_voice_input_textarea()
			t.hint = () => this.placeholder()
			t.value = ( next?: string ) => this.value( next )
			return t
		}

		@ $mol_mem
		override Input_slot(): any {
			return this.multiline() ? this.Textarea_field() : this.String_field()
		}

		@ $mol_action
		override voice_click( next?: any ): any {
			if( next === undefined ) return null
			this.toggle_recording()
			return null
		}

		@ $mol_action
		toggle_recording() {
			if( this.listening() ) {
				this.stop_recording()
			} else {
				void this.start_recording()
			}
		}

		async start_recording() {
			if( this.busy() ) return
			let stream: MediaStream
			try {
				stream = await navigator.mediaDevices.getUserMedia({ audio: true })
			} catch( e: any ) {
				alert( 'Нет доступа к микрофону: ' + ( e?.message || String( e ) ) )
				return
			}

			this.media_stream = stream
			this.audio_chunks = []

			const mime_type = MediaRecorder.isTypeSupported( 'audio/webm;codecs=opus' )
				? 'audio/webm;codecs=opus'
				: 'audio/webm'

			const recorder = new MediaRecorder( stream, { mimeType: mime_type } )
			this.media_recorder = recorder

			recorder.ondataavailable = ( e ) => {
				if( e.data.size > 0 ) this.audio_chunks.push( e.data )
			}

			recorder.onstop = async () => {
				try {
					stream.getTracks().forEach( t => t.stop() )
				} catch {}
				this.listening( false )
				this.busy( true )
				try {
					const blob = new Blob( this.audio_chunks, { type: mime_type } )
					const res = await this.api().speech_to_text( blob )
					if( res.ok && res.text ) {
						const cur = this.value() || ''
						const sep = cur && !cur.endsWith( ' ' ) ? ' ' : ''
						this.value( cur + sep + res.text )
					} else if( !res.ok ) {
						alert( 'Ошибка распознавания: ' + ( res.error || 'неизвестная ошибка' ) )
					}
				} catch( e: any ) {
					alert( 'Ошибка связи с сервером: ' + ( e?.message || String( e ) ) )
				} finally {
					this.busy( false )
					this.media_recorder = null
					this.media_stream = null
					this.audio_chunks = []
				}
			}

			recorder.start()
			this.listening( true )
		}

		stop_recording() {
			const recorder = this.media_recorder
			if( recorder && recorder.state !== 'inactive' ) {
				recorder.stop()
			}
		}

	}

	export class $bog_tracker_mpit_neolo_modal_voice_input_string extends $.$bog_tracker_mpit_neolo_modal_voice_input_string {}
	export class $bog_tracker_mpit_neolo_modal_voice_input_textarea extends $.$bog_tracker_mpit_neolo_modal_voice_input_textarea {}

}
