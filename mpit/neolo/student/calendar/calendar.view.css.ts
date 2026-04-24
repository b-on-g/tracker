namespace $.$$ {

	const t = $bog_tracker_mpit_neolo_tokens

	$mol_style_define( $bog_tracker_mpit_neolo_student_calendar, {

		display: 'flex',
		flex: { direction: 'column' },
		minHeight: '100%',
		borderRadius: '22px',
		padding: { top: '22px', bottom: '22px', left: '24px', right: '24px' },
		overflow: { x: 'hidden', y: 'auto' },
		background: { color: t.b0 },
		color: t.g0,
		gap: '12px',

		Title: {
			display: 'block',
			font: { size: '36px', weight: 800 },
			margin: { bottom: '16px' },
		},

		Calendar_layout: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '22px',
		},

		Toolbar: {
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'space-between' },
			gap: '12px',
			margin: { bottom: '14px' },
		},

		Nav: {
			display: 'flex',
			align: { items: 'center' },
			gap: '14px',
		},

		Prev_btn: {
			background: { color: 'transparent' },
			color: t.g4,
			font: { size: '34px' },
			padding: { left: '4px', right: '4px' },
		},

		Next_btn: {
			background: { color: 'transparent' },
			color: t.g4,
			font: { size: '34px' },
			padding: { left: '4px', right: '4px' },
		},

		Month_label: {
			display: 'inline-flex',
			font: { size: '22px', weight: 800 },
			color: t.g4,
		},

		Create_btn: {
			background: { color: t.g4 },
			color: t.b0,
			padding: { top: '11px', bottom: '11px', left: '16px', right: '16px' },
			borderRadius: '12px',
			font: { weight: 800 },
		},

		Grid: {
			display: 'grid',
			gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
			gap: '8px',
		},

		Weekday: {
			font: { size: '13px', weight: 700 },
			color: t.g4,
			padding: { bottom: '4px' },
			textAlign: 'center',
		},

		Bottom: {
			display: 'grid',
			gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)',
			gap: '16px',
		},

		Day_box: {
			display: 'flex',
			flex: { direction: 'column' },
			padding: '18px',
			borderRadius: '16px',
			background: { color: '#ffffff0f' },
			border: { width: '1px', style: 'solid', color: '#ffffff21' },
			gap: '8px',
		},

		Upcoming_box: {
			display: 'flex',
			flex: { direction: 'column' },
			padding: '18px',
			borderRadius: '16px',
			background: { color: '#ffffff0f' },
			border: { width: '1px', style: 'solid', color: '#ffffff21' },
			gap: '8px',
		},

		Day_box_title: {
			font: { size: '18px', weight: 800 },
			color: t.g4,
			margin: { bottom: '12px' },
		},

		Upcoming_title: {
			font: { size: '18px', weight: 800 },
			color: t.g4,
			margin: { bottom: '12px' },
		},

		Selected_label: {
			font: { size: '15px', weight: 700 },
			color: '#ffffffb3',
			margin: { bottom: '4px' },
		},

		Day_list: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '10px',
		},

		Upcoming_list: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '10px',
		},

		Empty_note: {
			padding: '14px',
			borderRadius: '12px',
			background: { color: '#ffffff12' },
			color: '#ffffffa6',
			font: { size: '14px' },
		},

		'@': {
			bog_tracker_mpit_neolo_student_calendar_empty: {
				true: { display: 'flex' },
				false: { display: 'none' },
			},
		},

	} )

	$mol_style_define( $bog_tracker_mpit_neolo_student_calendar_cell, {

		display: 'flex',
		flex: { direction: 'column' },
		align: { items: 'flex-start' },
		justify: { content: 'space-between' },
		minHeight: '82px',
		gap: '4px',
		padding: '9px',
		borderRadius: '16px',
		background: { color: '#ffffff0d' },
		border: { width: '1px', style: 'solid', color: 'transparent' },
		color: '#ffffffd9',
		textAlign: 'left',

		Day_number: {
			font: { size: '18px', weight: 800 },
			color: '#ffffffd9',
		},

		Badge: {
			display: 'inline-flex',
			align: { items: 'center', self: 'flex-end' },
			justify: { content: 'center' },
			minWidth: '24px',
			minHeight: '24px',
			padding: { left: '6px', right: '6px' },
			borderRadius: '999px',
			background: { color: t.g4 },
			color: t.b0,
			font: { size: '12px', weight: 800 },
		},

		'@': {
			bog_tracker_mpit_neolo_student_calendar_cell_selected: {
				true: {
					background: { color: '#2ecc5a2e' },
					border: { width: '1px', style: 'solid', color: t.g4 },
				},
			},
			bog_tracker_mpit_neolo_student_calendar_cell_today: {
				true: {
					color: t.g4,
				},
			},
			bog_tracker_mpit_neolo_student_calendar_cell_empty: {
				true: {
					visibility: 'hidden',
				},
			},
			bog_tracker_mpit_neolo_student_calendar_cell_has_count: {
				false: {
					display: 'none',
				},
			},
		},

	} )

	$mol_style_define( $bog_tracker_mpit_neolo_student_calendar_day_task, {

		display: 'grid',
		gridTemplateColumns: 'auto minmax(0, 1fr)',
		gap: '12px',
		align: { items: 'start' },
		minWidth: '100%',
		padding: { top: '12px', bottom: '12px', left: '14px', right: '14px' },
		borderRadius: '13px',
		background: { color: '#fffffff2' },
		color: t.b0,
		textAlign: 'left',

		Time_chip: {
			display: 'inline-flex',
			align: { items: 'center' },
			padding: { top: '5px', bottom: '5px', left: '9px', right: '9px' },
			borderRadius: '999px',
			background: { color: t.g4 },
			color: t.b0,
			font: { size: '12px', weight: 800 },
			whiteSpace: 'nowrap',
		},

		Inner: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '3px',
			minWidth: 0,
		},

		Title_row: {
			font: { size: '15px', weight: 800 },
		},

		Meta_row: {
			font: { size: '12px' },
			color: t.b3,
		},

	} )

	$mol_style_define( $bog_tracker_mpit_neolo_student_calendar_upcoming_row, {

		display: 'flex',
		align: { items: 'center' },
		gap: '12px',
		font: { size: '15px' },

		Dot: {
			minWidth: '10px',
			minHeight: '10px',
			borderRadius: '999px',
			background: { color: t.g4 },
			flex: { grow: 0, shrink: 0 },
		},

		Text: {
			display: 'flex',
			align: { items: 'center' },
			gap: '4px',
			flex: { wrap: 'wrap' },
		},

		Title_btn: {
			background: { color: 'transparent' },
			color: 'inherit',
			padding: 0,
			textAlign: 'left',
			font: { weight: 700 },
		},

	} )

}
