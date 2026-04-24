namespace $.$$ {

	export class $bog_tracker_mpit_neolo_task_create extends $.$bog_tracker_mpit_neolo_task_create {

		@ $mol_mem
		override hidden( next?: boolean ): boolean {
			return super.hidden( next ) ?? true
		}

		@ $mol_mem
		override title_value( next?: string ): string {
			return super.title_value( next ) ?? ''
		}

		@ $mol_mem
		override desc_value( next?: string ): string {
			return super.desc_value( next ) ?? ''
		}

		@ $mol_mem
		override date_value( next?: string ): string {
			return super.date_value( next ) ?? ( this.default_date() || '' )
		}

		@ $mol_mem
		override start_h( next?: number ): number { return super.start_h( next ) ?? 0 }
		@ $mol_mem
		override start_m( next?: number ): number { return super.start_m( next ) ?? 0 }
		@ $mol_mem
		override end_h( next?: number ): number { return super.end_h( next ) ?? 0 }
		@ $mol_mem
		override end_m( next?: number ): number { return super.end_m( next ) ?? 0 }

		@ $mol_mem
		override error( next?: string ): string { return super.error( next ) ?? '' }

		@ $mol_mem
		override has_error() { return this.error().length > 0 }

		@ $mol_mem
		override busy( next?: boolean ): boolean { return super.busy( next ) ?? false }

		@ $mol_mem
		override ai_hint( next?: string ): string { return super.ai_hint( next ) ?? '' }

		@ $mol_mem
		override save_enabled() { return !this.busy() }

		@ $mol_mem
		override save_label() { return this.busy() ? 'Сохраняем...' : 'Сохранить' }

		@ $mol_action
		override close_click( next?: any ): any {
			if( next === undefined ) return null
			this.hidden( true )
			return null
		}

		@ $mol_action
		override cancel_click( next?: any ): any {
			if( next === undefined ) return null
			this.hidden( true )
			return null
		}

		@ $mol_action
		reset_form() {
			this.title_value( '' )
			this.desc_value( '' )
			this.date_value( this.default_date() || '' )
			this.start_h( 0 )
			this.start_m( 0 )
			this.end_h( 0 )
			this.end_m( 0 )
			this.error( '' )
			this.ai_hint( '' )
		}

		@ $mol_action
		override ai_predict( next?: any ): any {
			if( next === undefined ) return null
			void this.do_predict()
			return null
		}

		async do_predict() {
			const title = this.title_value().trim()
			const desc = this.desc_value().trim()
			const text = [ title, desc ].filter( Boolean ).join( '. ' ).trim()
			if( !text ) { alert( 'Сначала введите название или описание задачи.' ); return }
			this.ai_hint( '⏳ ...' )
			try {
				const res = await this.api().predict_time( text )
				if( !res.ok || res.minutes == null ) {
					alert( 'ML недоступна: ' + ( res.error || 'неизвестная ошибка' ) )
					this.ai_hint( '' )
					return
				}
				const mins = res.minutes
				const sh = this.start_h() || 0
				const sm = this.start_m() || 0
				const start_mins = sh * 60 + sm
				const end_mins = ( start_mins + mins ) % ( 24 * 60 )
				this.end_h( Math.floor( end_mins / 60 ) )
				this.end_m( end_mins % 60 )
				const h = mins >= 60 ? `${ Math.floor( mins / 60 ) } ч ${ mins % 60 > 0 ? ( mins % 60 ) + ' мин' : '' }`.trim() : `${ mins } мин`
				this.ai_hint( `✓ ~${ h }` )
			} catch( e: any ) {
				alert( 'Не удалось подключиться к серверу: ' + ( e?.message || String( e ) ) )
				this.ai_hint( '' )
			}
		}

		fmt_time_segment( h: number, m: number ): string {
			return `${ String( h ).padStart( 2, '0' ) }:${ String( m ).padStart( 2, '0' ) }`
		}

		fmt_date( raw: string ): string {
			// $mol_date returns 'YYYY-MM-DD' or 'YYYY-MM-DD hh:mm' — take date part.
			return ( raw || '' ).slice( 0, 10 )
		}

		@ $mol_action
		override save_click( next?: any ): any {
			if( next === undefined ) return null
			this.do_save()
			return null
		}

		@ $mol_action
		do_save() {
			this.error( '' )
			const title = this.title_value().trim()
			const desc = this.desc_value().trim()
			const date = this.fmt_date( this.date_value().trim() )
			if( !title || !desc || !date ) {
				this.error( 'Заполните название, описание и дату.' )
				return
			}
			const ts = this.fmt_time_segment( this.start_h(), this.start_m() )
			const te = this.fmt_time_segment( this.end_h(), this.end_m() )
			const time = ts && te ? `${ ts }–${ te }` : ( ts || te || '—' )

			this.busy( true )
			try {
				const store = this.store()
				const registry = store.registry()
				if( !registry ) {
					this.error( 'Нет доступа к базе.' )
					return
				}
				const list = registry.Tasks( null )
				if( !list ) {
					this.error( 'Не удалось получить список задач.' )
					return
				}
				const task = list.make( null ) as $bog_tracker_mpit_neolo_task | null
				if( !task ) {
					this.error( 'Не удалось создать задачу.' )
					return
				}
				task.title( null )!.val( title )
				task.desc( null )!.val( desc )
				task.date( null )!.val( date )
				task.time( null )!.val( time )
				task.source( null )!.val( 'self' )
				task.status( null )!.val( 'pending' )

				// Owner context
				const profile = store.profile()
				if( profile ) {
					const username = profile.username()?.val() ?? ''
					const uid = profile.user_id()?.val()
					if( username ) task.owner_username( null )!.val( username )
					if( uid != null ) task.owner_id( null )!.val( uid )
				}

				this.reset_form()
				this.hidden( true )
				this.on_saved( null as any )
			} catch( e ) {
				this.error( 'Не удалось сохранить: ' + String( e ) )
			} finally {
				this.busy( false )
			}
		}

	}

}
