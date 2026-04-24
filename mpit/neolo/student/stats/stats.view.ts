namespace $.$$ {

	const ROLE_LABELS: Record<string, string> = {
		student: 'Ученик',
		teacher: 'Учитель',
		parent: 'Родитель',
	}

	type Point = { day: number; value: number }

	function task_status( task: $bog_tracker_mpit_neolo_task ): string {
		const st = task.status()?.val() ?? 'pending'
		if( st === 'done' || st === 'rejected' || st === 'review' || st === 'progress' ) return st
		const today = new Date().toISOString().slice( 0, 10 )
		const date = task.date()?.val() ?? ''
		if( date && date < today ) return 'overdue'
		return st
	}

	function build_cum(
		tasks: $bog_tracker_mpit_neolo_task[],
		predicate: ( t: $bog_tracker_mpit_neolo_task ) => boolean,
	): Point[] {
		const now = new Date()
		const y = now.getFullYear()
		const mo = now.getMonth()
		const td = now.getDate()
		const dim = new Date( y, mo + 1, 0 ).getDate()
		const per_day = new Array( dim + 1 ).fill( 0 )
		for( const t of tasks ) {
			const raw = t.date()?.val() ?? ''
			if( !raw ) continue
			const d = new Date( raw + 'T12:00:00' )
			if( d.getFullYear() === y && d.getMonth() === mo && predicate( t ) ) {
				per_day[ d.getDate() ] += 1
			}
		}
		const pts: Point[] = []
		let cum = 0
		for( let d = 1; d <= td; d++ ) {
			cum += per_day[ d ]
			pts.push( { day: d, value: cum } )
		}
		return pts
	}

	function build_paths( points: Point[] ): { line: string; fill: string } {
		if( points.length === 0 ) return { line: '', fill: '' }
		const W = 400, H = 90, padL = 10, padR = 10, padT = 12, padB = 18
		const innerW = W - padL - padR
		const innerH = H - padT - padB
		const baseline = padT + innerH

		const has_data = points.some( p => p.value > 0 )
		if( !has_data ) return { line: '', fill: '' }

		const n = points.length
		const max_val = Math.max( ...points.map( p => p.value ), 1 )
		const sx = ( i: number ) => padL + i / Math.max( n - 1, 1 ) * innerW
		const sy = ( v: number ) => baseline - Math.max( 0, Math.min( 1, v / max_val ) ) * innerH

		const px = points.map( ( _, i ) => sx( i ) )
		const py = points.map( p => sy( p.value ) )

		// Monotone cubic (Fritsch-Carlson)
		const m = new Array( n ).fill( 0 )
		const delta: number[] = []
		for( let i = 0; i < n - 1; i++ ) delta.push( ( py[ i + 1 ] - py[ i ] ) / ( px[ i + 1 ] - px[ i ] ) )
		if( n >= 2 ) {
			m[ 0 ] = delta[ 0 ]
			for( let i = 1; i < n - 1; i++ ) m[ i ] = ( delta[ i - 1 ] + delta[ i ] ) / 2
			m[ n - 1 ] = delta[ n - 2 ]
		}
		for( let i = 0; i < n - 1; i++ ) {
			if( Math.abs( delta[ i ] ) < 1e-10 ) { m[ i ] = 0; m[ i + 1 ] = 0; continue }
			const a = m[ i ] / delta[ i ], b = m[ i + 1 ] / delta[ i ]
			const h = Math.sqrt( a * a + b * b )
			if( h > 3 ) {
				m[ i ] = 3 * a / h * delta[ i ]
				m[ i + 1 ] = 3 * b / h * delta[ i ]
			}
		}
		let line = `M${ px[ 0 ].toFixed( 2 ) },${ py[ 0 ].toFixed( 2 ) }`
		for( let i = 0; i < n - 1; i++ ) {
			const dx = ( px[ i + 1 ] - px[ i ] ) / 3
			const cp1x = px[ i ] + dx, cp1y = py[ i ] + m[ i ] * dx
			const cp2x = px[ i + 1 ] - dx, cp2y = py[ i + 1 ] - m[ i + 1 ] * dx
			line += ` C${ cp1x.toFixed( 2 ) },${ cp1y.toFixed( 2 ) } ${ cp2x.toFixed( 2 ) },${ cp2y.toFixed( 2 ) } ${ px[ i + 1 ].toFixed( 2 ) },${ py[ i + 1 ].toFixed( 2 ) }`
		}
		const fill = `${ line } L${ px[ n - 1 ].toFixed( 2 ) },${ baseline } L${ px[ 0 ].toFixed( 2 ) },${ baseline } Z`
		return { line, fill }
	}

	export class $bog_tracker_mpit_neolo_student_stats extends $.$bog_tracker_mpit_neolo_student_stats {

		// ────────── profile ──────────

		@ $mol_mem
		profile() {
			return this.store().profile()
		}

		@ $mol_mem
		override value_name() {
			return this.profile()?.name()?.val() ?? '—'
		}

		@ $mol_mem
		override value_surname() {
			return this.profile()?.surname()?.val() ?? '—'
		}

		@ $mol_mem
		override value_login() {
			return this.profile()?.username()?.val() ?? '—'
		}

		@ $mol_mem
		override value_role() {
			const r = this.profile()?.role()?.val() ?? ''
			return ROLE_LABELS[ r ] ?? r ?? '—'
		}

		@ $mol_mem
		override value_school() {
			return this.profile()?.school()?.val() ?? '—'
		}

		@ $mol_mem
		override value_id() {
			const v = this.profile()?.user_id()?.val()
			return v == null ? '—' : String( v )
		}

		// ────────── stats counts / charts ──────────

		@ $mol_mem
		tasks_all(): $bog_tracker_mpit_neolo_task[] {
			return this.store().tasks_all()
		}

		@ $mol_mem
		done_tasks() {
			return this.tasks_all().filter( t => task_status( t ) === 'done' )
		}

		@ $mol_mem
		work_tasks() {
			return this.tasks_all().filter( t => {
				const s = task_status( t )
				return s !== 'done' && s !== 'rejected' && s !== 'overdue'
			} )
		}

		@ $mol_mem
		overdue_tasks() {
			return this.tasks_all().filter( t => task_status( t ) === 'overdue' )
		}

		@ $mol_mem
		rejected_tasks() {
			return this.tasks_all().filter( t => {
				const s = task_status( t )
				return s === 'rejected' || ( t.status()?.val() ?? '' ) === 'rejected'
			} )
		}

		@ $mol_mem
		override done_count() { return String( this.done_tasks().length ) }

		@ $mol_mem
		override work_count() { return String( this.work_tasks().length ) }

		@ $mol_mem
		override overdue_count() { return String( this.overdue_tasks().length ) }

		@ $mol_mem
		override rejected_count() { return String( this.rejected_tasks().length ) }

		@ $mol_mem
		done_paths() {
			return build_paths( build_cum( this.tasks_all(), t => task_status( t ) === 'done' ) )
		}

		@ $mol_mem
		work_paths() {
			return build_paths( build_cum( this.tasks_all(), t => {
				const s = task_status( t )
				return s !== 'done' && s !== 'rejected' && s !== 'overdue'
			} ) )
		}

		@ $mol_mem
		overdue_paths() {
			return build_paths( build_cum( this.tasks_all(), t => task_status( t ) === 'overdue' ) )
		}

		@ $mol_mem
		rejected_paths() {
			return build_paths( build_cum( this.tasks_all(), t => {
				const s = task_status( t )
				return s === 'rejected' || ( t.status()?.val() ?? '' ) === 'rejected'
			} ) )
		}

		@ $mol_mem
		override done_line_path() { return this.done_paths().line }
		@ $mol_mem
		override done_fill_path() { return this.done_paths().fill }
		@ $mol_mem
		override work_line_path() { return this.work_paths().line }
		@ $mol_mem
		override work_fill_path() { return this.work_paths().fill }
		@ $mol_mem
		override overdue_line_path() { return this.overdue_paths().line }
		@ $mol_mem
		override overdue_fill_path() { return this.overdue_paths().fill }
		@ $mol_mem
		override rejected_line_path() { return this.rejected_paths().line }
		@ $mol_mem
		override rejected_fill_path() { return this.rejected_paths().fill }

		// ────────── invitations ──────────

		@ $mol_mem
		invitations_pending(): $bog_tracker_mpit_neolo_invitation[] {
			return this.store().invitations_all().filter(
				inv => ( inv.status()?.val() ?? 'pending' ) === 'pending',
			)
		}

		@ $mol_mem
		override invitation_ids(): string[] {
			return this.invitations_pending().map( inv => inv.link().str as string )
		}

		@ $mol_mem_key
		invitation_by_id( id: string ): $bog_tracker_mpit_neolo_invitation | null {
			return this.store().invitations_all().find( inv => inv.link().str === id ) ?? null
		}

		@ $mol_mem_key
		override invitation_id_value( id: string ) { return id }

		@ $mol_mem_key
		override invitation_title( id: string ): string {
			const inv = this.invitation_by_id( id )
			if( !inv ) return ''
			const cls = inv.class_name()?.val() ?? ''
			return `Приглашение в класс «${ cls }»`
		}

		@ $mol_mem_key
		override invitation_sub( id: string ): string {
			const inv = this.invitation_by_id( id )
			if( !inv ) return ''
			return `От: ${ inv.from_teacher_name()?.val() ?? '—' }`
		}

		@ $mol_mem
		override invitation_rows() {
			return this.invitation_ids().map( id => this.Invitation_row( id ) )
		}

		@ $mol_action
		override inv_accept( id: string, next?: any ): any {
			if( next !== undefined ) {
				const inv = this.invitation_by_id( id )
				if( inv ) inv.status( null )!.val( 'accepted' )
			}
			return null
		}

		@ $mol_action
		override inv_reject( id: string, next?: any ): any {
			if( next !== undefined ) {
				const inv = this.invitation_by_id( id )
				if( inv ) inv.status( null )!.val( 'rejected' )
			}
			return null
		}

		// ────────── AI advice ──────────

		@ $mol_mem
		override ai_text( next?: string ): string {
			return super.ai_text( next ) ?? ''
		}

		@ $mol_mem
		override ai_visible( next?: boolean ): boolean {
			return super.ai_visible( next ) ?? false
		}

		@ $mol_action
		override ai_click( next?: any ): any {
			if( next === undefined ) return null
			this.ai_visible( true )
			this.ai_text( '✨ Генерирую советы...' )
			const overdue = this.overdue_tasks().map( t => ( {
				title: t.title()?.val() ?? '',
				desc: t.desc()?.val() ?? '',
				date: t.date()?.val() ?? '',
			} ) )
			const rejected = this.rejected_tasks().map( t => ( {
				title: t.title()?.val() ?? '',
				desc: t.desc()?.val() ?? '',
				date: t.date()?.val() ?? '',
			} ) )
			const payload = {
				overdue,
				rejected,
				done_count: this.done_tasks().length,
				total_count: this.tasks_all().length,
			}
			let acc = ''
			this.api().stats_advice( payload, ( token: string ) => {
				acc += token
				this.ai_text( acc )
			} ).then( res => {
				if( !res.ok ) this.ai_text( `Ошибка: ${ res.error ?? 'неизвестно' }` )
				else if( !acc ) this.ai_text( 'Нет ответа от модели' )
			} )
			return null
		}

	}

}
