namespace $ {

	const t = $bog_tracker_mpit_neolo_tokens

	$mol_style_define( $bog_tracker_mpit_neolo_parent_calendar, {
		display: 'flex',
		flex: { direction: 'column', grow: 1 },
		gap: '12px',
		color: t.g0,

		Toolbar: {
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'space-between' },
			padding: { top: '10px', bottom: '10px', left: '14px', right: '14px' },
			background: { color: '#ffffff1a' },
			borderRadius: '14px',
		},

		Nav: {
			display: 'flex',
			align: { items: 'center' },
			gap: '10px',
		},

		Prev_btn: {
			background: { color: '#ffffff26' },
			color: t.g0,
			minWidth: '36px',
			height: '36px',
			padding: 0,
			borderRadius: '10px',
			font: { size: '18px', weight: 'bold' },
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
		},

		Next_btn: {
			background: { color: '#ffffff26' },
			color: t.g0,
			minWidth: '36px',
			height: '36px',
			padding: 0,
			borderRadius: '10px',
			font: { size: '18px', weight: 'bold' },
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
		},

		Month_label: {
			font: {
				size: '18px',
				weight: 'bold',
			},
			color: t.g0,
			minWidth: '180px',
			textAlign: 'center',
		},

		Weekdays: {
			display: 'grid',
			gridTemplateColumns: 'repeat(7, 1fr)',
			gap: '4px',
			padding: { top: '4px', bottom: '4px', left: '4px', right: '4px' },

			$mol_view: {
				font: { size: '12px', weight: 'bold' },
				color: '#ffffffb3',
				textAlign: 'center',
			},
		},

		Grid: {
			display: 'grid',
			gridTemplateColumns: 'repeat(7, 1fr)',
			gap: '4px',
		},

		Bottom: {
			display: 'grid',
			gridTemplateColumns: '1fr 1fr',
			gap: '12px',
		},

		Selected_info: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '8px',
			padding: { top: '14px', bottom: '14px', left: '16px', right: '16px' },
			background: { color: '#ffffff1a' },
			borderRadius: '14px',
		},

		Upcoming_info: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '8px',
			padding: { top: '14px', bottom: '14px', left: '16px', right: '16px' },
			background: { color: '#ffffff1a' },
			borderRadius: '14px',
		},

		Selected_title: {
			font: { size: '16px', weight: 'bold' },
		},

		Upcoming_title: {
			font: { size: '16px', weight: 'bold' },
		},

		Selected_date_label: {
			font: { size: '15px' },
			color: '#ffffffcc',
		},

		Selected_empty: {
			padding: { top: '12px', bottom: '12px', left: '14px', right: '14px' },
			background: { color: '#ffffff12' },
			borderRadius: '10px',
			color: '#ffffffa6',
			font: { size: '14px' },
		},

		Upcoming_empty: {
			padding: { top: '10px', bottom: '10px', left: '14px', right: '14px' },
			color: '#ffffff80',
			font: { size: '14px' },
		},

	})

	$mol_style_define( $bog_tracker_mpit_neolo_parent_calendar_day, {
		display: 'flex',
		flex: { direction: 'column' },
		align: { items: 'center' },
		justify: { content: 'space-between' },
		padding: { top: '6px', bottom: '6px', left: '4px', right: '4px' },
		minHeight: '52px',
		background: { color: '#ffffff12' },
		borderRadius: '8px',
		color: t.g0,
		font: { size: '14px' },
		cursor: 'pointer',

		Day_number: {
			font: { size: '14px', weight: 'bold' },
		},

		Day_badge: {
			font: { size: '10px', weight: 'bold' },
			color: t.p2,
			background: { color: t.gold },
			padding: { top: '1px', bottom: '1px', left: '6px', right: '6px' },
			borderRadius: '999px',
			minWidth: '18px',
			textAlign: 'center',
		},

		'@': {
			bog_tracker_mpit_neolo_parent_calendar_day_state: {
				empty: { visibility: 'hidden', background: { color: 'transparent' } },
				day: {},
				today: {
					background: { color: '#ffffff33' },
					border: { width: '2px', style: 'solid', color: t.gold },
				},
				selected: {
					background: { color: t.gold },
					color: t.p2,
				},
			},
		},

	})

}
