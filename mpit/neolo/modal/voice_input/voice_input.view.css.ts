namespace $ {

	const t = $bog_tracker_mpit_neolo_tokens

	$mol_style_define( $bog_tracker_mpit_neolo_modal_voice_input, {
		position: 'relative',
		display: 'flex',
		align: { items: 'stretch' },
		width: '100%',

		Voice_btn: {
			position: 'absolute',
			right: '0.5rem',
			top: '50%',
			transform: 'translateY(-50%)',
			width: '1.875rem',
			height: '1.875rem',
			borderRadius: '999px',
			background: { color: t.g2 },
			color: t.b2,
			font: { size: '0.9375rem' },
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
			padding: { top: 0, bottom: 0, left: 0, right: 0 },
			zIndex: 1,
			cursor: 'pointer',

			'@': {
				bog_tracker_mpit_neolo_modal_voice_input_listening: {
					true: {
						background: { color: t.g5 },
						color: t.g0,
						boxShadow: '0 0 0 4px #1aa84340',
					},
				},
			},
		},

		'@': {
			bog_tracker_mpit_neolo_modal_voice_input_multiline: {
				true: {
					// multiline: push voice button to top
				},
			},
		},
	})

	$mol_style_define( $bog_tracker_mpit_neolo_modal_voice_input_string, {
		flex: { grow: 1 },
		padding: { top: '0.6875rem', bottom: '0.6875rem', left: '0.8125rem', right: '2.75rem' },
	})

	$mol_style_define( $bog_tracker_mpit_neolo_modal_voice_input_textarea, {
		flex: { grow: 1 },
		padding: { top: '0.6875rem', bottom: '0.6875rem', left: '0.8125rem', right: '2.75rem' },
		minHeight: '6.25rem',
	})

}
