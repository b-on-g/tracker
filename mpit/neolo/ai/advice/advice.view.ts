namespace $.$$ {

	export class $bog_tracker_mpit_neolo_ai_advice extends $.$bog_tracker_mpit_neolo_ai_advice {

		@ $mol_mem
		raw_markdown( next?: string ): string {
			if( next !== undefined ) return next
			return ''
		}

		@ $mol_mem
		override is_busy( next?: boolean ): boolean {
			return super.is_busy( next ) ?? false
		}

		@ $mol_mem
		override advice_error( next?: string ): string {
			return super.advice_error( next ) ?? ''
		}

		@ $mol_mem
		override has_error(): boolean {
			return !!this.advice_error()
		}

		@ $mol_mem
		override has_block(): boolean {
			return this.is_busy() || this.raw_markdown().length > 0 || this.has_error()
		}

		@ $mol_mem
		override trigger_enabled(): boolean {
			return !this.is_busy()
		}

		@ $mol_mem
		override button_label(): string {
			if( this.is_busy() ) return 'Анализирую...'
			if( this.raw_markdown() ) return '✨ Обновить советы'
			return '✨ Получить советы'
		}

		@ $mol_mem
		override advice_html(): string {
			if( this.is_busy() && !this.raw_markdown() ) {
				return '<span style="opacity:.5;font-size:13px">✨ Генерирую советы...</span>'
			}
			return $bog_tracker_mpit_neolo_ai_advice.markdown_to_html( this.raw_markdown() )
		}

		override auto() {
			super.auto()
			try {
				const node = this.Content().dom_node() as HTMLElement
				if( !node ) return
				const html = this.advice_html()
				if( node.innerHTML !== html ) {
					node.innerHTML = html
					// Autoscroll to bottom as new tokens arrive (matches original block.scrollTop behaviour)
					if( this.is_busy() ) node.scrollTop = node.scrollHeight
				}
			} catch {}
		}

		// ── Trigger ────────────────────────────────────────────
		@ $mol_action
		override trigger( next?: any ): any {
			if( next === undefined ) return null
			if( this.is_busy() ) return null
			this.raw_markdown( '' )
			this.advice_error( '' )
			this.is_busy( true )
			$mol_wire_async( this ).run_stream()
			return null
		}

		async run_stream() {
			try {
				const res = await this.api().stats_advice( {
					overdue: [ ...this.overdue() ],
					rejected: [ ...this.rejected() ],
					done_count: this.done_count(),
					total_count: this.total_count(),
				}, ( token: string ) => {
					this.raw_markdown( this.raw_markdown() + token )
				} )
				if( !res.ok ) {
					this.advice_error( '⚠ ' + ( res.error || 'Неизвестная ошибка' ) )
				} else if( !this.raw_markdown() ) {
					this.advice_error( 'Нет ответа от модели' )
				}
			} catch( e: any ) {
				this.advice_error( 'Ошибка: ' + ( e?.message || String( e ) ) )
			} finally {
				this.is_busy( false )
			}
		}

		// ── Markdown renderer (ported from markdownToHtml) ─────
		static markdown_to_html( md: string ): string {
			if( !md ) return ''
			let html = md
				.replace( /&/g, '&amp;' )
				.replace( /</g, '&lt;' )
				.replace( />/g, '&gt;' )
				.replace( /### (.+)/g, '<h4 style="margin:14px 0 6px;font-size:15px;color:#1aa843;font-weight:800">$1</h4>' )
				.replace( /## (.+)/g, '<h3 style="margin:14px 0 6px;font-size:16px;color:#1aa843;font-weight:800">$1</h3>' )
				.replace( /\*\*(.+?)\*\*/g, '<strong>$1</strong>' )
				.replace( /\*(.+?)\*/g, '<em>$1</em>' )
				.replace( /^[-•] (.+)/gm, '<li style="margin-bottom:4px">$1</li>' )
				.replace( /(<li[^>]*>.*<\/li>\n?)+/g, m => `<ul style="padding-left:18px;margin:6px 0">${ m }</ul>` )
				.replace( /\n{2,}/g, '</p><p style="margin:0 0 8px">' )
				.replace( /\n/g, '<br>' )
				.replace( /^(.)/, '<p style="margin:0 0 8px">$1' )
				.replace( /(.)$/, '$1</p>' )
			return html
		}

	}

}
