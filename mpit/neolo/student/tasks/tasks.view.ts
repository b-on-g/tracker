namespace $.$$ {

	const STATUS_META: Record<string, { label: string; cls: string }> = {
		pending:  { label: 'Ожидает',      cls: 'status-pending' },
		progress: { label: 'Выполняется',  cls: 'status-progress' },
		review:   { label: 'На проверке',  cls: 'status-review' },
		done:     { label: 'Выполнено',    cls: 'status-done' },
		rejected: { label: 'Непринято',    cls: 'status-rejected' },
		overdue:  { label: 'Просрочено',   cls: 'status-overdue' },
	}

	function task_status( task: $bog_tracker_mpit_neolo_task ): string {
		const st = task.status()?.val() ?? 'pending'
		if( st === 'done' || st === 'rejected' || st === 'review' || st === 'progress' ) return st
		const today = new Date().toISOString().slice( 0, 10 )
		const date = task.date()?.val() ?? ''
		if( date && date < today ) return 'overdue'
		return st
	}

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

	function src_cls( source: string ) {
		if( source === 'teacher' ) return 'src-teacher'
		if( source === 'parent' ) return 'src-parent'
		return 'src-self'
	}

	function fmt_deadline( task: $bog_tracker_mpit_neolo_task ) {
		const date = task.date()?.val() ?? ''
		const time = task.time()?.val() ?? '—'
		if( !date ) return time
		const d = new Date( date + 'T12:00:00' )
		if( isNaN( d.getTime() ) ) return time
		const dd = String( d.getDate() ).padStart( 2, '0' )
		const mm = String( d.getMonth() + 1 ).padStart( 2, '0' )
		return `${ time } · ${ dd }.${ mm }`
	}

	export class $bog_tracker_mpit_neolo_student_tasks extends $.$bog_tracker_mpit_neolo_student_tasks {

		// ────────── derived primitive arrays ──────────

		@ $mol_mem
		tasks_sorted(): $bog_tracker_mpit_neolo_task[] {
			const all = this.store().tasks_all()
			const copy = all.slice()
			copy.sort( ( a, b ) => task_dt( a ).localeCompare( task_dt( b ) ) )
			return copy.slice( 0, 5 )
		}

		@ $mol_mem
		override task_ids() {
			return this.tasks_sorted().map( t => t.link().str as string )
		}

		@ $mol_mem_key
		task_by_id( id: string ): $bog_tracker_mpit_neolo_task | null {
			const all = this.store().tasks_all()
			return all.find( t => t.link().str === id ) ?? null
		}

		@ $mol_mem_key
		override task_id_value( id: string ): string {
			return id
		}

		@ $mol_mem_key
		override task_title( id: string ): string {
			return this.task_by_id( id )?.title()?.val() ?? ''
		}

		@ $mol_mem_key
		override task_desc( id: string ): string {
			return this.task_by_id( id )?.desc()?.val() ?? ''
		}

		@ $mol_mem_key
		override task_source_label( id: string ): string {
			const src = this.task_by_id( id )?.source()?.val() ?? 'self'
			return src_label( src )
		}

		@ $mol_mem_key
		override task_source_cls( id: string ): string {
			const src = this.task_by_id( id )?.source()?.val() ?? 'self'
			return src_cls( src )
		}

		@ $mol_mem_key
		override task_status_label( id: string ): string {
			const t = this.task_by_id( id )
			if( !t ) return STATUS_META.pending.label
			return STATUS_META[ task_status( t ) ]?.label ?? STATUS_META.pending.label
		}

		@ $mol_mem_key
		override task_status_cls( id: string ): string {
			const t = this.task_by_id( id )
			if( !t ) return STATUS_META.pending.cls
			return STATUS_META[ task_status( t ) ]?.cls ?? STATUS_META.pending.cls
		}

		@ $mol_mem_key
		override task_deadline( id: string ): string {
			const t = this.task_by_id( id )
			return t ? fmt_deadline( t ) : ''
		}

		@ $mol_mem
		override task_rows() {
			return this.task_ids().map( id => this.Card( id ) )
		}

		@ $mol_action
		override add_task_click( next?: any ): any {
			return null
		}

		@ $mol_action
		override open_task( id: string, next?: any ): any {
			// Parent overrides to open modal.
			return null
		}

	}

}
