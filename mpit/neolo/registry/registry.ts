namespace $ {

	export class $bog_tracker_mpit_neolo_registry extends $giper_baza_entity.with({
		Profile: $giper_baza_atom_link_to(() => $bog_tracker_mpit_neolo_user),
		Tasks: $giper_baza_list_link_to(() => $bog_tracker_mpit_neolo_task),
		Classes: $giper_baza_list_link_to(() => $bog_tracker_mpit_neolo_class),
		Invitations: $giper_baza_list_link_to(() => $bog_tracker_mpit_neolo_invitation),
	}) {}

}
