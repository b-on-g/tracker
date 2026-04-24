namespace $ {

	const t = $bog_tracker_mpit_neolo_tokens

	$mol_style_define( $bog_tracker_mpit_neolo_parent, {
		display: 'flex',
		flex: { direction: 'column' },
		minHeight: '100vh',
		color: t.g0,
		background: {
			image: [[ `linear-gradient(135deg, ${ t.p1 } 0%, ${ t.p2 } 100%)` ]],
		},

		Topbar: {
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'space-between' },
			padding: { top: '14px', bottom: '14px', left: '24px', right: '24px' },
			background: { color: '#ffffff22' },
			color: t.g0,
		},

		Brand: {
			display: 'flex',
			align: { items: 'center' },
			font: {
				family: '"Segoe UI", Arial, sans-serif',
				size: '22px',
				weight: 'bold',
			},
		},

		Brand_em: {
			font: {
				weight: 'bold',
				style: 'italic',
			},
			color: t.gold,
		},

		Brand_badge: {
			font: {
				size: '14px',
				weight: 'bold',
			},
			color: t.p2,
			background: { color: '#ffffff' },
			padding: { top: '3px', bottom: '3px', left: '10px', right: '10px' },
			borderRadius: '8px',
			margin: { left: '10px' },
		},

		Logout_btn: {
			background: { color: '#ffffff1a' },
			color: t.g0,
			padding: { top: '8px', bottom: '8px', left: '14px', right: '14px' },
			borderRadius: '10px',
			font: { weight: 'bold' },
		},

		Layout: {
			display: 'flex',
			flex: { direction: 'row', grow: 1 },
			padding: { top: '20px', bottom: '20px', left: '24px', right: '24px' },
			gap: '20px',
		},

		Main: {
			display: 'flex',
			flex: { direction: 'column', grow: 1 },
			gap: '16px',
			minWidth: 0,
		},

		Screen_title: {
			font: {
				size: '28px',
				weight: 'bold',
			},
			color: t.g0,
			padding: { bottom: '8px' },
		},

		Screen_content: {
			display: 'flex',
			flex: { direction: 'column', grow: 1 },
		},

		Sidebar: {
			display: 'flex',
			flex: { direction: 'column', shrink: 0 },
			justify: { content: 'space-between' },
			minWidth: '120px',
			maxWidth: '120px',
			padding: { top: '16px', bottom: '16px', left: '12px', right: '12px' },
			background: {
				image: [ [ `linear-gradient(180deg, ${ t.p1 } 0%, ${ t.p2 } 100%)` ] ],
			},
			borderRadius: '18px',
			box: {
				shadow: [ { x: 0, y: '8px', blur: '24px', spread: 0, color: '#00000033' } ],
			},
		},

		Side_stack: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '12px',
		},

		Side_footer: {
			padding: { top: '12px' },
		},

		Side_id: {
			font: {
				size: '11px',
				weight: 'bold',
			},
			color: '#ffffffb3',
			textAlign: 'center',
		},

		Add_child_modal: {
			pointerEvents: 'none',
		},

	})

	$mol_style_define( $bog_tracker_mpit_neolo_parent_side_item, {
		display: 'flex',
		flex: { direction: 'column' },
		align: { items: 'center' },
		gap: '4px',
		padding: { top: '10px', bottom: '10px', left: '6px', right: '6px' },
		borderRadius: '12px',
		background: { color: 'transparent' },
		color: t.g0,
		cursor: 'pointer',

		Side_circle: {
			width: '40px',
			height: '40px',
			borderRadius: '999px',
			background: { color: '#ffffff33' },
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
			font: { size: '20px' },
			color: t.g0,
		},

		Side_label: {
			font: {
				size: '12px',
				weight: 'bold',
			},
			color: t.g0,
		},

		'@': {
			bog_tracker_mpit_neolo_parent_side_item_selected: {
				true: {
					background: { color: '#ffffff26' },
				},
			},
		},

	})

	$mol_style_define( $bog_tracker_mpit_neolo_parent_add_child_modal, {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		display: 'none',
		align: { items: 'center' },
		justify: { content: 'center' },
		zIndex: 1000,

		Backdrop: {
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			background: { color: '#00000099' },
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
		},

		Dialog: {
			background: { color: t.g0 },
			color: t.b0,
			padding: { top: '24px', bottom: '24px', left: '24px', right: '24px' },
			borderRadius: t.radius_base,
			minWidth: '360px',
			maxWidth: '520px',
			display: 'flex',
			flex: { direction: 'column' },
			gap: '14px',
			box: {
				shadow: [ { x: 0, y: '20px', blur: '60px', spread: 0, color: '#00000099' } ],
			},
		},

		Head: {
			display: 'flex',
			justify: { content: 'space-between' },
			align: { items: 'center' },
		},

		Head_title: {
			font: {
				size: '18px',
				weight: 'bold',
			},
		},

		Hint: {
			font: { size: '13px' },
			color: t.b3,
		},

		Result_view: {
			font: {
				size: '14px',
				weight: 'bold',
			},
			padding: { top: '10px', bottom: '10px', left: '14px', right: '14px' },
			borderRadius: '10px',
			display: 'none',

			'@': {
				bog_tracker_mpit_neolo_parent_add_child_modal_result_kind: {
					ok: {
						display: 'block',
						background: { color: '#e4f7eb' },
						color: t.g6,
					},
					error: {
						display: 'block',
						background: { color: t.red_soft },
						color: t.red,
					},
					warn: {
						display: 'block',
						background: { color: t.yellow },
						color: t.yellow_text,
					},
				},
			},
		},

		Actions: {
			display: 'flex',
			justify: { content: 'flex-end' },
			gap: '10px',
		},

		'@': {
			bog_tracker_mpit_neolo_parent_add_child_modal_open: {
				true: {
					display: 'flex',
				},
			},
		},

	})

}
