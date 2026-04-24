namespace $.$$ {

	const t = $bog_tracker_mpit_neolo_tokens

	$mol_style_define( $bog_tracker_mpit_neolo_student_tasks, {

		display: 'flex',
		flex: { direction: 'column' },
		minHeight: '100%',
		borderRadius: '22px',
		padding: { top: '22px', bottom: '22px', left: '24px', right: '24px' },
		overflow: { x: 'hidden', y: 'auto' },
		background: { color: t.g4 },
		color: t.b0,
		gap: '12px',

		Title: {
			display: 'block',
			font: { size: '36px', weight: 800 },
			margin: { bottom: '16px' },
		},

		Section_title: {
			display: 'block',
			margin: { top: '20px', bottom: '12px' },
			font: { size: '20px', weight: 700 },
			color: '#00000099',
		},

		Tasks_group: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '12px',
		},

		Add_box: {
			display: 'flex',
			flex: { direction: 'column' },
			margin: { top: '22px' },
		},

		Add_title: {
			display: 'block',
			margin: { top: '20px', bottom: '12px' },
			font: { size: '20px', weight: 700 },
			color: '#00000099',
		},

		Add_trigger: {
			display: 'flex',
			align: { items: 'center' },
			gap: '14px',
			minWidth: '100%',
			padding: { top: '14px', bottom: '14px', left: '16px', right: '16px' },
			background: { color: t.g0 },
			borderRadius: '14px',
			box: {
				shadow: [ { x: 0, y: '6px', blur: '16px', spread: 0, color: '#00000017' } ],
			},
		},

		Add_icon: {
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
			minWidth: '28px',
			minHeight: '28px',
			borderRadius: '999px',
			border: { width: '2px', style: 'solid', color: t.g5 },
			color: t.g5,
			font: { size: '18px', weight: 800 },
		},

		Add_text: {
			display: 'block',
			font: { size: '14px', weight: 700 },
			color: t.g6,
		},

	} )

	$mol_style_define( $bog_tracker_mpit_neolo_student_tasks_card, {

		display: 'grid',
		gridTemplateColumns: 'auto minmax(0, 1fr) auto',
		gap: '14px',
		align: { items: 'start' },
		minWidth: '100%',
		padding: { top: '14px', bottom: '14px', left: '16px', right: '16px' },
		textAlign: 'left',
		background: { color: t.g0 },
		borderRadius: '14px',
		box: {
			shadow: [ { x: 0, y: '6px', blur: '16px', spread: 0, color: '#00000017' } ],
		},

		Bullet: {
			minWidth: '18px',
			minHeight: '18px',
			borderRadius: '999px',
			border: { width: '2.5px', style: 'solid', color: t.g5 },
			background: { color: t.g0 },
			margin: { top: '3px' },
		},

		Inner: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '4px',
			minWidth: 0,
		},

		Name: {
			font: { size: '17px', weight: 700 },
			color: t.b0,
			whiteSpace: 'normal',
			overflow: { x: 'hidden' },
			textOverflow: 'ellipsis',
		},

		Desc: {
			font: { size: '13px' },
			color: t.b3,
			whiteSpace: 'normal',
		},

		Meta_row: {
			display: 'flex',
			align: { items: 'center' },
			gap: '6px',
			flex: { wrap: 'wrap' },
			margin: { top: '4px' },
		},

		Source_badge: {
			display: 'inline-flex',
			font: { size: '11px', weight: 700 },
			padding: { top: '2px', bottom: '2px', left: '7px', right: '7px' },
			borderRadius: '999px',
			whiteSpace: 'nowrap',
		},

		Status_badge: {
			display: 'inline-flex',
			align: { items: 'center' },
			gap: '5px',
			font: { size: '12px', weight: 700 },
			padding: { top: '3px', bottom: '3px', left: '10px', right: '10px' },
			borderRadius: '999px',
			whiteSpace: 'nowrap',
		},

		Deadline: {
			font: { size: '13px', weight: 700 },
			color: t.b2,
			whiteSpace: 'nowrap',
		},

		'@': {
			bog_tracker_mpit_neolo_student_tasks_card_source: {
				'src-teacher': {
					background: { color: t.blue_soft },
					color: t.blue,
				},
				'src-parent': {
					background: { color: t.orange_soft },
					color: t.orange_text,
				},
				'src-self': {
					background: { color: t.g2 },
					color: t.g6,
				},
			},
			bog_tracker_mpit_neolo_student_tasks_card_status: {
				'status-pending': {
					background: { color: t.yellow },
					color: t.yellow_text,
				},
				'status-progress': {
					background: { color: t.blue_badge },
					color: t.blue,
				},
				'status-review': {
					background: { color: t.red_badge },
					color: t.red_badge_text,
				},
				'status-done': {
					background: { color: t.green_done_bg },
					color: t.green_done_text,
				},
				'status-rejected': {
					background: { color: t.grey_soft },
					color: t.grey_text,
				},
				'status-overdue': {
					background: { color: t.red_badge },
					color: t.red_badge_text,
				},
			},
		},

	} )

}
