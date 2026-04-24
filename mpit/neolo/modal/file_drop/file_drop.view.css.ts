namespace $ {

	const t = $bog_tracker_mpit_neolo_tokens

	$mol_style_define( $bog_tracker_mpit_neolo_modal_file_drop, {
		display: 'flex',
		flex: { direction: 'column' },
		gap: '0.375rem',
	})

	$mol_style_define( $bog_tracker_mpit_neolo_modal_file_drop_zone, {
		position: 'relative',
		display: 'flex',
		align: { items: 'center' },
		justify: { content: 'center' },
		border: {
			width: '2px',
			style: 'dashed',
			color: t.g3,
		},
		borderRadius: '12px',
		padding: { top: '0.875rem', bottom: '0.875rem', left: '1rem', right: '1rem' },
		textAlign: 'center',
		cursor: 'pointer',
		background: { color: t.g1 },

		'@': {
			bog_tracker_mpit_neolo_modal_file_drop_zone_drag: {
				true: {
					border: {
						width: '2px',
						style: 'dashed',
						color: t.g4,
					},
					background: { color: '#f0fff4' },
				},
			},
		},

		Input: {
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			width: '100%',
			height: '100%',
			opacity: 0,
			cursor: 'pointer',
		},

		Label_view: {
			font: { size: '0.8125rem', weight: 600 },
			color: t.b3,
			pointerEvents: 'none',
		},
	})

	$mol_style_define( $bog_tracker_mpit_neolo_modal_file_drop_attached, {
		display: 'flex',
		align: { items: 'center' },
		gap: '0.625rem',
		padding: { top: '0.5625rem', bottom: '0.5625rem', left: '0.8125rem', right: '0.8125rem' },
		borderRadius: '10px',
		background: { color: '#e4f7eb' },
		border: {
			width: '1.5px',
			style: 'solid',
			color: t.g4,
		},
		font: { size: '0.8125rem', weight: 700 },
		color: t.g6,

		Name: {
			flex: { grow: 1 },
			overflow: { x: 'hidden' },
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
		},

		Remove_btn: {
			margin: { left: 'auto' },
			background: { color: 'transparent' },
			color: t.b3,
			font: { size: '1.125rem' },
			padding: { top: 0, bottom: 0, left: '0.25rem', right: '0.25rem' },
		},
	})

}
