namespace $ {

	/** Data registry in home land */
	export class $bog_tracker_registry extends $giper_baza_entity.with({
		Items: $giper_baza_list_link,
	}) {}

	/** Data store */
	export class $bog_tracker_store extends $mol_object {

		glob() {
			return this.$.$giper_baza_glob
		}

		home_land() {
			return this.glob().home().land()
		}

		registry() {
			return this.home_land().Data( $bog_tracker_registry ) as $bog_tracker_registry
		}

	}

}
