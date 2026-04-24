namespace $ {

	export class $bog_tracker_mpit_neolo_store extends $mol_object {

		glob() {
			return this.$.$giper_baza_glob
		}

		home_land() {
			return this.glob().home().land()
		}

		registry() {
			return this.home_land().Data( $bog_tracker_mpit_neolo_registry ) as $bog_tracker_mpit_neolo_registry
		}

		profile(): $bog_tracker_mpit_neolo_user | null {
			const reg = this.registry()
			if( !reg ) return null
			return ( reg.Profile()?.remote() ?? null ) as $bog_tracker_mpit_neolo_user | null
		}

		tasks_all(): $bog_tracker_mpit_neolo_task[] {
			const reg = this.registry()
			if( !reg ) return []
			return ( reg.Tasks()?.remote_list() ?? [] ) as $bog_tracker_mpit_neolo_task[]
		}

		classes_all(): $bog_tracker_mpit_neolo_class[] {
			const reg = this.registry()
			if( !reg ) return []
			return ( reg.Classes()?.remote_list() ?? [] ) as $bog_tracker_mpit_neolo_class[]
		}

		invitations_all(): $bog_tracker_mpit_neolo_invitation[] {
			const reg = this.registry()
			if( !reg ) return []
			return ( reg.Invitations()?.remote_list() ?? [] ) as $bog_tracker_mpit_neolo_invitation[]
		}

	}

}
