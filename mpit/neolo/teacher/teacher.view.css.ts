namespace $ {

	const t = $bog_tracker_mpit_neolo_tokens

	$mol_style_define( $bog_tracker_mpit_neolo_teacher, {
		display: 'flex',
		flex: { direction: 'column' },
		minHeight: '100vh',
		background: { color: t.g1 },
		color: t.b0,

		Shell: {
			display: 'flex',
			flex: { direction: 'column', grow: 1 },
			minHeight: '100vh',
		},

		Topbar: {
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'space-between' },
			padding: { top: '14px', bottom: '14px', left: '24px', right: '24px' },
			background: { color: t.g0 },
			box: {
				shadow: [ { x: 0, y: '2px', blur: '8px', spread: 0, color: '#00280a14' } ],
			},
		},

		Brand: {
			display: 'flex',
			align: { items: 'center' },
			gap: '6px',
			font: { size: '22px', weight: 800 },
			color: t.g5,
		},

		Brand_accent: {
			color: t.g4,
			font: { style: 'italic', weight: 800 },
		},

		Role_badge: {
			font: { size: '14px', weight: 600 },
			color: t.g5,
			background: { color: t.g2 },
			padding: { top: '3px', bottom: '3px', left: '10px', right: '10px' },
			borderRadius: '8px',
			margin: { left: '6px' },
		},

		Logout: {
			display: 'flex',
			gap: '6px',
			align: { items: 'center' },
		},

		Layout: {
			display: 'flex',
			flex: { grow: 1 },
			padding: { top: '24px', bottom: '24px', left: '24px', right: '24px' },
			gap: '24px',
		},

		Main: {
			display: 'flex',
			flex: { direction: 'column', grow: 1 },
			minHeight: '100vh',
			gap: '18px',
		},

		Screen_title: {
			font: { size: '28px', weight: 800 },
			color: t.b0,
		},

		Screen_content: {
			display: 'flex',
			flex: { direction: 'column', grow: 1 },
			gap: '16px',
		},

		Sidebar: {
			display: 'flex',
			flex: { direction: 'column', shrink: 0 },
			justify: { content: 'space-between' },
			width: '220px',
			padding: { top: '18px', bottom: '18px', left: '14px', right: '14px' },
			background: { color: t.g0 },
			borderRadius: t.radius_base,
			box: {
				shadow: [ { x: 0, y: '6px', blur: '18px', spread: 0, color: '#00280a14' } ],
			},
		},

		Side_stack: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '8px',
		},

		Side_footer: {
			display: 'flex',
			flex: { direction: 'column' },
			padding: { top: '8px', bottom: 0, left: 0, right: 0 },
			borderTop: `1px solid ${ t.g2 }`,
		},

		Side_id: {
			font: { size: '11px', weight: 700 },
			color: t.b3,
			textAlign: 'center',
			padding: { top: '4px', bottom: '4px', left: 0, right: 0 },
		},
	})

	$mol_style_define( $bog_tracker_mpit_neolo_teacher_side_item, {
		display: 'flex',
		align: { items: 'center' },
		gap: '10px',
		width: '100%',
		padding: { top: '10px', bottom: '10px', left: '10px', right: '10px' },
		borderRadius: '14px',
		background: { color: 'transparent' },
		cursor: 'pointer',

		Circle: {
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
			width: '36px',
			height: '36px',
			borderRadius: '12px',
			font: { size: '18px' },
			color: t.g0,
			flex: { shrink: 0 },
		},

		Label: {
			flex: { grow: 1 },
			font: { size: '15px', weight: 700 },
			color: t.b1,
		},

		Badge: {
			minWidth: '22px',
			height: '22px',
			padding: { top: 0, bottom: 0, left: '6px', right: '6px' },
			borderRadius: '11px',
			background: { color: t.red },
			color: t.g0,
			font: { size: '12px', weight: 800 },
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
		},

		'@': {
			bog_tracker_mpit_neolo_teacher_side_item_active: {
				true: {
					background: { color: t.g2 },
				},
			},
			bog_tracker_mpit_neolo_teacher_side_item_kind: {
				g: {
					Circle: { background: { color: t.g4 } },
				},
				bk: {
					Circle: { background: { color: t.b1 } },
				},
				dg: {
					Circle: { background: { color: t.b3 } },
				},
			},
			bog_tracker_mpit_neolo_teacher_side_item_badge_hidden: {
				true: {
					Badge: { display: 'none' },
				},
			},
		},
	})

	/* ═══════ modals ═══════ */

	$mol_style_define( $bog_tracker_mpit_neolo_teacher_create_class_modal, {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		display: 'flex',
		align: { items: 'center' },
		justify: { content: 'center' },
		background: { color: '#00000080' },
		zIndex: 100,

		Modal_body: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '14px',
			minWidth: '340px',
			maxWidth: '520px',
			background: { color: t.g0 },
			borderRadius: t.radius_base,
			padding: { top: '22px', bottom: '22px', left: '22px', right: '22px' },
			box: {
				shadow: [ { x: 0, y: '16px', blur: '34px', spread: 0, color: '#00280a1a' } ],
			},
		},

		Modal_title: {
			font: { size: '20px', weight: 800 },
			color: t.g5,
		},

		Error_view: {
			color: t.red,
			font: { size: '13px', weight: 600 },
			minHeight: '1em',
		},

		Buttons: {
			display: 'flex',
			gap: '10px',
			justify: { content: 'flex-end' },
		},

		'@': {
			bog_tracker_mpit_neolo_teacher_modal_hidden: {
				true: {
					display: 'none',
				},
			},
		},
	})

	$mol_style_define( $bog_tracker_mpit_neolo_teacher_invite_modal, {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		display: 'flex',
		align: { items: 'center' },
		justify: { content: 'center' },
		background: { color: '#00000080' },
		zIndex: 100,

		Modal_body: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '14px',
			minWidth: '340px',
			maxWidth: '520px',
			background: { color: t.g0 },
			borderRadius: t.radius_base,
			padding: { top: '22px', bottom: '22px', left: '22px', right: '22px' },
			box: {
				shadow: [ { x: 0, y: '16px', blur: '34px', spread: 0, color: '#00280a1a' } ],
			},
		},

		Modal_title: {
			font: { size: '20px', weight: 800 },
			color: t.g5,
		},

		Hint: {
			font: { size: '13px' },
			color: t.b3,
		},

		Result_view: {
			font: { size: '13px', weight: 600 },
			minHeight: '1em',
			color: t.b2,
		},

		Buttons: {
			display: 'flex',
			gap: '10px',
			justify: { content: 'flex-end' },
		},

		'@': {
			bog_tracker_mpit_neolo_teacher_modal_hidden: {
				true: {
					display: 'none',
				},
			},
		},
	})

}
