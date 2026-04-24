namespace $.$$ {

	export class $bog_tracker_mpit_neolo_student_sidebar extends $.$bog_tracker_mpit_neolo_student_sidebar {

		@ $mol_mem
		override screen( next?: string ): string {
			return super.screen( next ) ?? 'tasks'
		}

		@ $mol_mem
		override is_tasks() { return this.screen() === 'tasks' }

		@ $mol_mem
		override is_calendar() { return this.screen() === 'calendar' }

		@ $mol_mem
		override is_stats() { return this.screen() === 'stats' }

		@ $mol_mem
		override has_invitations() {
			return this.invitations_count() > 0
		}

		@ $mol_action
		override pick_tasks( next?: any ): any {
			if( next !== undefined ) this.screen( 'tasks' )
			return null
		}

		@ $mol_action
		override pick_calendar( next?: any ): any {
			if( next !== undefined ) this.screen( 'calendar' )
			return null
		}

		@ $mol_action
		override pick_stats( next?: any ): any {
			if( next !== undefined ) this.screen( 'stats' )
			return null
		}

		@ $mol_action
		override open_about( next?: any ): any { return null }

		@ $mol_action
		override open_terms( next?: any ): any { return null }

	}

}
