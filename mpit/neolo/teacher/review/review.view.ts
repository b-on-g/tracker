namespace $.$$ {

	export class $bog_tracker_mpit_neolo_teacher_review extends $.$bog_tracker_mpit_neolo_teacher_review {

		/** Overridden by parent teacher view. Returns tasks awaiting review. */
		review_tasks_list(): $bog_tracker_mpit_neolo_task[] {
			return []
		}

		@ $mol_mem
		override task_ids(): readonly string[] {
			return this.review_tasks_list().map( t => t.link().toString() )
		}

		task_by_id( id: string ): $bog_tracker_mpit_neolo_task | null {
			for( const t of this.review_tasks_list() ) {
				if( t.link().toString() === id ) return t
			}
			return null
		}

		@ $mol_mem_key
		override task_title( id: string ): string {
			return this.task_by_id( id )?.title()?.val() ?? ''
		}

		@ $mol_mem_key
		override task_meta( id: string ): string {
			const t = this.task_by_id( id )
			if( !t ) return ''
			const uname = t.owner_username()?.val() ?? ''
			const date = t.date()?.val() ?? ''
			const owner_id = t.owner_id()?.val() ?? 0n
			const owner_label = uname ? `@${ uname }` : `ID: ${ owner_id }`
			return `👤 ${ owner_label } · Срок: ${ date }`
		}

		@ $mol_mem_key
		override task_desc( id: string ): string {
			return this.task_by_id( id )?.desc()?.val() ?? ''
		}

		@ $mol_mem_key
		override task_file_name( id: string ): string {
			return this.task_by_id( id )?.student_file()?.val() ?? ''
		}

		@ $mol_mem_key
		override task_file_visible( id: string ): boolean {
			return !!this.task_file_name( id )
		}

		@ $mol_mem_key
		override task_file_url( id: string ): string {
			const t = this.task_by_id( id )
			if( !t ) return ''
			const file = t.student_file()?.val() ?? ''
			if( !file ) return ''
			const uname = t.owner_username()?.val() ?? ''
			if( !uname ) return ''
			// The task id on the Flask side is a numeric id — we use owner_id as a proxy since
			// Giper Baza links aren't known to the Python backend. The real app would pass
			// the numeric id stored in task metadata.
			const tid = t.owner_id()?.val()?.toString() ?? '0'
			return `${ this.api().base() }/tasks/${ uname }/${ tid }/file`
		}

		@ $mol_mem
		override empty_visible(): boolean {
			return this.review_tasks_list().length === 0
		}

		@ $mol_mem
		override header_text(): string {
			const n = this.review_tasks_list().length
			if( n === 0 ) return ''
			return `${ n } работ ожидают проверки`
		}

		@ $mol_mem
		override cards_sub(): any[] {
			return this.task_ids().map( id => this.Card( id ) )
		}

	}

	export class $bog_tracker_mpit_neolo_teacher_review_card extends $.$bog_tracker_mpit_neolo_teacher_review_card {}

}
