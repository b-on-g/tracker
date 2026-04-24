namespace $ {

	const t = $bog_tracker_mpit_neolo_tokens

	$mol_style_define( $bog_tracker_mpit_neolo_task_assign, {

		Error_view: {
			font: { size: '0.8125rem', weight: 600 },
			color: t.red,
			background: { color: t.red_soft },
			padding: { top: '0.5rem', bottom: '0.5rem', left: '0.75rem', right: '0.75rem' },
			borderRadius: '8px',

			'@': {
				bog_tracker_mpit_neolo_task_assign_error_visible: {
					true: { display: 'block' },
					false: { display: 'none' },
				},
			},
		},

		Student_field: {
			'@': {
				bog_tracker_mpit_neolo_task_assign_visible: {
					true: { display: 'flex' },
					false: { display: 'none' },
				},
			},
		},

		Actions: {
			display: 'flex',
			justify: { content: 'flex-end' },
			gap: '0.625rem',
			margin: { top: '0.5rem' },
		},

	})

}
