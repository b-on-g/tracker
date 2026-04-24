namespace $ {

	const t = $bog_tracker_mpit_neolo_tokens

	$mol_style_define( $bog_tracker_mpit_neolo_modal_modal, {
		display: 'block',
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: 9999,

		'@': {
			bog_tracker_mpit_neolo_modal_modal_hidden: {
				true: { display: 'none' },
				false: { display: 'block' },
			},
		},

		Backdrop: {
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			background: { color: '#00000080' },
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
			padding: '1rem',
			overflow: { y: 'auto' },
		},

		Card: {
			background: { color: t.g0 },
			borderRadius: '24px',
			boxShadow: t.shadow,
			maxWidth: '560px',
			width: '100%',
			flex: { direction: 'column' },
			display: 'flex',
			maxHeight: '90vh',
			overflow: { y: 'auto' },
			padding: { top: '1.25rem', bottom: '1.25rem', left: '1.5rem', right: '1.5rem' },
			boxSizing: 'border-box',
		},

		Head: {
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'space-between' },
			padding: { top: 0, bottom: '1rem', left: 0, right: 0 },
			gap: '0.5rem',
		},

		Title: {
			font: {
				size: '1.125rem',
				weight: 800,
			},
			color: t.b0,
			flex: { grow: 1 },
		},

		Close: {
			font: {
				size: '1.5rem',
				weight: 700,
			},
			color: t.b3,
			background: { color: 'transparent' },
			width: '2rem',
			height: '2rem',
			borderRadius: '999px',
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
			padding: { top: 0, bottom: 0, left: 0, right: 0 },
		},

		Body: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '0.875rem',
		},

	})

}
