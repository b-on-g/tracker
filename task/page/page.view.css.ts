namespace $.$$ {

	$mol_style_define( $bog_tracker_task_page, {
		Body_content: {
			gap: $mol_gap.block,
			padding: $mol_gap.block,
		},

		Meta_block: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: $mol_gap.space,
			padding: $mol_gap.block,
			background: { color: $mol_theme.card },
			borderRadius: '0.5rem',
		},

		Comments_list: {
			gap: $mol_gap.space,
		},

		Comment_row: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: $mol_gap.space,
			padding: $mol_gap.block,
			background: { color: $mol_theme.card },
			borderRadius: '0.5rem',
		},

		Comment_author: {
			font: { weight: 'bold', size: '0.875rem' },
			color: $mol_theme.text,
		},

		Comment_date: {
			font: { size: '0.75rem' },
			color: $mol_theme.shade,
		},

		Comment_form: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: $mol_gap.space,
			padding: $mol_gap.block,
		},

		Missing: {
			padding: $mol_gap.block,
			textAlign: 'center',
			color: $mol_theme.shade,
		},
	} )

}
