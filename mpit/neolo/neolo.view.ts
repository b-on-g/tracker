namespace $.$$ {

	export class $bog_tracker_mpit_neolo extends $.$bog_tracker_mpit_neolo {

		profile(): $bog_tracker_mpit_neolo_user | null {
			try {
				return this.store().profile()
			} catch( e ) {
				if( e instanceof Promise ) $mol_fail_hidden( e )
				return null
			}
		}

		override active_view() {
			const profile = this.profile()
			if( !profile ) return this.Auth() as any
			const role = profile.role()?.val() ?? ''
			if( role === 'teacher' ) return this.Teacher() as any
			if( role === 'parent' ) return this.Parent() as any
			return this.Student() as any
		}

	}

}
