namespace $ {

	const t = $bog_tracker_mpit_neolo_tokens

	$mol_style_define( $bog_tracker_mpit_neolo_task_view, {

		Status_row: {
			display: 'flex',
			align: { items: 'center' },
			gap: '0.625rem',
			flex: { wrap: 'wrap' },
			margin: { bottom: '0.5rem' },
		},

		Status_badge: {
			display: 'inline-flex',
			align: { items: 'center' },
			gap: '0.3125rem',
			padding: { top: '0.1875rem', bottom: '0.1875rem', left: '0.625rem', right: '0.625rem' },
			borderRadius: '999px',
			font: { size: '0.75rem', weight: 700 },
			whiteSpace: 'nowrap',

			'@': {
				bog_tracker_mpit_neolo_task_view_status: {
					pending: {
						background: { color: t.yellow },
						color: t.yellow_text,
					},
					progress: {
						background: { color: t.blue_badge },
						color: t.blue,
					},
					review: {
						background: { color: t.red_badge },
						color: t.red_badge_text,
					},
					done: {
						background: { color: t.green_done_bg },
						color: t.green_done_text,
					},
					rejected: {
						background: { color: t.grey_soft },
						color: t.grey_text,
					},
					overdue: {
						background: { color: t.red_badge },
						color: t.red_badge_text,
					},
				},
			},
		},

		Source_badge: {
			font: { size: '0.8125rem', weight: 700 },
			color: t.g5,
		},

		Delete_btn: {
			margin: { left: 'auto' },
			background: { color: t.red_soft },
			color: t.red,
			font: { weight: 700, size: '0.8125rem' },
			padding: { top: '0.5625rem', bottom: '0.5625rem', left: '0.875rem', right: '0.875rem' },
			borderRadius: '10px',
		},

		Error_view: {
			font: { size: '0.8125rem', weight: 600 },
			color: t.red,
			background: { color: t.red_soft },
			padding: { top: '0.5rem', bottom: '0.5rem', left: '0.75rem', right: '0.75rem' },
			borderRadius: '8px',

			'@': {
				bog_tracker_mpit_neolo_task_view_error_visible: {
					true: { display: 'block' },
					false: { display: 'none' },
				},
			},
		},

		Ai_actions: {
			display: 'flex',
			gap: '0.5rem',
			flex: { wrap: 'wrap' },
		},

		Ai_test_btn: {
			'@': {
				bog_tracker_mpit_neolo_task_view_ai_visible: {
					true: { display: 'inline-flex' },
					false: { display: 'none' },
				},
			},
		},

		Ai_explain_btn: {
			'@': {
				bog_tracker_mpit_neolo_task_view_ai_visible: {
					true: { display: 'inline-flex' },
					false: { display: 'none' },
				},
			},
		},

		Teacher_file_row: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '0.375rem',

			'@': {
				bog_tracker_mpit_neolo_task_view_visible: {
					true: { display: 'flex' },
					false: { display: 'none' },
				},
			},
		},

		Teacher_file_label: {
			font: { size: '0.8125rem', weight: 700 },
			color: t.b2,
		},

		Teacher_file_box: {
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
		},

		Teacher_file_link: {
			margin: { left: 'auto' },
			color: t.g5,
			font: { weight: 700, size: '0.8125rem' },
		},

		Student_file_row: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '0.375rem',

			'@': {
				bog_tracker_mpit_neolo_task_view_visible: {
					true: { display: 'flex' },
					false: { display: 'none' },
				},
			},
		},

		Student_file_label: {
			font: { size: '0.8125rem', weight: 700 },
			color: t.b2,
		},

		Student_file_box: {
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
		},

		Student_file_link: {
			margin: { left: 'auto' },
			color: t.g5,
			font: { weight: 700, size: '0.8125rem' },
		},

		Upload_section: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '0.375rem',

			'@': {
				bog_tracker_mpit_neolo_task_view_visible: {
					true: { display: 'flex' },
					false: { display: 'none' },
				},
			},
		},

		Upload_label: {
			font: { size: '0.8125rem', weight: 700 },
			color: t.b2,
		},

		Actions: {
			display: 'flex',
			justify: { content: 'flex-end' },
			gap: '0.625rem',
			margin: { top: '0.5rem' },
			align: { items: 'center' },
			flex: { wrap: 'wrap' },
		},

		Action_btn: {
			margin: { right: 'auto' },

			'@': {
				bog_tracker_mpit_neolo_task_view_visible: {
					true: { display: 'inline-flex' },
					false: { display: 'none' },
				},
			},
		},

	})

}
