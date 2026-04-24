namespace $.$$ {

	const t = $bog_tracker_mpit_neolo_tokens

	$mol_style_define( $bog_tracker_mpit_neolo_student_sidebar, {

		display: 'flex',
		flex: { direction: 'column' },
		justify: { content: 'space-between' },
		align: { items: 'center' },
		background: { color: t.g2 },
		borderRadius: '22px',
		padding: { top: '18px', bottom: '18px', left: '12px', right: '12px' },

		Stack: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '16px',
			minWidth: '100%',
		},

		Footer: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '6px',
			minWidth: '100%',
			padding: { left: '4px', right: '4px' },
		},

		Item_calendar: {
			position: 'relative',
			display: 'flex',
			flex: { direction: 'column' },
			align: { items: 'center' },
			gap: '8px',
			padding: { top: '8px', bottom: '8px', left: '4px', right: '4px' },
			background: { color: 'transparent' },
			borderRadius: '16px',
		},

		Item_tasks: {
			position: 'relative',
			display: 'flex',
			flex: { direction: 'column' },
			align: { items: 'center' },
			gap: '8px',
			padding: { top: '8px', bottom: '8px', left: '4px', right: '4px' },
			background: { color: 'transparent' },
			borderRadius: '16px',
		},

		Item_cabinet: {
			position: 'relative',
			display: 'flex',
			flex: { direction: 'column' },
			align: { items: 'center' },
			gap: '8px',
			padding: { top: '8px', bottom: '8px', left: '4px', right: '4px' },
			background: { color: 'transparent' },
			borderRadius: '16px',
		},

		Circle_calendar: {
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
			minWidth: '64px',
			minHeight: '64px',
			borderRadius: '999px',
			font: { size: '28px' },
			background: { color: t.b0 },
			color: t.g0,
		},

		Circle_tasks: {
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
			minWidth: '64px',
			minHeight: '64px',
			borderRadius: '999px',
			font: { size: '28px' },
			background: { color: t.g4 },
			color: t.b0,
		},

		Circle_cabinet: {
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
			minWidth: '64px',
			minHeight: '64px',
			borderRadius: '999px',
			font: { size: '28px' },
			background: { color: t.g6 },
			color: t.g0,
		},

		Label_calendar: {
			font: { size: '13px', weight: 700 },
			textAlign: 'center',
			color: t.b1,
		},

		Label_tasks: {
			font: { size: '13px', weight: 700 },
			textAlign: 'center',
			color: t.b1,
		},

		Label_cabinet: {
			font: { size: '13px', weight: 700 },
			textAlign: 'center',
			color: t.b1,
		},

		Badge: {
			position: 'absolute',
			top: '4px',
			right: '8px',
			minWidth: '20px',
			minHeight: '20px',
			borderRadius: '999px',
			background: { color: '#e74c3c' },
			color: t.g0,
			font: { size: '11px', weight: 800 },
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
			padding: { left: '4px', right: '4px' },
		},

		About_btn: {
			display: 'flex',
			justify: { content: 'center' },
			minWidth: '100%',
			background: { color: 'transparent' },
			padding: { top: '8px', bottom: '8px', left: '6px', right: '6px' },
			borderRadius: '10px',
			font: { size: '11px', weight: 700 },
			color: t.b2,
			textAlign: 'center',
		},

		Terms_btn: {
			display: 'flex',
			justify: { content: 'center' },
			minWidth: '100%',
			background: { color: 'transparent' },
			padding: { top: '8px', bottom: '8px', left: '6px', right: '6px' },
			borderRadius: '10px',
			font: { size: '11px', weight: 700 },
			color: t.b2,
			textAlign: 'center',
		},

		'@': {
			bog_tracker_mpit_neolo_student_sidebar_active: {
				true: {
					background: { color: '#ffffff99' },
				},
			},
			bog_tracker_mpit_neolo_student_sidebar_badge_visible: {
				true: { display: 'flex' },
				false: { display: 'none' },
			},
		},

	} )

}
