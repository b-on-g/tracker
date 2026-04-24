namespace $ {

	const t = $bog_tracker_mpit_neolo_tokens

	$mol_style_define( $bog_tracker_mpit_neolo_ai_advice, {
		display: 'flex',
		flex: { direction: 'column' },
		gap: '12px',
		padding: { top: '16px', bottom: '16px', left: '18px', right: '18px' },
		borderRadius: '16px',
		background: { color: t.g1 },
		border: { width: '1.5px', style: 'solid', color: t.g2 },

		Header: {
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'space-between' },
			gap: '8px',
			flex: { wrap: 'wrap' },
		},

		Title: {
			font: { size: '15px', weight: 800 },
			color: t.b0,
		},

		Trigger_btn: {
			padding: { top: '10px', bottom: '10px', left: '16px', right: '16px' },
			borderRadius: '12px',
			background: { color: t.g5 },
			color: t.g0,
			font: { weight: 800, size: '14px' },
			display: 'inline-flex',
			align: { items: 'center' },
			gap: '6px',
			':hover': {
				background: { color: t.g6 },
			},
		},

		Block: {
			flex: { direction: 'column' },
			gap: '10px',
			maxHeight: '320px',
			overflow: { y: 'auto' },
			padding: { top: '14px', bottom: '14px', left: '16px', right: '16px' },
			borderRadius: '12px',
			background: { color: t.g0 },
			font: { size: '14px' },
			color: t.b1,
			lineHeight: '1.6',
			'@': {
				bog_tracker_mpit_neolo_ai_advice_block_visible: {
					true: { display: 'flex' },
					false: { display: 'none' },
				},
			},
		},

		Content: {
			display: 'block',
			maxHeight: '320px',
			overflow: { y: 'auto' },
			font: { size: '14px' },
			color: t.b1,
			lineHeight: '1.6',
		},

		Error_view: {
			color: t.red,
			font: { size: '13px', weight: 600 },
			'@': {
				bog_tracker_mpit_neolo_ai_advice_error_visible: {
					true: { display: 'block' },
					false: { display: 'none' },
				},
			},
		},
	} )

}
