namespace $ {

	const t = $bog_tracker_mpit_neolo_tokens

	$mol_style_define( $bog_tracker_mpit_neolo_parent_children, {
		display: 'flex',
		flex: { direction: 'column', grow: 1 },
		gap: '16px',

		Header_bar: {
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'space-between' },
			padding: { top: '12px', bottom: '12px', left: '16px', right: '16px' },
			background: { color: '#ffffff1a' },
			borderRadius: '14px',
			color: t.g0,
		},

		Count_label: {
			font: {
				size: '15px',
				weight: 'bold',
			},
			color: '#ffffffb3',
		},

		Add_btn: {
			background: { color: t.g0 },
			color: t.p2,
			padding: { top: '10px', bottom: '10px', left: '18px', right: '18px' },
			borderRadius: '12px',
			font: { weight: 'bold' },
		},

		Empty: {
			display: 'flex',
			flex: { direction: 'column' },
			align: { items: 'center' },
			justify: { content: 'center' },
			padding: { top: '60px', bottom: '60px', left: '20px', right: '20px' },
			gap: '12px',
			color: t.g0,
			textAlign: 'center',
		},

		Empty_icon: {
			font: { size: '64px' },
		},

		Empty_text: {
			font: {
				size: '20px',
				weight: 'bold',
			},
		},

		Empty_sub: {
			font: { size: '14px' },
			color: '#ffffffb3',
			maxWidth: '360px',
		},

		Empty_add_btn: {
			background: { color: t.g0 },
			color: t.p2,
			padding: { top: '12px', bottom: '12px', left: '20px', right: '20px' },
			borderRadius: '12px',
			font: { weight: 'bold' },
			margin: { top: '12px' },
		},

		Grid: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
			gap: '16px',
		},

	})

	$mol_style_define( $bog_tracker_mpit_neolo_parent_children_card, {
		position: 'relative',
		display: 'flex',
		background: { color: '#ffffff1f' },
		borderRadius: '16px',
		padding: { top: '16px', bottom: '16px', left: '16px', right: '16px' },
		color: t.g0,

		Card_body: {
			display: 'flex',
			align: { items: 'center' },
			gap: '14px',
			flex: { grow: 1 },
			background: { color: 'transparent' },
			color: t.g0,
			padding: 0,
			textAlign: 'left',
		},

		Avatar: {
			width: '48px',
			height: '48px',
			borderRadius: '999px',
			background: {
				image: [ [ `linear-gradient(135deg, ${ t.p1 }, ${ t.p2 })` ] ],
			},
			color: t.g0,
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
			font: {
				size: '20px',
				weight: 'bold',
			},
			flex: { shrink: 0 },
		},

		Info: {
			display: 'flex',
			flex: { direction: 'column', grow: 1 },
			gap: '4px',
			minWidth: 0,
		},

		Name: {
			font: {
				size: '16px',
				weight: 'bold',
			},
			color: t.g0,
			whiteSpace: 'nowrap',
			textOverflow: 'ellipsis',
			overflow: { x: 'hidden' },
		},

		Meta: {
			font: { size: '13px' },
			color: '#ffffffb3',
			whiteSpace: 'nowrap',
			textOverflow: 'ellipsis',
			overflow: { x: 'hidden' },
		},

		Remove_btn: {
			position: 'absolute',
			top: '8px',
			right: '8px',
			width: '28px',
			height: '28px',
			minWidth: '28px',
			padding: 0,
			borderRadius: '999px',
			background: { color: '#ffffff2e' },
			color: t.g0,
			font: {
				size: '16px',
				weight: 'bold',
			},
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
		},

	})

}
