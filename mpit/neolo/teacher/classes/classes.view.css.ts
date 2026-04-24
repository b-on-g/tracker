namespace $ {

	const t = $bog_tracker_mpit_neolo_tokens

	$mol_style_define( $bog_tracker_mpit_neolo_teacher_classes, {
		display: 'flex',
		flex: { direction: 'column' },
		gap: '16px',

		Header: {
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'space-between' },
			gap: '10px',
		},

		Count_label: {
			font: { size: '15px', weight: 600 },
			color: t.b3,
		},

		Grid: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
			gap: '16px',
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
			bog_tracker_mpit_neolo_teacher_classes_empty: {
				false: {
					Empty: { display: 'none' },
				},
				true: {
					Grid: { display: 'none' },
				},
			},
		},
	})

	$mol_style_define( $bog_tracker_mpit_neolo_teacher_classes_card, {
		display: 'flex',
		flex: { direction: 'column' },
		align: { items: 'flex-start' },
		gap: '6px',
		padding: { top: '18px', bottom: '18px', left: '18px', right: '18px' },
		background: { color: t.g0 },
		borderRadius: t.radius_base,
		box: {
			shadow: [ { x: 0, y: '6px', blur: '18px', spread: 0, color: '#00280a14' } ],
		},
		cursor: 'pointer',
		textAlign: 'left',

		Icon: {
			font: { size: '36px' },
		},

		Name: {
			font: { size: '18px', weight: 800 },
			color: t.b0,
		},

		Subject: {
			font: { size: '13px', weight: 600 },
			color: t.b3,
		},

		Meta: {
			display: 'flex',
			gap: '6px',
			flex: { wrap: 'wrap' },
			margin: { top: '4px', bottom: 0, left: 0, right: 0 },
		},

		Count_badge: {
			font: { size: '12px', weight: 700 },
			color: t.g5,
			background: { color: t.g2 },
			padding: { top: '3px', bottom: '3px', left: '8px', right: '8px' },
			borderRadius: '10px',
		},

		Id_badge: {
			font: { size: '12px', weight: 700 },
			color: t.b2,
			background: { color: t.g1 },
			padding: { top: '3px', bottom: '3px', left: '8px', right: '8px' },
			borderRadius: '10px',
		},
	})

}
