namespace $.$$ {

	const t = $bog_tracker_mpit_neolo_tokens

	$mol_style_define( $bog_tracker_mpit_neolo_student, {

		display: 'block',
		minWidth: '100%',
		minHeight: '100vh',
		padding: '12px',
		background: { color: t.g1 },
		color: t.b0,

		Shell: {
			display: 'flex',
			flex: { direction: 'column' },
			minHeight: '100vh',
			background: { color: t.g0 },
			borderRadius: '28px',
			box: {
				shadow: [ { x: 0, y: '16px', blur: '34px', spread: 0, color: '#00280a1a' } ],
			},
			padding: '14px',
			gap: '12px',
		},

		Topbar: {
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'space-between' },
			gap: '16px',
			padding: { left: '6px', right: '6px' },
		},

		Brand: {
			display: 'inline-flex',
			font: { size: '24px', weight: 800 },
			color: t.b0,
		},

		Brand_accent: {
			display: 'inline-flex',
			color: t.g5,
			font: { style: 'normal' },
		},

		Logout_btn: {
			display: 'inline-flex',
			align: { items: 'center' },
			gap: '10px',
			background: { color: t.b0 },
			color: t.g0,
			padding: { top: '11px', bottom: '11px', left: '18px', right: '18px' },
			borderRadius: '12px',
			font: { weight: 700 },
			':hover': {
				background: { color: t.b1 },
			},
		},

		Layout: {
			display: 'grid',
			gridTemplateColumns: 'minmax(0, 1fr) 132px',
			gap: '12px',
			minHeight: '100vh',
		},

		Main_area: {
			display: 'block',
			minWidth: 0,
			minHeight: '100%',
		},

		'@': {
			bog_tracker_mpit_neolo_student_screen_visible: {
				true: { display: 'flex' },
				false: { display: 'none' },
			},
		},

	} )

}
