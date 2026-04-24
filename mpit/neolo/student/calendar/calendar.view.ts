namespace $.$$ {

	const MONTH_NAMES = [
		'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
		'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
	]

	function task_dt( task: $bog_tracker_mpit_neolo_task ): string {
		const time = ( task.time()?.val() ?? '' ).split( /[–\-]/ )[ 0 ]?.trim() ?? ''
		const tm = /^\d{2}:\d{2}$/.test( time ) ? time : '00:00'
		return `${ task.date()?.val() ?? '' }T${ tm }:00`
	}

	function src_label( source: string ) {
		if( source === 'teacher' ) return 'От учителя'
		if( source === 'parent' ) return 'От родителя'
		return 'Задача'
	}

	function fmt_date_ru( iso: string ): string {
		if( !iso ) return ''
		const d = new Date( iso + 'T12:00:00' )
		if( isNaN( d.getTime() ) ) return iso
		return d.toLocaleDateString( 'ru-RU', { day: 'numeric', month: 'long', weekday: 'long' } )
	}

	function fmt_upcoming_date( iso: string ): string {
		if( !iso ) return ''
		const d = new Date( iso + 'T12:00:00' )
		if( isNaN( d.getTime() ) ) return iso
		return d.toLocaleDateString( 'ru-RU', { day: 'numeric', month: 'short' } )
	}

	export class $bog_tracker_mpit_neolo_student_calendar extends $.$bog_tracker_mpit_neolo_student_calendar {

		// ────────── month / selected defaults ──────────

		@ $mol_mem
		override view_month( next?: number ): number {
			const cur = super.view_month( next )
			if( cur !== undefined && cur !== null ) return cur
			return new Date().getMonth()
		}

		@ $mol_mem
		override view_year( next?: number ): number {
			const cur = super.view_year( next )
			if( cur !== undefined && cur !== null && cur > 0 ) return cur
			return new Date().getFullYear()
		}

		@ $mol_mem
		override selected_date( next?: string ): string {
			const cur = super.selected_date( next )
			if( cur ) return cur
			return new Date().toISOString().slice( 0, 10 )
		}

		// ────────── month label ──────────

		@ $mol_mem
		override month_label() {
			return `${ MONTH_NAMES[ this.view_month() ] } ${ this.view_year() }`
		}

		// ────────── tasks grouping ──────────

		@ $mol_mem
		tasks_all(): $bog_tracker_mpit_neolo_task[] {
			return this.store().tasks_all()
		}

		@ $mol_mem_key
		tasks_for_date( id: string ): $bog_tracker_mpit_neolo_task[] {
			const all = this.tasks_all()
			const out: $bog_tracker_mpit_neolo_task[] = []
			for( const t of all ) {
				if( ( t.date()?.val() ?? '' ) === id ) out.push( t )
			}
			return out
		}

		@ $mol_mem
		override cell_ids(): string[] {
			const m = this.view_month()
			const y = this.view_year()
			const first = new Date( y, m, 1 )
			const offset = ( first.getDay() + 6 ) % 7
			const days = new Date( y, m + 1, 0 ).getDate()
			const ids: string[] = []
			for( let i = 0; i < offset; i++ ) ids.push( `empty-${ i }` )
			for( let d = 1; d <= days; d++ ) {
				const mm = String( m + 1 ).padStart( 2, '0' )
				const dd = String( d ).padStart( 2, '0' )
				ids.push( `${ y }-${ mm }-${ dd }` )
			}
			return ids
		}

		@ $mol_mem_key
		override cell_date_id( id: string ): string {
			return id
		}

		@ $mol_mem_key
		override cell_is_empty( id: string ): boolean {
			return id.startsWith( 'empty-' )
		}

		@ $mol_mem_key
		override cell_day( id: string ): string {
			if( id.startsWith( 'empty-' ) ) return ''
			const parts = id.split( '-' )
			return String( Number( parts[ 2 ] ) )
		}

		@ $mol_mem_key
		override cell_count( id: string ): string {
			if( id.startsWith( 'empty-' ) ) return ''
			const tasks = this.tasks_for_date( id )
			return tasks.length ? String( tasks.length ) : ''
		}

		@ $mol_mem_key
		override cell_has_count( id: string ): boolean {
			return !!this.cell_count( id )
		}

		@ $mol_mem_key
		override cell_is_selected( id: string ): boolean {
			if( id.startsWith( 'empty-' ) ) return false
			return id === this.selected_date()
		}

		@ $mol_mem_key
		override cell_is_today( id: string ): boolean {
			if( id.startsWith( 'empty-' ) ) return false
			return id === new Date().toISOString().slice( 0, 10 )
		}

		@ $mol_mem
		override weekday_ids() {
			return super.weekday_ids()
		}

		@ $mol_mem_key
		override weekday_label( id: string ): string {
			// id is the raw weekday name
			return id
		}

		@ $mol_mem
		override grid_cells() {
			const weekdays = this.weekday_ids().map( id => this.Weekday( id ) )
			const cells = this.cell_ids().map( id => this.Cell( id ) )
			return [ ...weekdays, ...cells ] as any[]
		}

		// ────────── selected-day tasks ──────────

		@ $mol_mem
		override selected_label() {
			return fmt_date_ru( this.selected_date() )
		}

		@ $mol_mem
		day_tasks_sorted(): $bog_tracker_mpit_neolo_task[] {
			const d = this.selected_date()
			const list = this.tasks_for_date( d )
			return list.slice().sort( ( a, b ) => ( a.time()?.val() ?? '' ).localeCompare( b.time()?.val() ?? '' ) )
		}

		@ $mol_mem
		override day_task_ids(): string[] {
			return this.day_tasks_sorted().map( t => t.link().str as string )
		}

		@ $mol_mem
		override day_is_empty(): boolean {
			return this.day_task_ids().length === 0
		}

		@ $mol_mem_key
		day_task_by_id( id: string ): $bog_tracker_mpit_neolo_task | null {
			return this.tasks_all().find( t => t.link().str === id ) ?? null
		}

		@ $mol_mem_key
		override day_task_id( id: string ) { return id }

		@ $mol_mem_key
		override day_task_time( id: string ): string {
			return this.day_task_by_id( id )?.time()?.val() ?? '—'
		}

		@ $mol_mem_key
		override day_task_title( id: string ): string {
			return this.day_task_by_id( id )?.title()?.val() ?? ''
		}

		@ $mol_mem_key
		override day_task_meta( id: string ): string {
			const t = this.day_task_by_id( id )
			if( !t ) return ''
			const desc = t.desc()?.val() ?? ''
			const src = t.source()?.val() ?? 'self'
			return `${ desc } · ${ src_label( src ) }`
		}

		@ $mol_mem
		override day_tasks() {
			return this.day_task_ids().map( id => this.Day_task( id ) )
		}

		// ────────── upcoming events ──────────

		@ $mol_mem
		upcoming_list_sorted(): $bog_tracker_mpit_neolo_task[] {
			const all = this.tasks_all().slice()
			all.sort( ( a, b ) => task_dt( a ).localeCompare( task_dt( b ) ) )
			return all.slice( 0, 6 )
		}

		@ $mol_mem
		override upcoming_ids(): string[] {
			return this.upcoming_list_sorted().map( t => t.link().str as string )
		}

		@ $mol_mem_key
		upcoming_by_id( id: string ): $bog_tracker_mpit_neolo_task | null {
			return this.tasks_all().find( t => t.link().str === id ) ?? null
		}

		@ $mol_mem_key
		override upcoming_id( id: string ) { return id }

		@ $mol_mem_key
		override upcoming_date( id: string ): string {
			return fmt_upcoming_date( this.upcoming_by_id( id )?.date()?.val() ?? '' )
		}

		@ $mol_mem_key
		override upcoming_time( id: string ): string {
			return this.upcoming_by_id( id )?.time()?.val() ?? '—'
		}

		@ $mol_mem_key
		override upcoming_title( id: string ): string {
			return this.upcoming_by_id( id )?.title()?.val() ?? ''
		}

		@ $mol_mem
		override upcoming() {
			return this.upcoming_ids().map( id => this.Upcoming_row( id ) )
		}

		// ────────── actions ──────────

		@ $mol_action
		override prev_month( next?: any ): any { return null }

		@ $mol_action
		override next_month( next?: any ): any { return null }

		@ $mol_action
		override create_click( next?: any ): any { return null }

		@ $mol_action
		override select_day( id: string, next?: any ): any {
			if( next !== undefined ) {
				if( !id.startsWith( 'empty-' ) ) this.selected_date( id )
			}
			return null
		}

		@ $mol_action
		override open_task( id: string, next?: any ): any { return null }

	}

}
