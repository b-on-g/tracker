namespace $.$$ {

	export class $bog_tracker_mpit_neolo_student extends $.$bog_tracker_mpit_neolo_student {

		// ────────────────── screen state ──────────────────

		@ $mol_mem
		override screen( next?: string ): string {
			return super.screen( next ) ?? 'tasks'
		}

		@ $mol_mem
		override is_tasks() {
			return this.screen() === 'tasks'
		}

		@ $mol_mem
		override is_calendar() {
			return this.screen() === 'calendar'
		}

		@ $mol_mem
		override is_stats() {
			return this.screen() === 'stats'
		}

		// ────────────────── selected date / month ──────────────────

		@ $mol_mem
		override selected_date( next?: string ): string {
			const cur = super.selected_date( next )
			if( cur ) return cur
			// today iso
			return new Date().toISOString().slice( 0, 10 )
		}

		@ $mol_mem
		override view_month( next?: number ): number {
			const cur = super.view_month( next )
			if( cur !== undefined && cur !== null ) return cur
			return new Date().getMonth()
		}

		@ $mol_mem
		override view_year( next?: number ): number {
			const cur = super.view_year( next )
			if( cur !== undefined && cur !== null && cur > 0 ) return cur
			return new Date().getFullYear()
		}

		// ────────────────── invitations badge ──────────────────

		@ $mol_mem
		override invitations_count() {
			const invs = this.store().invitations_all()
			let count = 0
			for( const inv of invs ) {
				const s = inv.status()?.val() ?? 'pending'
				if( s === 'pending' ) count++
			}
			return count
		}

		// ────────────────── actions (overrides of click? props) ──────────────────

		@ $mol_action
		override logout( next?: any ): any {
			if( next !== undefined ) {
				// Minimum: delegate to a parent via hook method; default no-op.
				// Parent will typically override logout() to clear Profile pointer.
			}
			return null
		}

		@ $mol_action
		override add_task_click( next?: any ): any {
			if( next !== undefined ) {
				this.screen( 'calendar' )
				// Let parent-level modal opener handle; emit via create_click()
				this.create_click( {} )
			}
			return null
		}

		@ $mol_action
		override prev_month( next?: any ): any {
			if( next !== undefined ) {
				let m = this.view_month() - 1
				let y = this.view_year()
				if( m < 0 ) { m = 11; y -= 1 }
				this.view_month( m )
				this.view_year( y )
			}
			return null
		}

		@ $mol_action
		override next_month( next?: any ): any {
			if( next !== undefined ) {
				let m = this.view_month() + 1
				let y = this.view_year()
				if( m > 11 ) { m = 0; y += 1 }
				this.view_month( m )
				this.view_year( y )
			}
			return null
		}

		@ $mol_action
		override create_click( next?: any ): any {
			// Parent/root module should override to actually open a modal.
			return null
		}

		@ $mol_action
		override open_task( id: string, next?: any ): any {
			// Parent/root module should override to actually open a view modal.
			return null
		}

		@ $mol_action
		override open_about( next?: any ): any {
			return null
		}

		@ $mol_action
		override open_terms( next?: any ): any {
			return null
		}

		@ $mol_action
		override select_day( id: string, next?: any ): any {
			if( next !== undefined ) {
				this.selected_date( id )
			}
			return null
		}

	}

}
