namespace $.$$ {

	type Filter = 'all' | 'active' | 'done' | 'overdue'

	function is_overdue( deadline: string, done: boolean ) {
		if( done ) return false
		if( !deadline ) return false
		const d = new Date( deadline )
		if( isNaN( d.getTime() ) ) return false
		return d.getTime() < Date.now()
	}

	export class $bog_tracker_list extends $.$bog_tracker_list {

		@ $mol_mem
		override filter( next?: any ) {
			return this.$.$mol_state_arg.value( 'filter', next ) ?? 'all'
		}

		/** Registry ready check — retries when land still loading */
		@ $mol_mem
		registry_ready() {
			return !!this.store().registry()
		}

		/** All tasks (raw) */
		@ $mol_mem
		all_tasks() {
			if( !this.registry_ready() ) return []
			const list = this.store().registry().Tasks()
			if( !list ) return []
			return list.remote_list() ?? []
		}

		/** Filtered tasks */
		@ $mol_mem
		filtered_tasks() {
			const filter = this.filter() as Filter
			const tasks = this.all_tasks()
			switch( filter ) {
				case 'active':
					return tasks.filter( t => !( t.done()?.val() ?? false ) )
				case 'done':
					return tasks.filter( t => t.done()?.val() === true )
				case 'overdue':
					return tasks.filter( t => is_overdue(
						t.deadline()?.val() ?? '',
						t.done()?.val() ?? false,
					) )
				default:
					return tasks
			}
		}

		/** Row ids = task link strings */
		@ $mol_mem
		row_ids() {
			return this.filtered_tasks().map( t => t.link().str )
		}

		/** Build one row per task id */
		override task_rows() {
			return this.row_ids().map( id => this.Row( id ) )
		}

		/** Find task by id */
		@ $mol_mem_key
		task_by_id( id: string ) {
			return this.all_tasks().find( t => t.link().str === id ) ?? null
		}

		override task_id( id: string ) {
			return id
		}

		override task_title( id: string ) {
			return this.task_by_id( id )?.title()?.val() ?? ''
		}

		override task_subject( id: string ) {
			return this.task_by_id( id )?.subject()?.val() ?? ''
		}

		override task_deadline( id: string ) {
			const raw = this.task_by_id( id )?.deadline()?.val() ?? ''
			if( !raw ) return ''
			const d = new Date( raw )
			if( isNaN( d.getTime() ) ) return raw
			return d.toLocaleDateString( 'ru-RU' )
		}

		override task_priority( id: string ) {
			return ( this.task_by_id( id )?.priority()?.val() ?? 'medium' ) as any
		}

		override task_done( id: string, next?: boolean ) {
			const task = this.task_by_id( id )
			if( !task ) return false
			if( next !== undefined ) {
				task.done( 'auto' )?.val( next )
				return next
			}
			return task.done()?.val() ?? false
		}

		override task_overdue( id: string ) {
			const task = this.task_by_id( id )
			if( !task ) return false
			return is_overdue(
				task.deadline()?.val() ?? '',
				task.done()?.val() ?? false,
			)
		}

		override task_assignee( id: string ) {
			return this.task_by_id( id )?.assignee_name()?.val() ?? ''
		}

		override task_click( id: string, next?: any ) {
			if( next === undefined ) return null
			this.$.$mol_state_arg.value( 'screen', 'task' )
			this.$.$mol_state_arg.value( 'task', id )
			return next
		}

		override new_task_click( next?: any ) {
			if( next === undefined ) return null
			this.$.$mol_state_arg.value( 'screen', 'new' )
			return next
		}

		override content() {
			if( !this.row_ids().length ) return [ this.Empty() ]
			return [ this.Rows_list() ]
		}

	}

}
