namespace $ {

	const t = $bog_tracker_mpit_neolo_tokens

	$mol_style_define( $bog_tracker_mpit_neolo_teacher_profile, {
		display: 'flex',

		Card: {
			display: 'flex',
			flex: { direction: 'column', grow: 1 },
			gap: '16px',
			maxWidth: '600px',
			padding: { top: '26px', bottom: '26px', left: '26px', right: '26px' },
			background: { color: t.g0 },
			borderRadius: t.radius_base,
			box: {
				shadow: [ { x: 0, y: '6px', blur: '18px', spread: 0, color: '#00280a14' } ],
			},
		},

		Title: {
			font: { size: '22px', weight: 800 },
			color: t.g5,
		},

		Grid: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
			gap: '12px',
		},

		Footer_text: {
			font: { size: '13px' },
			color: t.b3,
			lineHeight: '1.6',
		},
	})

	$mol_style_define( $bog_tracker_mpit_neolo_teacher_profile_box, {
		display: 'flex',
		flex: { direction: 'column' },
		gap: '4px',
		padding: { top: '12px', bottom: '12px', left: '14px', right: '14px' },
		background: { color: t.g1 },
		borderRadius: '14px',

		Label: {
			font: { size: '12px', weight: 700 },
			color: t.b3,
			textTransform: 'uppercase',
		},

		Value: {
			font: { size: '16px', weight: 700 },
			color: t.b0,
		},

		'@': {
			bog_tracker_mpit_neolo_teacher_profile_box_highlighted: {
				true: {
					background: { color: t.g4 },
					Label: { color: '#00000080' },
					Value: { font: { size: '22px' }, color: t.g0 },
				},
			},
		},
	})

}
