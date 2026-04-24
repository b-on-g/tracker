namespace $ {

	const t = $bog_tracker_mpit_neolo_tokens

	$mol_style_define( $bog_tracker_mpit_neolo_modal_time_range, {
		display: 'flex',
		flex: { direction: 'column' },
		gap: '0.375rem',

		Label: {
			font: {
				size: '0.8125rem',
				weight: 700,
			},
			color: t.b2,
		},

		Row: {
			display: 'flex',
			gap: '0.125rem',
			align: { items: 'center' },
		},

		Start_h: {
			width: '3rem',
			textAlign: 'center',
			font: { size: '0.9375rem', weight: 700 },
		},
		Start_m: {
			width: '3rem',
			textAlign: 'center',
			font: { size: '0.9375rem', weight: 700 },
		},
		End_h: {
			width: '3rem',
			textAlign: 'center',
			font: { size: '0.9375rem', weight: 700 },
		},
		End_m: {
			width: '3rem',
			textAlign: 'center',
			font: { size: '0.9375rem', weight: 700 },
		},

		Sep1: {
			font: { weight: 800, size: '1.0625rem' },
			color: t.b3,
		},
		Sep2: {
			font: { weight: 800, size: '1.0625rem' },
			color: t.b3,
		},

		Range_sep: {
			font: { weight: 800, size: '0.9375rem' },
			color: t.b4,
			padding: { top: 0, bottom: 0, left: '0.125rem', right: '0.125rem' },
		},

		Ai_row: {
			display: 'flex',
			align: { items: 'center' },
			gap: '0.5rem',
			margin: { top: '0.125rem' },
		},

		Ai_button: {
			background: { color: t.g1 },
			border: {
				width: '1.5px',
				style: 'solid',
				color: t.g4,
			},
			color: t.g6,
			font: { weight: 800, size: '0.75rem' },
			padding: { top: '0.3125rem', bottom: '0.3125rem', left: '0.625rem', right: '0.625rem' },
			borderRadius: '8px',
			whiteSpace: 'nowrap',
		},

		Hint_view: {
			font: { size: '0.75rem', weight: 700 },
			color: t.g5,

			'@': {
				bog_tracker_mpit_neolo_modal_time_range_hint_visible: {
					true: { display: 'block' },
					false: { display: 'none' },
				},
			},
		},
	})

}
