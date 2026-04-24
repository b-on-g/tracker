namespace $.$$ {

	export class $bog_tracker_mpit_neolo_teacher_profile extends $.$bog_tracker_mpit_neolo_teacher_profile {

		/** Overridden by parent teacher view. */
		classes_count(): number {
			return 0
		}

		profile(): $bog_tracker_mpit_neolo_user | null {
			return this.store().profile()
		}

		@ $mol_mem
		override teacher_name(): string {
			return this.profile()?.name()?.val() ?? ''
		}

		@ $mol_mem
		override teacher_surname(): string {
			return this.profile()?.surname()?.val() ?? '—'
		}

		@ $mol_mem
		override teacher_username(): string {
			const u = this.profile()?.username()?.val() ?? ''
			return u ? `@${ u }` : ''
		}

		@ $mol_mem
		override teacher_school(): string {
			return this.profile()?.school()?.val() ?? '—'
		}

		@ $mol_mem
		override teacher_id_text(): string {
			const id = this.profile()?.user_id()?.val() ?? 0n
			return id.toString()
		}

		@ $mol_mem
		override classes_count_text(): string {
			const n = this.classes_count()
			return `Ваш ID используется учениками для записи к вам. Классов создано: ${ n }`
		}

	}

	export class $bog_tracker_mpit_neolo_teacher_profile_box extends $.$bog_tracker_mpit_neolo_teacher_profile_box {}

}
