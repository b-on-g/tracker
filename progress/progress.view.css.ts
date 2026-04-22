namespace $.$$ {

	$mol_style_define( $bog_tracker_progress, {
		display: 'flex',
		flex: { direction: 'row' },
		alignItems: 'center',
		gap: $mol_gap.space,
		padding: { left: $mol_gap.space, right: $mol_gap.space },

		Track: {
			flex: { grow: 1 },
			minWidth: '4rem',
			maxWidth: '12rem',
			height: '0.5rem',
			background: { color: $mol_theme.line },
			borderRadius: '0.25rem',
			overflow: 'hidden',
		},

		Fill: {
			height: '100%',
			background: { color: $mol_theme.current },
			transition: 'width 0.2s',
		},

		Label: {
			font: { size: '0.875rem' },
			color: $mol_theme.text,
			whiteSpace: 'nowrap',
		},
	} )

}
