namespace $ {

	const t = $bog_tracker_mpit_neolo_tokens

	$mol_style_define( $bog_tracker_mpit_neolo_parent_profile, {
		display: 'flex',
		flex: { direction: 'column' },
		gap: '20px',
		color: t.g0,
		maxWidth: '600px',

		Card: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '14px',
			padding: { top: '20px', bottom: '20px', left: '22px', right: '22px' },
			background: { color: '#ffffff1a' },
			borderRadius: '18px',
		},

		Card_title: {
			font: {
				size: '20px',
				weight: 'bold',
			},
			color: t.g0,
		},

		Table: {
			display: 'grid',
			gridTemplateColumns: '140px 1fr',
			gap: '10px',
		},

		Manage: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '12px',
		},

		Manage_title: {
			font: {
				size: '16px',
				weight: 'bold',
			},
			color: t.g0,
		},

		Children_block: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '10px',
		},

		Children_empty: {
			color: '#ffffffb3',
			font: { size: '14px' },
		},

		Add_btn: {
			align: { self: 'flex-start' },
			background: { color: t.g0 },
			color: t.p2,
			padding: { top: '10px', bottom: '10px', left: '18px', right: '18px' },
			borderRadius: '12px',
			font: { weight: 'bold' },
		},

	})

	$mol_style_define( $bog_tracker_mpit_neolo_parent_profile_row, {
		display: 'contents',

		Label: {
			font: {
				size: '13px',
				weight: 'bold',
			},
			color: '#ffffffb3',
		},

		Value: {
			font: {
				size: '14px',
				weight: 'bold',
			},
			color: t.g0,
		},

	})

	$mol_style_define( $bog_tracker_mpit_neolo_parent_profile_child_row, {
		display: 'flex',
		align: { items: 'center' },
		gap: '12px',
		padding: { top: '12px', bottom: '12px', left: '16px', right: '16px' },
		background: { color: '#ffffff1a' },
		borderRadius: '12px',
		color: t.g0,

		Avatar: {
			width: '36px',
			height: '36px',
			borderRadius: '999px',
			background: {
				image: [ [ `linear-gradient(135deg, ${ t.p1 }, ${ t.p2 })` ] ],
			},
			color: t.g0,
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
			font: { weight: 'bold' },
			flex: { shrink: 0 },
		},

		Info: {
			display: 'flex',
			flex: { direction: 'column', grow: 1 },
			gap: '2px',
			minWidth: 0,
		},

		Name: {
			font: { weight: 'bold' },
			color: t.g0,
			whiteSpace: 'nowrap',
			textOverflow: 'ellipsis',
			overflow: { x: 'hidden' },
		},

		Meta: {
			font: { size: '12px' },
			color: '#ffffffb3',
		},

		Remove_btn: {
			background: { color: '#ffffff26' },
			color: t.g0,
			padding: { top: '6px', bottom: '6px', left: '12px', right: '12px' },
			borderRadius: '10px',
			font: { size: '12px', weight: 'bold' },
		},

	})

}
