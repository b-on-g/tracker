namespace $.$$ {

	export class $bog_tracker_app extends $.$bog_tracker_app {

		@ $mol_mem
		screen( next?: string ) {
			return $mol_state_arg.value( 'screen', next ) ?? 'home'
		}

		@ $mol_mem
		screen_body() {
			const pages = this.pages()
			const screen = this.screen()
			const page = ( pages as any )[ screen ]
			return page ? [ page ] : []
		}

	}

}
