namespace $.$$ {

	export class $bog_tracker_profile_page extends $.$bog_tracker_profile_page {

		/** Get profile if exists (reactive read). No @$mol_mem — returns Giper Baza pawn. */
		profile_existing() {
			return this.store().registry().Profile()?.remote() ?? null
		}

		/** Create profile atomically */
		@ $mol_action
		profile_ensure() {
			const existing = this.profile_existing()
			if( existing ) return existing
			const link = this.store().registry().Profile( 'auto' )
			if( !link ) return null
			return link.ensure( null )
		}

		@ $mol_mem
		override name( next?: string ) {
			if( next !== undefined ) {
				const profile = this.profile_ensure()
				profile?.name( 'auto' )?.val( next )
				return next
			}
			return this.profile_existing()?.name()?.val() ?? ''
		}

		@ $mol_mem
		override role( next?: any ) {
			if( next !== undefined ) {
				const profile = this.profile_ensure()
				profile?.role( 'auto' )?.val( next )
				return next
			}
			return ( this.profile_existing()?.role()?.val() ?? 'student' ) as any
		}

		@ $mol_action
		back_click( next?: any ) {
			if( next === undefined ) return null
			this.$.$mol_state_arg.value( 'screen', 'home' )
			return next
		}

	}

}
