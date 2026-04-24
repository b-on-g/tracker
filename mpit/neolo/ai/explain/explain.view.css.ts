namespace $ {

	const t = $bog_tracker_mpit_neolo_tokens

	$mol_style_define( $bog_tracker_mpit_neolo_ai_explain, {
		display: 'block',
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: 9999,
		'@': {
			bog_tracker_mpit_neolo_ai_explain_hidden: {
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
			maxWidth: '640px',
			width: '100%',
			flex: { direction: 'column' },
			display: 'flex',
			maxHeight: '88vh',
			overflow: { y: 'auto' },
			padding: { top: '1.25rem', bottom: '1.25rem', left: '1.5rem', right: '1.5rem' },
			boxSizing: 'border-box',
		},

		Head: {
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'space-between' },
			padding: { top: 0, bottom: '12px', left: 0, right: 0 },
			gap: '0.5rem',
			margin: { bottom: '8px' },
		},

		Header_left: {
			display: 'flex',
			align: { items: 'center' },
			gap: '10px',
		},

		Icon: {
			font: { size: '28px' },
			display: 'block',
		},

		Title: {
			font: { size: '18px', weight: 800 },
			color: t.b0,
			flex: { grow: 1 },
		},

		Close: {
			font: { size: '1.5rem', weight: 700 },
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

		Loading: {
			flex: { direction: 'column' },
			align: { items: 'center' },
			gap: '16px',
			padding: { top: '40px', bottom: '40px', left: '20px', right: '20px' },
			textAlign: 'center',
			'@': {
				bog_tracker_mpit_neolo_ai_explain_loading_visible: {
					true: { display: 'flex' },
					false: { display: 'none' },
				},
			},
		},

		Spinner: {
			width: '48px',
			height: '48px',
			border: { width: '4px', style: 'solid', color: t.g2 },
			borderRadius: '999px',
		},

		Loading_text: {
			font: { size: '16px', weight: 700 },
			color: t.b2,
		},

		Loading_sub: {
			font: { size: '13px' },
			color: t.b3,
			maxWidth: '320px',
			lineHeight: '1.5',
		},

		Content: {
			flex: { direction: 'column' },
			gap: '1rem',
			'@': {
				bog_tracker_mpit_neolo_ai_explain_content_visible: {
					true: { display: 'flex' },
					false: { display: 'none' },
				},
			},
		},

		Explain_text: {
			display: 'block',
			font: { size: '15px' },
			lineHeight: '1.8',
			color: t.b1,
		},

		Chat_box: {
			display: 'flex',
			flex: { direction: 'column' },
			margin: { top: '16px' },
			padding: { top: '16px', bottom: 0, left: 0, right: 0 },
			border: { top: { width: '1.5px', style: 'solid', color: t.g2 } },
			gap: '12px',
		},

		Chat_history: {
			display: 'flex',
			flex: { direction: 'column' },
			maxHeight: '200px',
			overflow: { y: 'auto' },
			gap: '8px',
		},

		Chat_input_row: {
			display: 'flex',
			gap: '8px',
		},

		Question_input: {
			flex: { grow: 1 },
			padding: { top: '10px', bottom: '10px', left: '14px', right: '14px' },
			border: { width: '1.5px', style: 'solid', color: t.g2 },
			borderRadius: '11px',
			font: { size: '14px' },
			outline: 'none',
			background: { color: t.g0 },
		},

		Ask_btn: {
			padding: { top: '10px', bottom: '10px', left: '16px', right: '16px' },
			borderRadius: '11px',
			background: { color: t.g5 },
			color: t.g0,
			font: { weight: 700, size: '14px' },
		},

		Topic_error: {
			flex: { direction: 'column' },
			align: { items: 'center' },
			gap: '12px',
			padding: { top: '40px', bottom: '40px', left: '24px', right: '24px' },
			textAlign: 'center',
			'@': {
				bog_tracker_mpit_neolo_ai_explain_topic_error_visible: {
					true: { display: 'flex' },
					false: { display: 'none' },
				},
			},
		},

		Err_icon: { font: { size: '56px' } },
		Err_title: { font: { size: '20px', weight: 800 }, color: t.b0 },
		Err_text: {
			font: { size: '14px' },
			color: t.b3,
			lineHeight: '1.6',
			maxWidth: '360px',
		},

		Error: {
			flex: { direction: 'column' },
			align: { items: 'center' },
			gap: '12px',
			padding: { top: '40px', bottom: '40px', left: '24px', right: '24px' },
			textAlign: 'center',
			'@': {
				bog_tracker_mpit_neolo_ai_explain_error_visible: {
					true: { display: 'flex' },
					false: { display: 'none' },
				},
			},
		},

		Error_icon: { font: { size: '56px' } },
		Error_title: { font: { size: '20px', weight: 800 }, color: t.b0 },
		Error_text: {
			font: { size: '14px' },
			color: t.b3,
			lineHeight: '1.6',
			maxWidth: '360px',
		},
	} )

	$mol_style_define( $bog_tracker_mpit_neolo_ai_explain_chat_msg, {
		display: 'block',
		padding: { top: '10px', bottom: '10px', left: '14px', right: '14px' },
		borderRadius: '12px',
		font: { size: '14px' },
		lineHeight: '1.5',
		maxWidth: '90%',
		'@': {
			bog_tracker_mpit_neolo_ai_explain_chat_msg_role: {
				user: {
					align: { self: 'flex-end' },
					background: { color: t.g4 },
					color: t.b0,
					font: { weight: 600 },
				},
				assistant: {
					align: { self: 'flex-start' },
					background: { color: t.g1 },
					color: t.b1,
					border: { width: '1px', style: 'solid', color: t.g2 },
				},
			},
		},
	} )

}
