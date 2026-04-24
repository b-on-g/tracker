namespace $.$$ {

	export class $bog_tracker_mpit_neolo_teacher_stats extends $.$bog_tracker_mpit_neolo_teacher_stats {

		/** Overridden by parent teacher view. */
		teacher_classes(): $bog_tracker_mpit_neolo_class[] {
			return []
		}

		class_by_id( id: string ): $bog_tracker_mpit_neolo_class | null {
			for( const c of this.teacher_classes() ) {
				if( c.link().toString() === id ) return c
			}
			return null
		}

		@ $mol_mem
		override class_ids(): readonly string[] {
			return this.teacher_classes().map( c => c.link().toString() )
		}

		@ $mol_mem_key
		override class_name( id: string ): string {
			return this.class_by_id( id )?.name()?.val() ?? ''
		}

		@ $mol_mem_key
		override class_summary( id: string ): string {
			const c = this.class_by_id( id )
			if( !c ) return ''
			const n = c.student_ids()?.items().length ?? 0
			const subject = c.subject()?.val() || 'Без предмета'
			return `${ n } учеников · ${ subject }`
		}

		@ $mol_mem
		override empty_visible(): boolean {
			return this.teacher_classes().length === 0
		}

		@ $mol_mem
		override cards_sub(): any[] {
			return this.class_ids().map( id => this.Card( id ) )
		}

	}

	export class $bog_tracker_mpit_neolo_teacher_stats_card extends $.$bog_tracker_mpit_neolo_teacher_stats_card {}

}
