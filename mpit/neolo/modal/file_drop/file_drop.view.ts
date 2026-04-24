namespace $.$$ {

	export class $bog_tracker_mpit_neolo_modal_file_drop extends $.$bog_tracker_mpit_neolo_modal_file_drop {

		@ $mol_mem
		override file( next?: File | null ): File | null {
			return super.file( next as any ) as File | null ?? null
		}

		@ $mol_mem
		override has_file() {
			return this.file() != null
		}

		@ $mol_mem
		override file_name() {
			return this.file()?.name ?? ''
		}

		@ $mol_mem
		override drag( next?: boolean ): boolean {
			return super.drag( next ) ?? false
		}

		@ $mol_mem
		Zone() {
			return new this.$.$bog_tracker_mpit_neolo_modal_file_drop_zone()
		}

		@ $mol_mem
		Attached() {
			return new this.$.$bog_tracker_mpit_neolo_modal_file_drop_attached()
		}

		@ $mol_mem
		override Zone_container(): any {
			if( this.has_file() ) return null
			const zone = this.Zone()
			zone.label = () => this.label()
			zone.drag = () => this.drag()
			zone.drag_over = ( next?: any ) => this.drag_over( next )
			zone.drag_leave = ( next?: any ) => this.drag_leave( next )
			zone.drop = ( next?: any ) => this.drop( next )
			zone.input_change = ( next?: any ) => this.input_change( next )
			return zone
		}

		@ $mol_mem
		override Attached_container(): any {
			if( !this.has_file() ) return null
			const att = this.Attached()
			att.file_name = () => this.file_name()
			att.remove = ( next?: any ) => this.remove( next )
			return att
		}

		@ $mol_action
		override drag_over( next?: any ): any {
			if( next === undefined ) return null
			const ev = next as DragEvent
			ev.preventDefault()
			this.drag( true )
			return null
		}

		@ $mol_action
		override drag_leave( next?: any ): any {
			if( next === undefined ) return null
			this.drag( false )
			return null
		}

		@ $mol_action
		override drop( next?: any ): any {
			if( next === undefined ) return null
			const ev = next as DragEvent
			ev.preventDefault()
			this.drag( false )
			const file = ev.dataTransfer?.files?.[ 0 ]
			if( file ) this.file( file )
			return null
		}

		@ $mol_action
		override input_change( next?: any ): any {
			if( next === undefined ) return null
			const ev = next as Event
			const input = ev.target as HTMLInputElement
			const file = input.files?.[ 0 ]
			if( file ) this.file( file )
			return null
		}

		@ $mol_action
		override remove( next?: any ): any {
			if( next === undefined ) return null
			this.file( null )
			return null
		}

	}

	export class $bog_tracker_mpit_neolo_modal_file_drop_zone extends $.$bog_tracker_mpit_neolo_modal_file_drop_zone {}
	export class $bog_tracker_mpit_neolo_modal_file_drop_attached extends $.$bog_tracker_mpit_neolo_modal_file_drop_attached {}

}
