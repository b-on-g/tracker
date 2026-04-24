namespace $.$$ {

	const month_names = [
		'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
		'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
	]

	function today_iso(): string {
		return new Date().toISOString().slice( 0, 10 )
	}

	function format_date_ru( iso: string ): string {
		if( !iso ) return ''
		try {
			return new Date( iso + 'T12:00:00' ).toLocaleDateString( 'ru-RU', {
				day: 'numeric', month: 'long', year: 'numeric',
			} )
		} catch { return iso }
	}

	export class $bog_tracker_mpit_neolo_parent_calendar extends $.$bog_tracker_mpit_neolo_parent_calendar {

		@ $mol_mem
		override view_year( next?: number ): number {
			const cur = super.view_year( next )
			if( cur !== null && cur !== undefined ) return cur
			return new Date().getFullYear()
		}

		@ $mol_mem
		override view_month( next?: number ): number {
			const cur = super.view_month( next )
			if( cur !== null && cur !== undefined ) return cur
			return new Date().getMonth()
		}

		@ $mol_mem
		override selected_date( next?: string ): string {
			const cur = super.selected_date( next )
			return cur || today_iso()
		}

		@ $mol_mem
		children_list(): readonly $bog_tracker_mpit_neolo_parent_child_summary[] {
			return this.children() as readonly $bog_tracker_mpit_neolo_parent_child_summary[]
		}

		/** Not memoized — returns Giper Baza entities. */
		all_tasks(): readonly $bog_tracker_mpit_neolo_task[] {
			const ids = new Set( this.children_list().map( c => c.id ) )
			return this.store().tasks_all().filter( t => {
				const oid = t.owner_id()?.val()
				return oid !== null && oid !== undefined && ids.has( Number( oid ) )
			} )
		}

		/** Not memoized — values are Giper Baza entities. */
		tasks_by_date(): ReadonlyMap<string, readonly $bog_tracker_mpit_neolo_task[]> {
			const out = new Map<string, $bog_tracker_mpit_neolo_task[]>()
			for( const t of this.all_tasks() ) {
				const d = t.date()?.val() ?? ''
				if( !d ) continue
				let arr = out.get( d )
				if( !arr ) { arr = []; out.set( d, arr ) }
				arr.push( t )
			}
			return out
		}

		@ $mol_mem
		override month_label(): string {
			return `${ month_names[ this.view_month() ] } ${ this.view_year() }`
		}

		@ $mol_action
		override prev_month_click( next?: any ): any {
			if( next !== undefined ) {
				let m = this.view_month() - 1
				let y = this.view_year()
				if( m < 0 ) { m = 11; y -= 1 }
				this.view_month( m )
				this.view_year( y )
			}
			return null
		}

		@ $mol_action
		override next_month_click( next?: any ): any {
			if( next !== undefined ) {
				let m = this.view_month() + 1
				let y = this.view_year()
				if( m > 11 ) { m = 0; y += 1 }
				this.view_month( m )
				this.view_year( y )
			}
			return null
		}

		/** Build a list of day cell ids for rendering. Ids are string keys — "pad-N" for leading
		 * empty cells and "day-YYYY-MM-DD" for month days. */
		@ $mol_mem
		override day_ids(): readonly string[] {
			const y = this.view_year()
			const m = this.view_month()
			const first = new Date( y, m, 1 )
			const offset = ( first.getDay() + 6 ) % 7 // Mon=0
			const days = new Date( y, m + 1, 0 ).getDate()
			const ids: string[] = []
			for( let i = 0; i < offset; i++ ) ids.push( 'pad-' + i )
			for( let d = 1; d <= days; d++ ) {
				const iso = `${ y }-${ String( m + 1 ).padStart( 2, '0' ) }-${ String( d ).padStart( 2, '0' ) }`
				ids.push( 'day-' + iso )
			}
			return ids
		}

		@ $mol_mem_key
		cell_iso( id: string ): string {
			return id.startsWith( 'day-' ) ? id.slice( 4 ) : ''
		}

		@ $mol_mem_key
		override day_label( id: string ): string {
			const iso = this.cell_iso( id )
			if( !iso ) return ''
			return String( Number( iso.slice( 8, 10 ) ) )
		}

		@ $mol_mem_key
		override day_count( id: string ): string {
			const iso = this.cell_iso( id )
			if( !iso ) return ''
			const n = this.tasks_by_date().get( iso )?.length ?? 0
			return n > 0 ? String( n ) : ''
		}

		@ $mol_mem_key
		override day_state( id: string ): string {
			const iso = this.cell_iso( id )
			if( !iso ) return 'empty'
			if( iso === this.selected_date() ) return 'selected'
			if( iso === today_iso() ) return 'today'
			return 'day'
		}

		@ $mol_mem_key
		override cell_click( id: string, next?: any ): any {
			if( next !== undefined ) {
				const iso = this.cell_iso( id )
				if( iso ) this.selected_date( iso )
			}
			return null
		}

		@ $mol_mem
		override day_cells(): readonly any[] {
			return this.day_ids().map( id => this.Day_cell( id ) as any )
		}

		@ $mol_mem
		override selected_date_label(): string {
			return format_date_ru( this.selected_date() )
		}

		/** Tasks on the selected date, sorted by time. NOT memoized — contains Giper Baza entities. */
		selected_tasks(): readonly { task: $bog_tracker_mpit_neolo_task; child_name: string }[] {
			const iso = this.selected_date()
			const children_by_id = new Map( this.children_list().map( c => [ c.id, c ] ) )
			const out: { task: $bog_tracker_mpit_neolo_task; child_name: string }[] = []
			for( const t of this.tasks_by_date().get( iso ) ?? [] ) {
				const oid = t.owner_id()?.val()
				const cid = oid !== null && oid !== undefined ? Number( oid ) : 0
				const c = children_by_id.get( cid )
				out.push( { task: t, child_name: c?.name ?? '' } )
			}
			out.sort( ( a, b ) => ( a.task.time()?.val() ?? '' ).localeCompare( b.task.time()?.val() ?? '' ) )
			return out
		}

		@ $mol_mem
		selected_task_count(): number {
			return this.selected_tasks().length
		}

		@ $mol_mem
		override selected_tasks_rows(): readonly any[] {
			if( this.selected_task_count() === 0 ) return [ this.Selected_empty() as any ]
			const ids = this.selected_tasks().map( ( _, i ) => String( i ) )
			return ids.map( id => this.Selected_task( id ) as any )
		}

		@ $mol_mem_key
		override selected_task_time( id: string ): string {
			return this.selected_tasks()[ Number( id ) ]?.task.time()?.val() ?? '—'
		}

		@ $mol_mem_key
		override selected_task_title( id: string ): string {
			return this.selected_tasks()[ Number( id ) ]?.task.title()?.val() ?? ''
		}

		@ $mol_mem_key
		override selected_task_meta( id: string ): string {
			const item = this.selected_tasks()[ Number( id ) ]
			if( !item ) return ''
			return `${ item.task.desc()?.val() ?? '' } · ${ item.child_name }`
		}

		/** Upcoming events: next 6 tasks sorted by (date, time). NOT memoized — contains entities. */
		upcoming_events(): readonly { task: $bog_tracker_mpit_neolo_task; child_name: string }[] {
			const children_by_id = new Map( this.children_list().map( c => [ c.id, c ] ) )
			const items = this.all_tasks().map( t => {
				const oid = t.owner_id()?.val()
				const cid = oid !== null && oid !== undefined ? Number( oid ) : 0
				return { task: t, child_name: children_by_id.get( cid )?.name ?? '' }
			} )
			items.sort( ( a, b ) => {
				const da = ( a.task.date()?.val() ?? '' ) + 'T' + ( a.task.time()?.val() ?? '' )
				const db = ( b.task.date()?.val() ?? '' ) + 'T' + ( b.task.time()?.val() ?? '' )
				return da.localeCompare( db )
			} )
			return items.slice( 0, 6 )
		}

		@ $mol_mem
		upcoming_count(): number {
			return this.upcoming_events().length
		}

		@ $mol_mem
		override event_ids(): readonly string[] {
			return this.upcoming_events().map( ( _, i ) => String( i ) )
		}

		@ $mol_mem
		override upcoming_rows(): readonly any[] {
			if( this.upcoming_count() === 0 ) return [ this.Upcoming_empty() as any ]
			return this.event_ids().map( id => this.Event_row( id ) as any )
		}

		@ $mol_mem_key
		override event_body( id: string ): string {
			const item = this.upcoming_events()[ Number( id ) ]
			if( !item ) return ''
			const date = item.task.date()?.val() ?? ''
			const time = item.task.time()?.val() ?? '—'
			const title = item.task.title()?.val() ?? ''
			let label = ''
			if( date ) {
				try {
					label = new Date( date + 'T12:00:00' ).toLocaleDateString( 'ru-RU', { day: 'numeric', month: 'short' } )
				} catch { label = date }
			}
			return `${ label } · ${ time } — ${ title } (${ item.child_name })`
		}

	}

	export class $bog_tracker_mpit_neolo_parent_calendar_day extends $.$bog_tracker_mpit_neolo_parent_calendar_day {}

}
