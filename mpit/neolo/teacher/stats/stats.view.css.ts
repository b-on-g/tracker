namespace $ {

	const t = $bog_tracker_mpit_neolo_tokens

	$mol_style_define( $bog_tracker_mpit_neolo_teacher_stats, {
		display: 'flex',
		flex: { direction: 'column' },
		gap: '14px',

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
			bog_tracker_mpit_neolo_teacher_stats_empty: {
				true: {
					Cards: { display: 'none' },
				},
				false: {
					Empty: { display: 'none' },
				},
			},
		},
	})

	$mol_style_define( $bog_tracker_mpit_neolo_teacher_stats_card, {
		display: 'flex',
		flex: { direction: 'column' },
		gap: '12px',
		padding: { top: '22px', bottom: '22px', left: '22px', right: '22px' },
		background: { color: t.g0 },
		borderRadius: t.radius_base,
		box: {
			shadow: [ { x: 0, y: '6px', blur: '18px', spread: 0, color: '#00280a14' } ],
		},

		Head: {
			display: 'flex',
			align: { items: 'center' },
			gap: '12px',
			flex: { wrap: 'wrap' },
		},

		Icon: {
			font: { size: '28px' },
		},

		Info: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '2px',
		},

		Name: {
			font: { size: '20px', weight: 800 },
			color: t.b0,
		},

		Summary: {
			font: { size: '13px' },
			color: t.b3,
		},

		Placeholder: {
			font: { size: '13px' },
			color: t.b3,
		},
	})

}
