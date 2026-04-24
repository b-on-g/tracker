namespace $.$$ {

	const t = $bog_tracker_mpit_neolo_tokens

	$mol_style_define( $bog_tracker_mpit_neolo_student_stats, {

		display: 'flex',
		flex: { direction: 'column' },
		minHeight: '100%',
		borderRadius: '22px',
		padding: { top: '22px', bottom: '22px', left: '24px', right: '24px' },
		overflow: { x: 'hidden', y: 'auto' },
		background: { color: t.g6 },
		color: t.g0,

		Stats_layout: {
			display: 'grid',
			gridTemplateColumns: 'minmax(240px, .8fr) minmax(0, 1.2fr)',
			gap: '28px',
		},

		Profile_card: {
			display: 'flex',
			flex: { direction: 'column' },
			padding: { right: '18px' },
			border: { width: '1px', style: 'solid', color: 'transparent' },
			gap: '12px',
		},

		Profile_title: {
			font: { size: '22px', weight: 800 },
			color: t.g4,
			margin: { bottom: '16px' },
		},

		Profile_table: {
			display: 'grid',
			gridTemplateColumns: 'auto 1fr',
			gap: '22px',
			font: { size: '16px' },
		},

		L_name: { color: '#ffffff99' },
		L_surname: { color: '#ffffff99' },
		L_login: { color: '#ffffff99' },
		L_role: { color: '#ffffff99' },
		L_school: { color: '#ffffff99' },
		L_id: { color: '#ffffff99' },
		V_name: { color: t.g0, font: { weight: 600 } },
		V_surname: { color: t.g0, font: { weight: 600 } },
		V_login: { color: t.g0, font: { weight: 600 } },
		V_role: { color: t.g0, font: { weight: 600 } },
		V_school: { color: t.g0, font: { weight: 600 } },
		V_id: { color: t.g0, font: { weight: 600 } },

		Inv_section: {
			display: 'flex',
			flex: { direction: 'column' },
			margin: { top: '20px' },
			gap: '10px',
		},

		Inv_title: {
			font: { size: '17px', weight: 800 },
			color: t.g4,
			margin: { bottom: '10px' },
		},

		Inv_list: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '10px',
		},

		Ai_section: {
			display: 'flex',
			flex: { direction: 'column' },
			margin: { top: '24px' },
			gap: '10px',
		},

		Ai_heading: {
			font: { size: '17px', weight: 800 },
			color: t.g4,
			margin: { bottom: '10px' },
		},

		Ai_btn: {
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
			gap: '8px',
			minWidth: '100%',
			padding: { top: '12px', bottom: '12px', left: '16px', right: '16px' },
			borderRadius: '13px',
			background: { color: t.g5 },
			color: t.g0,
			font: { size: '14px', weight: 800 },
		},

		Ai_block: {
			margin: { top: '14px' },
			background: { color: '#ffffff1a' },
			border: { width: '1px', style: 'solid', color: '#ffffff33' },
			borderRadius: '14px',
			padding: { top: '14px', bottom: '14px', left: '16px', right: '16px' },
			maxHeight: '240px',
			overflow: { y: 'auto' },
		},

		Ai_content: {
			font: { size: '14px' },
			color: t.g0,
			whiteSpace: 'pre-wrap',
		},

		Stats_side: {
			display: 'flex',
			flex: { direction: 'column' },
		},

		Stats_title: {
			font: { size: '22px', weight: 800 },
			color: t.g4,
			margin: { bottom: '16px' },
		},

		Stats_column: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '14px',
		},

		'@': {
			bog_tracker_mpit_neolo_student_stats_ai_visible: {
				true: { display: 'flex' },
				false: { display: 'none' },
			},
		},

	} )

	$mol_style_define( $bog_tracker_mpit_neolo_student_stats_card, {

		display: 'flex',
		flex: { direction: 'column' },
		padding: { top: '16px', bottom: '16px', left: '18px', right: '18px' },
		color: t.b0,
		borderRadius: '16px',
		position: 'relative',
		overflow: { x: 'hidden', y: 'hidden' },
		background: { color: t.g0 },
		borderLeft: '4px solid #2ecc5a',

		'@': {
			bog_tracker_mpit_neolo_student_stats_card_accent: {
				green: { borderLeft: '4px solid #1aa843' },
				black: { borderLeft: '4px solid #111111' },
				red: { borderLeft: '4px solid #c0392b' },
				orange: { borderLeft: '4px solid #e67e22' },
			},
		},

	} )

	$mol_style_define( $bog_tracker_mpit_neolo_student_stats_invitation, {

		display: 'flex',
		flex: { direction: 'column' },
		gap: '8px',
		padding: { top: '14px', bottom: '14px', left: '16px', right: '16px' },
		background: { color: '#ffffff1a' },
		border: { width: '1px', style: 'solid', color: '#ffffff33' },
		borderRadius: '14px',

		Inv_title: {
			font: { size: '15px', weight: 800 },
			color: t.g0,
		},

		Inv_sub: {
			font: { size: '13px' },
			color: '#ffffffb3',
		},

		Inv_actions: {
			display: 'flex',
			gap: '8px',
		},

		Accept_btn: {
			padding: { top: '8px', bottom: '8px', left: '14px', right: '14px' },
			borderRadius: '9px',
			background: { color: t.g4 },
			color: t.b0,
			font: { size: '13px', weight: 800 },
		},

		Reject_btn: {
			padding: { top: '8px', bottom: '8px', left: '14px', right: '14px' },
			borderRadius: '9px',
			background: { color: '#ffffff26' },
			color: '#ffffffcc',
			font: { size: '13px', weight: 700 },
		},

	} )

	$mol_style_define( $bog_tracker_mpit_neolo_student_stats_chart, {
		display: 'block',
		minWidth: '100%',
		minHeight: '90px',
	} )

}
