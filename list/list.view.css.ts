namespace $.$$ {

	$mol_style_define( $bog_tracker_list, {
		Head_bar: {
			display: 'flex',
			flex: { direction: 'row', wrap: 'wrap' },
			alignItems: 'center',
			gap: $mol_gap.block,
			padding: {
				top: $mol_gap.space,
				bottom: $mol_gap.space,
				left: $mol_gap.block,
				right: $mol_gap.block,
			},
		},

		Rows_list: {
			gap: $mol_gap.space,
			padding: {
				top: $mol_gap.space,
				bottom: $mol_gap.block,
				left: $mol_gap.block,
				right: $mol_gap.block,
			},
		},

		Empty: {
			padding: $mol_gap.block,
			textAlign: 'center',
			color: $mol_theme.shade,
		},
	} )

}
