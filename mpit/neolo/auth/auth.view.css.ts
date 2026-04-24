namespace $ {

	const t = $bog_tracker_mpit_neolo_tokens

	$mol_style_define( $bog_tracker_mpit_neolo_auth, {
		display: 'flex',
		minHeight: '100vh',
		width: '100%',
		align: { items: 'center' },
		justify: { content: 'center' },
		padding: { top: '24px', bottom: '24px', left: '24px', right: '24px' },
		boxSizing: 'border-box',
		background: {
			image: [[ `linear-gradient(135deg, ${ t.g6 } 0%, ${ t.g5 } 55%, ${ t.g4 } 100%)` ]],
		},
		font: {
			family: '"Segoe UI", Arial, sans-serif',
		},
		color: t.b0,

		Card: {
			display: 'flex',
			flex: { direction: 'column' },
			width: '100%',
			maxWidth: '460px',
			maxHeight: '93vh',
			overflow: { y: 'auto' },
			background: { color: t.g0 },
			borderRadius: '28px',
			boxSizing: 'border-box',
			padding: { top: '36px', bottom: '32px', left: '32px', right: '32px' },
			box: {
				shadow: [ { x: 0, y: '32px', blur: '80px', spread: 0, color: '#00000038' } ],
			},
		},

		Brand: {
			display: 'flex',
			flex: { direction: 'row', wrap: 'nowrap' },
			font: {
				size: '28px',
				weight: 800,
			},
			color: t.g5,
			margin: { bottom: '4px' },
		},

		Brand_accent: {
			display: 'inline',
			color: t.b0,
		},

		Sub: {
			display: 'block',
			font: { size: '14px' },
			color: t.b3,
			margin: { bottom: '26px' },
		},

		Tabs: {
			display: 'flex',
			flex: { direction: 'row' },
			background: { color: t.g2 },
			borderRadius: '12px',
			padding: { top: '4px', bottom: '4px', left: '4px', right: '4px' },
			margin: { bottom: '22px' },
			gap: '4px',
		},

		Error_view: {
			background: { color: '#fff0f0' },
			color: t.red,
			borderRadius: '10px',
			padding: { top: '10px', bottom: '10px', left: '14px', right: '14px' },
			font: { size: '14px', weight: 600 },
			margin: { bottom: '14px' },
			'@': {
				bog_tracker_mpit_neolo_auth_error_visible: {
					true: { display: 'block' },
					false: { display: 'none' },
				},
			},
		},

		Login_form: {
			flex: { direction: 'column' },
			gap: 0,
			'@': {
				bog_tracker_mpit_neolo_auth_form_visible: {
					true: { display: 'flex' },
					false: { display: 'none' },
				},
			},
		},

		Register_form: {
			flex: { direction: 'column' },
			gap: 0,
			'@': {
				bog_tracker_mpit_neolo_auth_form_visible: {
					true: { display: 'flex' },
					false: { display: 'none' },
				},
			},
		},

		Reg_two_col: {
			display: 'grid',
			gridTemplateColumns: '1fr 1fr',
			gap: '12px',
			margin: { bottom: '14px' },
		},

		Reg_role_label: {
			display: 'block',
			font: { size: '13px', weight: 700 },
			color: t.b2,
			margin: { top: '6px', bottom: '8px' },
		},

		Reg_role_grid: {
			display: 'grid',
			gridTemplateColumns: 'repeat(3, 1fr)',
			gap: '10px',
			margin: { bottom: '14px' },
		},

		Reg_school_field: {
			'@': {
				bog_tracker_mpit_neolo_auth_school_visible: {
					true: { display: 'flex' },
					false: { display: 'none' },
				},
			},
		},

		Login_submit: {
			width: '100%',
			padding: { top: '13px', bottom: '13px', left: 0, right: 0 },
			borderRadius: '13px',
			background: { color: t.g5 },
			color: t.g0,
			font: { weight: 800, size: '16px' },
			justify: { content: 'center' },
			margin: { top: '6px' },
			':hover': {
				background: { color: t.g6 },
			},
		},

		Reg_submit: {
			width: '100%',
			padding: { top: '13px', bottom: '13px', left: 0, right: 0 },
			borderRadius: '13px',
			background: { color: t.g5 },
			color: t.g0,
			font: { weight: 800, size: '16px' },
			justify: { content: 'center' },
			margin: { top: '6px' },
			':hover': {
				background: { color: t.g6 },
			},
		},

		$mol_labeler: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '6px',
			margin: { bottom: '14px' },
		},

		$mol_string: {
			width: '100%',
			boxSizing: 'border-box',
			padding: { top: '11px', bottom: '11px', left: '14px', right: '14px' },
			border: {
				width: '1.5px',
				style: 'solid',
				color: t.g2,
			},
			borderRadius: '11px',
			background: { color: t.g0 },
			font: { size: '15px' },
			outline: 'none',
			':focus': {
				border: { color: t.g4 },
			},
		},
	} )

	$mol_style_define( $bog_tracker_mpit_neolo_auth_role_button, {
		display: 'flex',
		flex: { direction: 'column' },
		align: { items: 'center' },
		justify: { content: 'center' },
		gap: '8px',
		padding: { top: '14px', bottom: '14px', left: '8px', right: '8px' },
		borderRadius: '14px',
		border: {
			width: '2px',
			style: 'solid',
			color: t.g2,
		},
		background: { color: t.g1 },
		font: { weight: 700, size: '13px' },
		color: t.b2,
		cursor: 'pointer',
		'@': {
			bog_tracker_mpit_neolo_auth_role_button_selected: {
				true: {
					border: { color: t.g4 },
					background: { color: '#e4f7eb' },
					color: t.g6,
				},
			},
		},

		Role_icon: {
			font: { size: '26px' },
			display: 'block',
		},

		Role_label: {
			display: 'block',
		},
	} )

}
