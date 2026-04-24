namespace $ {

	const t = $bog_tracker_mpit_neolo_tokens

	$mol_style_define( $bog_tracker_mpit_neolo_teacher_review, {
		display: 'flex',
		flex: { direction: 'column' },
		gap: '14px',

		Header: {
			font: { size: '15px', weight: 700 },
			color: t.b2,
		},

		Cards: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '14px',
		},

		Empty: {
			display: 'flex',
			flex: { direction: 'column' },
			align: { items: 'center' },
			justify: { content: 'center' },
			gap: '6px',
			padding: { top: '48px', bottom: '48px', left: '24px', right: '24px' },
			background: { color: t.g0 },
			borderRadius: t.radius_base,
			color: t.b3,
		},

		Empty_icon: {
			font: { size: '48px' },
		},

		Empty_text: {
			font: { size: '18px', weight: 700 },
			color: t.b1,
		},

		Empty_sub: {
			font: { size: '13px' },
			color: t.b3,
		},

		'@': {
			bog_tracker_mpit_neolo_teacher_review_empty: {
				false: {
					Empty: { display: 'none' },
				},
				true: {
					Header: { display: 'none' },
					Cards: { display: 'none' },
				},
			},
		},
	})

	$mol_style_define( $bog_tracker_mpit_neolo_teacher_review_card, {
		display: 'flex',
		flex: { direction: 'column' },
		gap: '8px',
		padding: { top: '16px', bottom: '16px', left: '16px', right: '16px' },
		background: { color: t.g0 },
		borderRadius: t.radius_base,
		box: {
			shadow: [ { x: 0, y: '6px', blur: '18px', spread: 0, color: '#00280a14' } ],
		},

		Title: {
			font: { size: '17px', weight: 800 },
			color: t.b0,
		},

		Meta: {
			font: { size: '13px', weight: 600 },
			color: t.b3,
		},

		Desc: {
			font: { size: '13px' },
			color: t.b2,
		},

		File_row: {
			display: 'flex',
			align: { items: 'center' },
			gap: '8px',
			padding: { top: '8px', bottom: '8px', left: '12px', right: '12px' },
			background: { color: t.g1 },
			borderRadius: '12px',
			color: t.g5,
			font: { size: '13px', weight: 600 },
			textDecoration: 'none',
		},

		File_icon: {
			font: { size: '18px' },
		},

		File_name: {
			flex: { grow: 1 },
		},

		File_hint: {
			font: { size: '13px', weight: 700 },
			color: t.g5,
		},

		File_missing: {
			font: { size: '12px' },
			color: t.b3,
		},

		Actions: {
			display: 'flex',
			gap: '10px',
			margin: { top: '6px', bottom: 0, left: 0, right: 0 },
		},

		'@': {
			bog_tracker_mpit_neolo_teacher_review_card_file: {
				true: {
					File_missing: { display: 'none' },
				},
				false: {
					File_row: { display: 'none' },
				},
			},
		},
	})

}
