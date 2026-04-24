namespace $ {

	const t = $bog_tracker_mpit_neolo_tokens

	$mol_style_define( $bog_tracker_mpit_neolo_teacher_detail, {
		display: 'flex',
		flex: { direction: 'column' },
		gap: '14px',

		Back_btn: {
			align: { self: 'flex-start' },
			font: { size: '14px', weight: 700 },
			color: t.g5,
		},

		Header: {
			display: 'flex',
			align: { items: 'center' },
			gap: '14px',
			flex: { wrap: 'wrap' },
			padding: { top: '18px', bottom: '18px', left: '18px', right: '18px' },
			background: { color: t.g0 },
			borderRadius: t.radius_base,
			box: {
				shadow: [ { x: 0, y: '6px', blur: '18px', spread: 0, color: '#00280a14' } ],
			},
		},

		Icon: {
			font: { size: '42px' },
		},

		Header_info: {
			display: 'flex',
			flex: { direction: 'column', grow: 1 },
			gap: '4px',
			minWidth: '200px',
		},

		Class_name: {
			font: { size: '24px', weight: 800 },
			color: t.b0,
		},

		Class_summary: {
			font: { size: '14px', weight: 600 },
			color: t.b3,
		},

		Header_actions: {
			display: 'flex',
			gap: '8px',
			flex: { wrap: 'wrap' },
		},

		Delete_btn: {
			color: t.red,
		},

		Tab_row: {
			display: 'flex',
			gap: '8px',
		},

		Body: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '10px',
			padding: { top: '14px', bottom: '14px', left: '14px', right: '14px' },
			background: { color: t.g0 },
			borderRadius: t.radius_base,
			box: {
				shadow: [ { x: 0, y: '6px', blur: '18px', spread: 0, color: '#00280a14' } ],
			},
		},
	})

	$mol_style_define( $bog_tracker_mpit_neolo_teacher_detail_tab, {
		padding: { top: '8px', bottom: '8px', left: '14px', right: '14px' },
		borderRadius: '10px',
		font: { size: '14px', weight: 700 },
		color: t.b2,
		background: { color: 'transparent' },
		cursor: 'pointer',

		'@': {
			bog_tracker_mpit_neolo_teacher_detail_tab_active: {
				true: {
					background: { color: t.g2 },
					color: t.g5,
				},
			},
		},
	})

	$mol_style_define( $bog_tracker_mpit_neolo_teacher_detail_student_row, {
		display: 'flex',
		align: { items: 'center' },
		gap: '12px',
		padding: { top: '10px', bottom: '10px', left: '12px', right: '12px' },
		background: { color: t.g1 },
		borderRadius: '14px',

		Avatar: {
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
			width: '32px',
			height: '32px',
			borderRadius: '16px',
			background: { color: t.g2 },
			font: { size: '14px' },
		},

		Name_col: {
			display: 'flex',
			flex: { direction: 'column', grow: 1 },
			gap: '2px',
		},

		Name: {
			font: { size: '14px', weight: 700 },
			color: t.b0,
		},

		Role: {
			font: { size: '12px' },
			color: t.b3,
		},

		Remove_btn: {
			color: t.red,
			font: { size: '12px', weight: 700 },
			padding: { top: '6px', bottom: '6px', left: '10px', right: '10px' },
		},
	})

}
