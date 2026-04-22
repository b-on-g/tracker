namespace $.$$ {

	export class $bog_tracker_app extends $.$bog_tracker_app {

		@ $mol_mem
		screen( next?: string ) {
			return this.$.$mol_state_arg.value( 'screen', next ) ?? 'home'
		}

		@ $mol_mem
		screen_body() {
			const pages = this.pages()
			const screen = this.screen()
			const page = ( pages as any )[ screen ]
			return page ? [ page ] : [ pages.home ]
		}

		/** Total tasks in registry */
		@ $mol_mem
		all_tasks() {
			const registry = this.store().registry()
			if( !registry ) return []
			const list = registry.Tasks()
			if( !list ) return []
			return list.remote_list() ?? []
		}

		@ $mol_mem
		override total_count() {
			return this.all_tasks().length
		}

		@ $mol_mem
		override done_count() {
			return this.all_tasks().filter( t => t.done()?.val() === true ).length
		}

	}

}
