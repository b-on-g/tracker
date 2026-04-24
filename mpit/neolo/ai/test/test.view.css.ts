namespace $ {

	const t = $bog_tracker_mpit_neolo_tokens

	$mol_style_define( $bog_tracker_mpit_neolo_ai_test, {
		display: 'block',
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: 9999,
		'@': {
			bog_tracker_mpit_neolo_ai_test_hidden: {
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
			maxWidth: '720px',
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
			padding: { top: 0, bottom: '16px', left: 0, right: 0 },
			border: { bottom: { width: '2px', style: 'solid', color: t.g2 } },
			margin: { bottom: '20px' },
		},

		Header_left: {
			display: 'flex',
			align: { items: 'center' },
			gap: '12px',
		},

		Icon: {
			font: { size: '32px' },
			display: 'block',
		},

		Titles: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '2px',
		},

		Title: {
			font: { size: '22px', weight: 800 },
			color: t.b0,
		},

		Subtitle: {
			font: { size: '13px' },
			color: t.b3,
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

		Content: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '0.75rem',
		},

		Loading: {
			flex: { direction: 'column' },
			align: { items: 'center' },
			gap: '16px',
			padding: { top: '40px', bottom: '40px', left: '20px', right: '20px' },
			textAlign: 'center',
			'@': {
				bog_tracker_mpit_neolo_ai_test_loading_visible: {
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

		Questions: {
			flex: { direction: 'column' },
			gap: '14px',
			'@': {
				bog_tracker_mpit_neolo_ai_test_questions_visible: {
					true: { display: 'flex' },
					false: { display: 'none' },
				},
			},
		},

		Error: {
			flex: { direction: 'column' },
			align: { items: 'center' },
			gap: '12px',
			padding: { top: '40px', bottom: '40px', left: '24px', right: '24px' },
			textAlign: 'center',
			'@': {
				bog_tracker_mpit_neolo_ai_test_error_visible: {
					true: { display: 'flex' },
					false: { display: 'none' },
				},
			},
		},

		Error_icon: {
			font: { size: '56px' },
		},

		Error_title: {
			font: { size: '20px', weight: 800 },
			color: t.b0,
		},

		Error_text: {
			font: { size: '14px' },
			color: t.b3,
			lineHeight: '1.6',
			maxWidth: '360px',
		},

		Results: {
			flex: { direction: 'column' },
			align: { items: 'center' },
			padding: { top: '24px', bottom: '24px', left: '20px', right: '20px' },
			textAlign: 'center',
			gap: '6px',
			'@': {
				bog_tracker_mpit_neolo_ai_test_results_visible: {
					true: { display: 'flex' },
					false: { display: 'none' },
				},
			},
		},

		Score: {
			font: { size: '64px', weight: 800 },
			color: t.g5,
			lineHeight: '1',
		},

		Results_label: {
			font: { size: '16px', weight: 700 },
			color: t.b2,
			margin: { top: '8px' },
		},

		Results_detail: {
			font: { size: '14px' },
			color: t.b3,
			margin: { top: '6px' },
		},

		Mistakes_block: {
			flex: { direction: 'column' },
			width: '100%',
			textAlign: 'left',
			margin: { top: '20px' },
			gap: '10px',
			'@': {
				bog_tracker_mpit_neolo_ai_test_mistakes_visible: {
					true: { display: 'flex' },
					false: { display: 'none' },
				},
			},
		},

		Actions: {
			display: 'flex',
			justify: { content: 'flex-end' },
			gap: '8px',
			margin: { top: '16px' },
		},

		Close_btn: {
			padding: { top: '10px', bottom: '10px', left: '16px', right: '16px' },
			borderRadius: '11px',
			background: { color: t.g2 },
			color: t.b1,
			font: { weight: 700, size: '14px' },
		},

		Finish_btn: {
			padding: { top: '10px', bottom: '10px', left: '18px', right: '18px' },
			borderRadius: '11px',
			background: { color: t.g5 },
			color: t.g0,
			font: { weight: 800, size: '14px' },
			'@': {
				bog_tracker_mpit_neolo_ai_test_finish_visible: {
					true: { display: 'flex' },
					false: { display: 'none' },
				},
			},
		},
	} )

	$mol_style_define( $bog_tracker_mpit_neolo_ai_test_question, {
		display: 'flex',
		flex: { direction: 'column' },
		background: { color: '#f8faf8' },
		borderRadius: '16px',
		padding: { top: '20px', bottom: '20px', left: '22px', right: '22px' },
		margin: { bottom: '0' },
		border: { width: '1.5px', style: 'solid', color: t.g2 },
		gap: '10px',

		Num: {
			font: { size: '13px', weight: 800 },
			color: t.g5,
			textTransform: 'uppercase',
			letterSpacing: '1px',
		},

		Text: {
			font: { size: '16px', weight: 700 },
			color: t.b0,
			lineHeight: '1.5',
		},

		Options: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '8px',
		},
	} )

	$mol_style_define( $bog_tracker_mpit_neolo_ai_test_option, {
		display: 'flex',
		align: { items: 'center' },
		gap: '10px',
		padding: { top: '12px', bottom: '12px', left: '14px', right: '14px' },
		borderRadius: '11px',
		background: { color: t.g0 },
		border: { width: '2px', style: 'solid', color: t.g2 },
		cursor: 'pointer',
		font: { size: '15px', weight: 600 },
		color: t.b1,
		textAlign: 'left',
		'@': {
			bog_tracker_mpit_neolo_ai_test_option_state: {
				idle: {
					background: { color: t.g0 },
					border: { color: t.g2 },
					color: t.b1,
				},
				selected: {
					border: { color: t.g4 },
					background: { color: '#e4f7eb' },
					color: t.g6,
				},
				correct: {
					border: { color: t.g4 },
					background: { color: t.green_done_bg },
					color: t.green_done_text,
				},
				wrong: {
					border: { color: '#e74c3c' },
					background: { color: t.red_badge },
					color: t.red_badge_text,
				},
			},
		},

		Letter: {
			width: '28px',
			height: '28px',
			borderRadius: '999px',
			background: { color: t.g2 },
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
			font: { size: '13px', weight: 800 },
			color: t.b0,
			flex: { shrink: 0 },
		},

		Text_val: {
			display: 'block',
			flex: { grow: 1 },
		},
	} )

	$mol_style_define( $bog_tracker_mpit_neolo_ai_test_mistake, {
		display: 'flex',
		flex: { direction: 'column' },
		background: { color: t.orange_soft },
		borderRadius: '12px',
		padding: { top: '14px', bottom: '14px', left: '16px', right: '16px' },
		border: { left: { width: '4px', style: 'solid', color: t.orange_text } },
		gap: '6px',

		Mq: {
			font: { size: '14px', weight: 700 },
			color: t.b0,
		},

		Ma: {
			display: 'flex',
			flex: { wrap: 'wrap' },
			gap: '6px',
			font: { size: '13px' },
			color: t.b3,
			lineHeight: '1.5',
		},

		Correct_marker: {
			color: t.g5,
			font: { weight: 700 },
		},
	} )

}
