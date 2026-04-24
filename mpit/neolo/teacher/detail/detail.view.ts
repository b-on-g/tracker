namespace $.$$ {

	export class $bog_tracker_mpit_neolo_teacher_detail extends $.$bog_tracker_mpit_neolo_teacher_detail {

		/** Override by parent teacher view. */
		current_class(): $bog_tracker_mpit_neolo_class | null {
			return null
		}

		@ $mol_mem
		override tab( next?: string ): string {
			return super.tab( next ) ?? 'students'
		}

		@ $mol_mem
		override students_tab_active(): boolean {
			return this.tab() === 'students'
		}

		@ $mol_mem
		override stats_tab_active(): boolean {
			return this.tab() === 'stats'
		}

		@ $mol_action
		override students_tab_click( next?: any ): any {
			if( next === undefined ) return null
			this.tab( 'students' )
			return null
		}

		@ $mol_action
		override stats_tab_click( next?: any ): any {
			if( next === undefined ) return null
			this.tab( 'stats' )
			return null
		}

		@ $mol_mem
		override class_name(): string {
			return this.current_class()?.name()?.val() ?? 'Класс не найден'
		}

		@ $mol_mem
		override class_subject(): string {
			const s = this.current_class()?.subject()?.val() ?? ''
			return s || 'Без предмета'
		}

		@ $mol_mem
		override students_count(): number {
			return this.current_class()?.student_ids()?.items().length ?? 0
		}

		@ $mol_mem
		override students_count_text(): string {
			const n = this.students_count()
			return `${ n } учеников`
		}

		@ $mol_mem
		override class_summary(): string {
			return `${ this.class_subject() } · ${ this.students_count_text() }`
		}

		@ $mol_mem
		override students_empty_visible(): boolean {
			return this.tab() === 'students' && this.students_count() === 0
		}

		@ $mol_mem
		override students_ids(): readonly string[] {
			return ( this.current_class()?.student_ids()?.items() ?? [] ).filter( ( s ): s is string => !!s )
		}

		@ $mol_mem_key
		override student_id_label( id: string ): string {
			return `ID: ${ id }`
		}

		@ $mol_mem
		override body_sub(): any[] {
			if( this.tab() === 'stats' ) {
				return [ `Учеников в классе: ${ this.students_count() }` ]
			}
			if( this.students_empty_visible() ) {
				return [
					'👥 Учеников пока нет. Нажмите «Добавить ученика» и введите его ID.',
				]
			}
			return this.students_ids().map( id => this.Student_row( id ) )
		}

		@ $mol_action
		override remove_student( id: string, next?: any ): any {
			if( next === undefined ) return null
			if( !confirm( 'Удалить ученика из класса?' ) ) return null
			const cls = this.current_class()
			if( !cls ) return null
			cls.student_ids( null )!.cut( id )
			return null
		}

	}

	export class $bog_tracker_mpit_neolo_teacher_detail_tab extends $.$bog_tracker_mpit_neolo_teacher_detail_tab {}

	export class $bog_tracker_mpit_neolo_teacher_detail_student_row extends $.$bog_tracker_mpit_neolo_teacher_detail_student_row {}

}
