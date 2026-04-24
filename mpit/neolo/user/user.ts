namespace $ {

	export class $bog_tracker_mpit_neolo_user extends $giper_baza_entity.with({
		username: $giper_baza_atom_text,
		name: $giper_baza_atom_text,
		surname: $giper_baza_atom_text,
		school: $giper_baza_atom_text,
		role: $giper_baza_atom_text,
		user_id: $giper_baza_atom_bint,
		children_ids: $giper_baza_list_str,
	}) {}

}
