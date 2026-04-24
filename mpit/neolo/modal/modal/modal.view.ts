namespace $.$$ {

	export class $bog_tracker_mpit_neolo_modal_modal extends $.$bog_tracker_mpit_neolo_modal_modal {

		@ $mol_action
		override backdrop_click( next?: any ): any {
			if( next === undefined ) return null
			// Close only when click originates on backdrop (event.target === currentTarget)
			const ev = next as Event | undefined
			if( ev && ev.target === ev.currentTarget ) {
				this.close( null as any )
			}
			return null
		}

	}

}
