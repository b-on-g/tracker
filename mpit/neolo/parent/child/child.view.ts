namespace $.$$ {

	/** Compute logical status for a task row — matches the getStatus() in original index.html.bac. */
	function task_status_kind( task: $bog_tracker_mpit_neolo_task ): string {
		const s = task.status()?.val() ?? ''
		if( s === 'done' ) return 'done'
		if( s === 'rejected' ) return 'rejected'
		if( s === 'review' ) return 'review'
		if( s === 'progress' ) return 'progress'
		// Overdue check: date in the past and not done
		const date = task.date()?.val() ?? ''
		if( date ) {
			const today = new Date().toISOString().slice( 0, 10 )
			if( date < today ) return 'overdue'
		}
		return 'pending'
	}

	export class $bog_tracker_mpit_neolo_parent_child extends $.$bog_tracker_mpit_neolo_parent_child {

		@ $mol_mem
		children_list(): readonly $bog_tracker_mpit_neolo_parent_child_summary[] {
			return this.children() as readonly $bog_tracker_mpit_neolo_parent_child_summary[]
		}

		@ $mol_mem
		current_child(): $bog_tracker_mpit_neolo_parent_child_summary | null {
			const id = this.child_id()
			return this.children_list().find( c => String( c.id ) === id ) ?? null
		}

		@ $mol_mem
		override avatar_letter(): string {
			const c = this.current_child()
			return ( c?.name?.[ 0 ] ?? '?' ).toUpperCase()
		}

		@ $mol_mem
		override child_name(): string {
			const c = this.current_child()
			if( !c ) return 'Ребёнок'
			return `${ c.name } ${ c.surname }`.trim()
		}

		@ $mol_mem
		override child_meta(): string {
			const c = this.current_child()
			if( !c ) return ''
			return `@${ c.username } · ID: ${ c.id } · ${ c.school || '—' }`
		}

		/** Tasks the current parent created for this child (via owner_id match on parent-owned tasks).
		 * NOT memoized — returns Giper Baza entities. */
		child_tasks(): readonly $bog_tracker_mpit_neolo_task[] {
			const c = this.current_child()
			if( !c ) return []
			const all = this.store().tasks_all()
			return all.filter( t => {
				const oid = t.owner_id()?.val()
				return oid !== null && oid !== undefined && Number( oid ) === c.id
			} )
		}

		/** Stable list of string keys (indexes) for the task rows. Memoizing strings is safe. */
		@ $mol_mem
		override task_ids(): readonly string[] {
			return this.child_tasks().map( ( _, i ) => String( i ) )
		}

		/** Not memoized — returns a Giper Baza entity. */
		task( key: string ): $bog_tracker_mpit_neolo_task | null {
			return this.child_tasks()[ Number( key ) ] ?? null
		}

		@ $mol_mem_key
		override task_title( key: string ): string {
			return this.task( key )?.title()?.val() ?? ''
		}

		@ $mol_mem_key
		override task_desc( key: string ): string {
			return this.task( key )?.desc()?.val() ?? ''
		}

		@ $mol_mem_key
		override task_date( key: string ): string {
			return this.task( key )?.date()?.val() ?? ''
		}

		@ $mol_mem_key
		override task_status( key: string ): string {
			const t = this.task( key )
			return t ? task_status_kind( t ) : 'pending'
		}

		// Stats counters
		@ $mol_mem
		override stat_total(): string {
			return String( this.child_tasks().length )
		}

		@ $mol_mem
		stats_by_kind(): Record<string, number> {
			const out: Record<string, number> = {
				done: 0, progress: 0, review: 0, overdue: 0, pending: 0, rejected: 0,
			}
			for( const t of this.child_tasks() ) {
				const k = task_status_kind( t )
				out[ k ] = ( out[ k ] ?? 0 ) + 1
			}
			return out
		}

		@ $mol_mem
		override stat_done(): string { return String( this.stats_by_kind().done ?? 0 ) }

		@ $mol_mem
		override stat_progress(): string { return String( this.stats_by_kind().progress ?? 0 ) }

		@ $mol_mem
		override stat_review(): string { return String( this.stats_by_kind().review ?? 0 ) }

		@ $mol_mem
		override stat_overdue(): string { return String( this.stats_by_kind().overdue ?? 0 ) }

		@ $mol_mem
		override stat_pending(): string { return String( this.stats_by_kind().pending ?? 0 ) }

		@ $mol_mem
		override task_rows(): readonly any[] {
			if( this.child_tasks().length === 0 ) return [ this.Task_empty() as any ]
			return this.task_ids().map( id => this.Task_row( id ) as any )
		}

	}

	export class $bog_tracker_mpit_neolo_parent_child_stat extends $.$bog_tracker_mpit_neolo_parent_child_stat {}

	export class $bog_tracker_mpit_neolo_parent_child_task_dot extends $.$bog_tracker_mpit_neolo_parent_child_task_dot {}

	export class $bog_tracker_mpit_neolo_parent_child_task_row extends $.$bog_tracker_mpit_neolo_parent_child_task_row {}

}
