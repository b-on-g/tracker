namespace $.$$ {

	type $bog_tracker_mpit_neolo_ai_explain_msg = {
		role: 'user' | 'assistant'
		content: string
	}

	export class $bog_tracker_mpit_neolo_ai_explain extends $.$bog_tracker_mpit_neolo_ai_explain {

		@ $mol_mem
		override hidden( next?: boolean ): boolean {
			return super.hidden( next ) ?? true
		}

		@ $mol_mem
		phase( next?: 'loading' | 'content' | 'topic_error' | 'error' ):
			'loading' | 'content' | 'topic_error' | 'error' {
			if( next !== undefined ) return next
			return 'loading'
		}

		@ $mol_mem
		explain_markdown( next?: string ): string {
			if( next !== undefined ) return next
			return ''
		}

		@ $mol_mem
		override error_text( next?: string ): string {
			return super.error_text( next ) ?? ''
		}

		@ $mol_mem
		chat( next?: readonly $bog_tracker_mpit_neolo_ai_explain_msg[] ): readonly $bog_tracker_mpit_neolo_ai_explain_msg[] {
			if( next !== undefined ) return next
			return []
		}

		@ $mol_mem
		override is_loading(): boolean {
			return this.phase() === 'loading'
		}

		@ $mol_mem
		override is_content(): boolean {
			return this.phase() === 'content'
		}

		@ $mol_mem
		override is_error(): boolean {
			return this.phase() === 'error'
		}

		@ $mol_mem
		override is_topic_error(): boolean {
			return this.phase() === 'topic_error'
		}

		@ $mol_mem
		override explain_html(): string {
			return $bog_tracker_mpit_neolo_ai_explain.markdown_to_html( this.explain_markdown() )
		}

		// ── Side-effect: sync HTML into the explain node ───────
		override auto() {
			super.auto()
			try {
				const html = this.explain_html()
				if( !html ) return
				const node = this.Explain_text().dom_node() as HTMLElement
				if( node && node.innerHTML !== html ) node.innerHTML = html
			} catch {}
		}

		// ── Explicit open/regenerate ───────────────────────────
		/** Call from parent to open the modal and start generation. */
		@ $mol_action
		open() {
			this.hidden( false )
			this.do_generate()
		}

		@ $mol_action
		do_generate() {
			this.phase( 'loading' )
			this.error_text( '' )
			this.explain_markdown( '' )
			this.chat( [] )
			this.question_input( '' )
			$mol_wire_async( this ).generate_async()
		}

		async generate_async() {
			const desc = this.task_desc()
			if( !desc || !desc.trim() ) {
				this.phase( 'topic_error' )
				return
			}
			try {
				// Original passes task description as the "topic" (title arg).
				const res = await this.api().ai_explain( desc, '' )
				if( !res || !res.ok ) {
					this.phase( 'error' )
					this.error_text( res?.error || 'Неизвестная ошибка' )
					return
				}
				if( !res.is_topic ) {
					this.phase( 'topic_error' )
					return
				}
				this.explain_markdown( String( res.content || '' ) )
				this.phase( 'content' )
			} catch( e: any ) {
				this.phase( 'error' )
				this.error_text( 'Не удалось связаться с сервером: ' + ( e?.message || String( e ) ) )
			}
		}

		// ── Chat ──────────────────────────────────────────────
		@ $mol_action
		override ask( next?: any ): any {
			if( next === undefined ) return null
			const q = this.question_input().trim()
			if( !q ) return null
			const user_msg: $bog_tracker_mpit_neolo_ai_explain_msg = { role: 'user', content: q }
			this.chat( [ ...this.chat(), user_msg ] )
			this.question_input( '' )
			$mol_wire_async( this ).ask_async( q )
			return null
		}

		async ask_async( question: string ) {
			const topic = this.task_title() || this.task_desc()
			// Pass previous messages as history (excluding the current question just pushed).
			const history = this.chat().slice( 0, -1 )
			try {
				const res = await this.api().ai_ask( topic, question, [ ...history ] )
				let answer: string
				if( !res || !res.ok ) {
					answer = 'Ошибка: ' + ( res?.error || 'Неизвестная ошибка' )
				} else {
					answer = String( res.answer || '' )
				}
				this.chat( [ ...this.chat(), { role: 'assistant', content: answer } ] )
			} catch( e: any ) {
				this.chat( [ ...this.chat(), {
					role: 'assistant',
					content: 'Ошибка подключения к серверу: ' + ( e?.message || String( e ) ),
				} ] )
			}
		}

		// ── Chat rendering ────────────────────────────────────
		@ $mol_mem
		override chat_ids(): readonly string[] {
			return this.chat().map( ( _m, i ) => String( i ) )
		}

		@ $mol_mem_key
		override chat_role( id: string ): string {
			const i = Number( id )
			return this.chat()[ i ]?.role ?? 'user'
		}

		@ $mol_mem_key
		override chat_text( id: string ): string {
			const i = Number( id )
			return this.chat()[ i ]?.content ?? ''
		}

		@ $mol_mem
		override chat_rows(): readonly any[] {
			return this.chat_ids().map( id => this.Chat_row( id ) )
		}

		// ── Close ─────────────────────────────────────────────
		@ $mol_action
		override close_click( next?: any ): any {
			if( next === undefined ) return null
			this.do_close()
			return null
		}

		@ $mol_action
		override backdrop_click( next?: any ): any {
			if( next === undefined ) return null
			const ev = next as Event | undefined
			if( ev && ev.target === ev.currentTarget ) this.do_close()
			return null
		}

		@ $mol_action
		do_close() {
			this.hidden( true )
			const cb = this.on_close
			if( typeof cb === 'function' ) cb.call( this )
		}

		// ── Markdown renderer (ported from generateExplanation) ──
		static markdown_to_html( md: string ): string {
			if( !md ) return ''
			const esc = ( s: string ) => s.replace( /&/g, '&amp;' ).replace( /</g, '&lt;' ).replace( />/g, '&gt;' )
			let html = esc( md )
			html = html
				.replace( /^###\s*(.+)$/gm, '<h3>$1</h3>' )
				.replace( /^##\s*(.+)$/gm, '<h3>$1</h3>' )
				.replace( /^#\s*(.+)$/gm, '<h3>$1</h3>' )
				.replace( /\*\*(.+?)\*\*/g, '<strong>$1</strong>' )
				.replace( /\*(.+?)\*/g, '<em>$1</em>' )
				.replace( /`(.+?)`/g, '<code>$1</code>' )
				.replace( /\n\n/g, '</p><p>' )
				.replace( /\n/g, '<br>' )
			return '<p>' + html + '</p>'
		}

	}

	export class $bog_tracker_mpit_neolo_ai_explain_chat_msg extends $.$bog_tracker_mpit_neolo_ai_explain_chat_msg {}

}
