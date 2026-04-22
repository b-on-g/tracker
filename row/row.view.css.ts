namespace $.$$ {

	$mol_style_define( $bog_tracker_row, {
		display: 'flex',
		flex: { direction: 'row' },
		alignItems: 'center',
		gap: $mol_gap.space,
		padding: {
			top: $mol_gap.space,
			bottom: $mol_gap.space,
			left: $mol_gap.block,
			right: $mol_gap.block,
		},
		background: { color: $mol_theme.card },
		borderRadius: '0.5rem',
		box: {
			shadow: [ [ 0, '1px', '2px', 0, '#00000014' ] ],
		},

		Main: {
			flex: { grow: 1, direction: 'column' },
			alignItems: 'stretch',
			textAlign: 'left',
			gap: $mol_gap.space,
			padding: {
				top: $mol_gap.space,
				bottom: $mol_gap.space,
				left: $mol_gap.space,
				right: $mol_gap.space,
			},
			background: { color: 'transparent' },
		},

		Title_row: {
			font: { weight: 'bold' },
			color: $mol_theme.text,
		},

		Meta: {
			display: 'flex',
			flex: { direction: 'row', wrap: 'wrap' },
			gap: $mol_gap.space,
			font: { size: '0.875rem' },
			color: $mol_theme.shade,
		},

		Priority: {
			font: { size: '0.75rem', weight: 'bold' },
			padding: {
				top: '0.125rem',
				bottom: '0.125rem',
				left: $mol_gap.space,
				right: $mol_gap.space,
			},
			borderRadius: '0.25rem',
			color: $mol_theme.card,
			background: { color: $mol_theme.shade },
			textTransform: 'uppercase',
			whiteSpace: 'nowrap',
		},

		'@': {
			'bog_tracker_row_overdue': {
				true: {
					Deadline: {
						color: '#c62828',
						font: { weight: 'bold' },
					},
				},
			},
			'bog_tracker_row_priority': {
				high: {
					Priority: {
						background: { color: '#c62828' },
						color: '#ffffff',
					},
				},
				medium: {
					Priority: {
						background: { color: '#f9a825' },
						color: '#ffffff',
					},
				},
				low: {
					Priority: {
						background: { color: '#43a047' },
						color: '#ffffff',
					},
				},
			},
		},
	} )

}
