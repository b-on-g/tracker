namespace $.$$ {

	const STATUS_LABELS: Record<string, string> = {
		pending: '📋 В планах',
		progress: '⏳ В работе',
		review: '📝 На проверке',
		done: '✅ Готово',
		rejected: '❌ Отклонено',
		overdue: '⏰ Просрочено',
	}

	const SOURCE_LABELS: Record<string, string> = {
		self: '📝 Моя задача',
		teacher: '📚 От учителя',
		parent: '👨‍👩‍👧 От родителя',
	}

	function next_action( status: string, source: string ): { label: string; next: string } | null {
		if( status === 'pending' ) return { label: 'Приступить', next: 'progress' }
		if( status === 'progress' ) {
			if( source === 'teacher' || source === 'parent' ) return { label: 'Сдать на проверку', next: 'review' }
			return { label: 'Завершить', next: 'done' }
		}
		return null
	}

	export class $bog_tracker_mpit_neolo_task_view extends $.$bog_tracker_mpit_neolo_task_view {

		@ $mol_mem
		override hidden( next?: boolean ): boolean {
			return super.hidden( next ) ?? true
		}

		@ $mol_mem
		task(): $bog_tracker_mpit_neolo_task | null {
			const id = this.task_id()
			if( !id ) return null
			const tasks = this.store().tasks_all()
			return tasks.find( t => t.link().toString() === id ) ?? null
		}

		@ $mol_mem
		override task_status() {
			return this.task()?.status()?.val() ?? 'pending'
		}

		@ $mol_mem
		override task_source() {
			return this.task()?.source()?.val() ?? 'self'
		}

		@ $mol_mem
		override status_label() {
			return STATUS_LABELS[ this.task_status() ] ?? this.task_status()
		}

		@ $mol_mem
		override source_label() {
			return SOURCE_LABELS[ this.task_source() ] ?? this.task_source()
		}

		@ $mol_mem
		override title_value( next?: string ): string {
			if( next !== undefined ) {
				const task = this.task()
				if( task ) task.title( null )!.val( next )
				return next
			}
			return this.task()?.title()?.val() ?? ''
		}

		@ $mol_mem
		override desc_value( next?: string ): string {
			if( next !== undefined ) {
				const task = this.task()
				if( task ) task.desc( null )!.val( next )
				return next
			}
			return this.task()?.desc()?.val() ?? ''
		}

		@ $mol_mem
		override date_value( next?: string ): string {
			if( next !== undefined ) {
				const task = this.task()
				if( task ) task.date( null )!.val( ( next || '' ).slice( 0, 10 ) )
				return next
			}
			return this.task()?.date()?.val() ?? ''
		}

		parse_time() {
			const raw = this.task()?.time()?.val() ?? ''
			const parts = raw.split( /[–\-]/ )
			const ps = ( s: string ) => {
				const p = ( s || '' ).trim().split( ':' )
				return [ Number( p[ 0 ] ) || 0, Number( p[ 1 ] ) || 0 ] as const
			}
			const [ sh, sm ] = ps( parts[ 0 ] ?? '' )
			const [ eh, em ] = ps( parts[ 1 ] ?? '' )
			return { sh, sm, eh, em }
		}

		@ $mol_mem
		override start_h( next?: number ): number {
			if( next !== undefined ) return super.start_h( next ) ?? 0
			return super.start_h() ?? this.parse_time().sh
		}
		@ $mol_mem
		override start_m( next?: number ): number {
			if( next !== undefined ) return super.start_m( next ) ?? 0
			return super.start_m() ?? this.parse_time().sm
		}
		@ $mol_mem
		override end_h( next?: number ): number {
			if( next !== undefined ) return super.end_h( next ) ?? 0
			return super.end_h() ?? this.parse_time().eh
		}
		@ $mol_mem
		override end_m( next?: number ): number {
			if( next !== undefined ) return super.end_m( next ) ?? 0
			return super.end_m() ?? this.parse_time().em
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
		action_info() {
			return next_action( this.task_status(), this.task_source() )
		}

		@ $mol_mem
		override has_action() { return this.action_info() != null }

		@ $mol_mem
		override action_label() {
			return this.action_info()?.label ?? ''
		}

		@ $mol_mem
		override action_next() {
			return this.action_info()?.next ?? ''
		}

		@ $mol_mem
		override teacher_file_name() {
			return this.task()?.teacher_file()?.val() ?? ''
		}

		@ $mol_mem
		override has_teacher_file() {
			return !!this.teacher_file_name()
		}

		@ $mol_mem
		override teacher_file_url() {
			const task = this.task()
			if( !task ) return ''
			const username = task.owner_username()?.val() ?? this.store().profile()?.username()?.val() ?? ''
			const owner_id = task.owner_id()?.val()
			if( !username || owner_id == null ) return ''
			return `${ this.api().base() }/teacher/task_file/${ username }/${ owner_id }`
		}

		@ $mol_mem
		override student_file_name() {
			return this.task()?.student_file()?.val() ?? ''
		}

		@ $mol_mem
		override has_student_file() {
			const st = this.task_status()
			return !!this.student_file_name() && [ 'review', 'done', 'rejected' ].includes( st )
		}

		@ $mol_mem
		override student_file_url() {
			const task = this.task()
			if( !task ) return ''
			const username = task.owner_username()?.val() ?? this.store().profile()?.username()?.val() ?? ''
			const owner_id = task.owner_id()?.val()
			if( !username || owner_id == null ) return ''
			return `${ this.api().base() }/tasks/${ username }/${ owner_id }/file`
		}

		@ $mol_mem
		override show_upload() {
			const src = this.task_source()
			const st = this.task_status()
			return ( src === 'teacher' || src === 'parent' ) && st === 'progress'
		}

		@ $mol_mem
		override show_ai_test() {
			const task = this.task()
			if( !task ) return false
			const has_file = !!( task.teacher_file()?.val() || task.student_file()?.val() )
			const is_teacher = task.source()?.val() === 'teacher'
			return has_file || is_teacher
		}

		@ $mol_mem
		override show_ai_explain() {
			const task = this.task()
			if( !task ) return false
			const has_file = !!( task.teacher_file()?.val() || task.student_file()?.val() )
			const is_teacher = task.source()?.val() === 'teacher'
			return is_teacher && !has_file
		}

		@ $mol_mem
		override student_file( next?: File | null ): File | null {
			return super.student_file( next as any ) as File | null ?? null
		}

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
			this.do_save()
			return null
		}

		@ $mol_action
		do_save() {
			const task = this.task()
			if( !task ) return
			this.error( '' )
			const title = this.title_value().trim()
			const desc = this.desc_value().trim()
			const date = ( this.date_value().trim() || '' ).slice( 0, 10 )
			if( !title || !desc || !date ) {
				this.error( 'Заполните название, описание и дату.' )
				return
			}
			const ts = this.fmt_time_segment( this.start_h(), this.start_m() )
			const te = this.fmt_time_segment( this.end_h(), this.end_m() )
			const time = `${ ts }–${ te }`
			this.busy( true )
			try {
				task.title( null )!.val( title )
				task.desc( null )!.val( desc )
				task.date( null )!.val( date )
				task.time( null )!.val( time )
				this.hidden( true )
				this.on_saved( null as any )
			} catch( e ) {
				this.error( 'Не удалось сохранить: ' + String( e ) )
			} finally {
				this.busy( false )
			}
		}

		@ $mol_action
		override action_click( next?: any ): any {
			if( next === undefined ) return null
			void this.do_action()
			return null
		}

		async do_action() {
			const task = this.task()
			if( !task ) return
			const info = this.action_info()
			if( !info ) return
			this.busy( true )
			try {
				// If transitioning to review AND there's a student file attached — upload it
				if( info.next === 'review' ) {
					const file = this.student_file()
					if( file ) {
						const profile = this.store().profile()
						const username = profile?.username()?.val() ?? ''
						const owner_id = task.owner_id()?.val()
						if( username && owner_id != null ) {
							const res = await this.api().upload_student_file( username, Number( owner_id ), file )
							if( res?.ok && res.filename ) {
								task.student_file( null )!.val( res.filename )
							}
						}
					}
				}
				task.status( null )!.val( info.next )
				this.hidden( true )
				this.on_saved( null as any )
			} catch( e ) {
				this.error( 'Ошибка: ' + String( e ) )
			} finally {
				this.busy( false )
			}
		}

		@ $mol_action
		override delete_click( next?: any ): any {
			if( next === undefined ) return null
			const task = this.task()
			if( !task ) return null
			const reg = this.store().registry()
			if( !reg ) return null
			try {
				reg.Tasks( null )?.cut( task.link() )
			} catch {}
			this.hidden( true )
			this.on_saved( null as any )
			return null
		}

		@ $mol_action
		override ai_test_click( next?: any ): any {
			if( next === undefined ) return null
			this.open_ai_test( this.task_id(), null as any )
			return null
		}

		@ $mol_action
		override ai_explain_click( next?: any ): any {
			if( next === undefined ) return null
			this.open_ai_explain( this.task_id(), null as any )
			return null
		}

	}

}
