namespace $ {

	export class $bog_tracker_mpit_neolo_task extends $giper_baza_entity.with({
		title: $giper_baza_atom_text,
		desc: $giper_baza_atom_text,
		date: $giper_baza_atom_text,
		time: $giper_baza_atom_text,
		source: $giper_baza_atom_text,
		status: $giper_baza_atom_text,
		teacher_file: $giper_baza_atom_text,
		student_file: $giper_baza_atom_text,
		owner_username: $giper_baza_atom_text,
		owner_id: $giper_baza_atom_bint,
		author_id: $giper_baza_atom_bint,
		class_id: $giper_baza_atom_text,
	}) {}

}
