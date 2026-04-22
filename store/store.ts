namespace $ {

	/** Comment on a task */
	export class $bog_tracker_comment extends $giper_baza_entity.with({
		text: $giper_baza_atom_text,
		author_name: $giper_baza_atom_text,
		created_iso: $giper_baza_atom_text,
	}) {}

	/** User profile: display name + role */
	export class $bog_tracker_profile extends $giper_baza_entity.with({
		name: $giper_baza_atom_text,
		role: $giper_baza_atom_text,
	}) {}

	/** Task in the tracker */
	export class $bog_tracker_task extends $giper_baza_entity.with({
		subject: $giper_baza_atom_text,
		title: $giper_baza_atom_text,
		deadline: $giper_baza_atom_text,
		priority: $giper_baza_atom_text,
		done: $giper_baza_atom_bool,
		author_name: $giper_baza_atom_text,
		assignee_name: $giper_baza_atom_text,
		Comments: $giper_baza_list_link_to(() => $bog_tracker_comment),
	}) {}

	/** Data registry in home land */
	export class $bog_tracker_registry extends $giper_baza_entity.with({
		Items: $giper_baza_list_link,
		Tasks: $giper_baza_list_link_to(() => $bog_tracker_task),
		Profile: $giper_baza_atom_link_to(() => $bog_tracker_profile),
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
