namespace $ {

	export class $bog_tracker_mpit_neolo_class extends $giper_baza_entity.with({
		name: $giper_baza_atom_text,
		subject: $giper_baza_atom_text,
		teacher_id: $giper_baza_atom_bint,
		student_ids: $giper_baza_list_str,
	}) {}

}
