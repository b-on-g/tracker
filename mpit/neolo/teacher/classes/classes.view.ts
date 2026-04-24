namespace $.$$ {

	export class $bog_tracker_mpit_neolo_teacher_classes extends $.$bog_tracker_mpit_neolo_teacher_classes {

		/** Overridden from parent: returns $bog_tracker_mpit_neolo_class[]. */
		teacher_classes(): $bog_tracker_mpit_neolo_class[] {
			return []
		}

		@ $mol_mem
		override classes_count(): number {
			return this.teacher_classes().length
		}

		@ $mol_mem
		override classes_count_text(): string {
			return `${ this.classes_count() } кл.`
		}

		@ $mol_mem
		override empty_visible(): boolean {
			return this.classes_count() === 0
		}

		@ $mol_mem
		override class_ids(): readonly string[] {
			return this.teacher_classes().map( c => c.link().toString() )
		}

		class_by_id( id: string ): $bog_tracker_mpit_neolo_class | null {
			for( const c of this.teacher_classes() ) {
				if( c.link().toString() === id ) return c
			}
			return null
		}

		@ $mol_mem_key
		override class_name( id: string ): string {
			return this.class_by_id( id )?.name()?.val() ?? ''
		}

		@ $mol_mem_key
		override class_subject( id: string ): string {
			const c = this.class_by_id( id )
			const s = c?.subject()?.val() ?? ''
			return s || 'Без предмета'
		}

		@ $mol_mem_key
		override class_count_text( id: string ): string {
			const c = this.class_by_id( id )
			const n = c?.student_ids()?.items().length ?? 0
			return `👥 ${ n } уч.`
		}

		@ $mol_mem_key
		override class_id_tail( id: string ): string {
			return 'ID: ' + id.slice( -6 )
		}

		@ $mol_mem
		grid_sub(): any[] {
			const ids = this.class_ids()
			return ids.map( id => this.Card( id ) )
		}

	}

	export class $bog_tracker_mpit_neolo_teacher_classes_card extends $.$bog_tracker_mpit_neolo_teacher_classes_card {}

}
