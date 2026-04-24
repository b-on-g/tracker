namespace $.$$ {

	export class $bog_tracker_mpit_neolo_task_assign extends $.$bog_tracker_mpit_neolo_task_assign {

		@ $mol_mem
		override hidden( next?: boolean ): boolean {
			return super.hidden( next ) ?? true
		}

		@ $mol_mem
		override target( next?: string ): string {
			return super.target( next ) ?? 'class'
		}

		@ $mol_mem
		override student_id( next?: string ): string {
			return super.student_id( next ) ?? ''
		}

		@ $mol_mem
		override show_student_select() {
			return this.target() === 'student'
		}

		@ $mol_mem
		klass(): $bog_tracker_mpit_neolo_class | null {
			const id = this.class_id()
			if( !id ) return null
			return this.store().classes_all().find( c => c.link().toString() === id ) ?? null
		}

		@ $mol_mem
		override student_options() {
			const cls = this.klass()
			if( !cls ) return {}
			const ids = cls.student_ids()?.items() ?? []
			const out: Record<string, string> = {}
			for( const sid of ids ) out[ sid ] = `ID: ${ sid }`
			return out
		}

		@ $mol_mem
		override title_value( next?: string ): string { return super.title_value( next ) ?? '' }
		@ $mol_mem
		override desc_value( next?: string ): string { return super.desc_value( next ) ?? '' }
		@ $mol_mem
		override date_value( next?: string ): string {
			if( next !== undefined ) return super.date_value( ( next || '' ).slice( 0, 10 ) ) ?? ''
			return super.date_value() ?? new Date().toISOString().slice( 0, 10 )
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
		override teacher_file( next?: File | null ): File | null {
			return super.teacher_file( next as any ) as File | null ?? null
		}

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
		override save_label() { return this.busy() ? 'Отправляем...' : 'Отправить задание' }

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
				const start_mins = this.start_h() * 60 + this.start_m()
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

		@ $mol_action
		override save_click( next?: any ): any {
			if( next === undefined ) return null
			void this.do_save()
			return null
		}

		@ $mol_action
		reset_form() {
			this.title_value( '' )
			this.desc_value( '' )
			this.start_h( 0 )
			this.start_m( 0 )
			this.end_h( 0 )
			this.end_m( 0 )
			this.teacher_file( null )
			this.error( '' )
			this.ai_hint( '' )
		}

		async do_save() {
			this.error( '' )
			const title = this.title_value().trim()
			const desc = this.desc_value().trim()
			const date = ( this.date_value().trim() || '' ).slice( 0, 10 )
			if( !title ) { this.error( 'Введите название задания' ); return }
			if( !date ) { this.error( 'Укажите дату' ); return }

			const target = this.target()
			let student_id = ''
			if( target === 'student' ) {
				student_id = this.student_id()
				if( !student_id ) { this.error( 'Выберите ученика' ); return }
			}

			const ts = this.fmt_time_segment( this.start_h(), this.start_m() )
			const te = this.fmt_time_segment( this.end_h(), this.end_m() )
			const time = `${ ts }–${ te }`

			this.busy( true )
			try {
				const store = this.store()
				const reg = store.registry()
				if( !reg ) { this.error( 'Нет доступа к базе.' ); return }
				const tasks_list = reg.Tasks( null )
				if( !tasks_list ) { this.error( 'Не удалось получить список задач.' ); return }

				const profile = store.profile()
				const author_id = profile?.user_id()?.val() ?? null

				// NOTE: In the real cross-user impl each assignment would be created inside the
				// target student's land (via $giper_baza_glob.Node / invitation channel).
				// Here we create a single task in the teacher's own home land, carrying
				// class_id / student target info so a sync layer can project it later.
				const task = tasks_list.make( null ) as $bog_tracker_mpit_neolo_task | null
				if( !task ) { this.error( 'Не удалось создать задачу.' ); return }

				task.title( null )!.val( title )
				task.desc( null )!.val( desc )
				task.date( null )!.val( date )
				task.time( null )!.val( time )
				task.source( null )!.val( 'teacher' )
				task.status( null )!.val( 'pending' )
				if( this.class_id() ) task.class_id( null )!.val( this.class_id() )
				if( author_id != null ) task.author_id( null )!.val( author_id )
				if( target === 'student' ) {
					try {
						task.owner_id( null )!.val( BigInt( student_id ) )
					} catch {}
				}

				// Teacher file upload (optional). Uses numeric owner_id & username placeholder.
				const file = this.teacher_file()
				if( file ) {
					const username = target === 'student' ? student_id : this.class_id()
					const task_id_numeric = Number( author_id ?? 0 )
					try {
						const res = await this.api().upload_teacher_file( username, task_id_numeric, file )
						if( res?.ok && res.filename ) {
							task.teacher_file( null )!.val( res.filename )
						}
					} catch {}
				}

				this.reset_form()
				this.hidden( true )
				this.on_saved( null as any )
			} catch( e ) {
				this.error( 'Ошибка: ' + String( e ) )
			} finally {
				this.busy( false )
			}
		}

	}

}
