namespace $ {

	const t = $bog_tracker_mpit_neolo_tokens

	$mol_style_define( $bog_tracker_mpit_neolo_parent_child, {
		display: 'flex',
		flex: { direction: 'column', grow: 1 },
		gap: '16px',
		color: t.g0,

		Back_btn: {
			align: { self: 'flex-start' },
			background: { color: '#ffffff1a' },
			color: t.g0,
			padding: { top: '8px', bottom: '8px', left: '14px', right: '14px' },
			borderRadius: '10px',
			font: { weight: 'bold' },
		},

		Header: {
			display: 'flex',
			align: { items: 'center' },
			gap: '16px',
			padding: { top: '16px', bottom: '16px', left: '20px', right: '20px' },
			background: { color: '#ffffff1a' },
			borderRadius: '16px',
		},

		Avatar: {
			width: '72px',
			height: '72px',
			borderRadius: '999px',
			background: {
				image: [[ `linear-gradient(135deg, ${ t.p1 }, ${ t.p2 })` ]],
			},
			color: t.g0,
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
			font: {
				size: '32px',
				weight: 'bold',
			},
			flex: { shrink: 0 },
		},

		Info: {
			display: 'flex',
			flex: { direction: 'column', grow: 1 },
			gap: '4px',
			minWidth: 0,
		},

		Name: {
			font: {
				size: '22px',
				weight: 'bold',
			},
		},

		Meta: {
			font: { size: '13px' },
			color: '#ffffffb3',
		},

		Create_task_btn: {
			background: { color: t.g0 },
			color: t.p2,
			padding: { top: '10px', bottom: '10px', left: '18px', right: '18px' },
			borderRadius: '12px',
			font: { weight: 'bold' },
		},

		Stats: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
			gap: '10px',
		},

		Section_title: {
			font: {
				size: '18px',
				weight: 'bold',
			},
			color: t.g0,
			padding: { top: '6px' },
		},

		Tasks_list: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '8px',
		},

		Task_empty: {
			padding: { top: '28px', bottom: '28px', left: '16px', right: '16px' },
			background: { color: '#ffffff12' },
			borderRadius: '14px',
			color: '#ffffffa6',
			textAlign: 'center',
		},

	})

	$mol_style_define( $bog_tracker_mpit_neolo_parent_child_stat, {
		display: 'flex',
		flex: { direction: 'column' },
		align: { items: 'center' },
		padding: { top: '14px', bottom: '14px', left: '10px', right: '10px' },
		background: { color: '#ffffff1a' },
		borderRadius: '12px',
		color: t.g0,

		Stat_num: {
			font: {
				size: '28px',
				weight: 'bold',
			},
		},

		Stat_lbl: {
			font: { size: '12px' },
			color: '#ffffffb3',
		},

		'@': {
			bog_tracker_mpit_neolo_parent_child_stat_kind: {
				done: { color: t.g4 },
				progress: { color: t.blue },
				review: { color: t.orange_text },
				overdue: { color: t.red },
				pending: { color: t.gold },
			},
		},

	})

	$mol_style_define( $bog_tracker_mpit_neolo_parent_child_task_dot, {
		width: '10px',
		height: '10px',
		minWidth: '10px',
		borderRadius: '999px',
		background: { color: t.gold },

		'@': {
			bog_tracker_mpit_neolo_parent_child_task_dot_status: {
				done: { background: { color: t.g4 } },
				overdue: { background: { color: t.red } },
				pending: { background: { color: t.gold } },
				progress: { background: { color: t.blue } },
				review: { background: { color: t.orange } },
				rejected: { background: { color: t.red } },
			},
		},

	})

	$mol_style_define( $bog_tracker_mpit_neolo_parent_child_task_row, {
		display: 'flex',
		align: { items: 'center' },
		gap: '12px',
		padding: { top: '12px', bottom: '12px', left: '14px', right: '14px' },
		background: { color: '#ffffff1a' },
		borderRadius: '12px',
		color: t.g0,

		Info: {
			display: 'flex',
			flex: { direction: 'column', grow: 1 },
			gap: '2px',
			minWidth: 0,
		},

		Title: {
			font: {
				size: '15px',
				weight: 'bold',
			},
			whiteSpace: 'nowrap',
			textOverflow: 'ellipsis',
			overflow: { x: 'hidden' },
		},

		Meta: {
			font: { size: '12px' },
			color: '#ffffffb3',
			whiteSpace: 'nowrap',
			textOverflow: 'ellipsis',
			overflow: { x: 'hidden' },
		},

		Date_view: {
			font: { size: '13px' },
			color: '#ffffffcc',
			whiteSpace: 'nowrap',
		},

	})

}
