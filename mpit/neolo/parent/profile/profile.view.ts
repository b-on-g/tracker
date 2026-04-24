namespace $.$$ {

	export class $bog_tracker_mpit_neolo_parent_profile extends $.$bog_tracker_mpit_neolo_parent_profile {

		@ $mol_mem
		children_list(): readonly $bog_tracker_mpit_neolo_parent_child_summary[] {
			return this.children() as readonly $bog_tracker_mpit_neolo_parent_child_summary[]
		}

		@ $mol_mem
		override child_ids(): readonly string[] {
			return this.children_list().map( c => String( c.id ) )
		}

		has_children(): boolean {
			return this.children_list().length > 0
		}

		@ $mol_mem
		profile_surname_or_dash(): string {
			return this.profile_surname() || '—'
		}

		@ $mol_mem
		profile_username_at(): string {
			const u = this.profile_username()
			return u ? '@' + u : ''
		}

		@ $mol_mem_key
		child( id: string ): $bog_tracker_mpit_neolo_parent_child_summary | null {
			return this.children_list().find( c => String( c.id ) === id ) ?? null
		}

		@ $mol_mem_key
		override child_initial( id: string ): string {
			const c = this.child( id )
			return ( c?.name?.[ 0 ] ?? '?' ).toUpperCase()
		}

		@ $mol_mem_key
		override child_name( id: string ): string {
			const c = this.child( id )
			if( !c ) return ''
			return `${ c.name } ${ c.surname }`.trim()
		}

		@ $mol_mem_key
		override child_meta( id: string ): string {
			const c = this.child( id )
			if( !c ) return ''
			return `@${ c.username } · ID: ${ c.id }`
		}

		@ $mol_action
		override child_remove( id: string, next?: any ): any {
			if( next !== undefined ) {
				if( !confirm( 'Удалить ребёнка из списка?' ) ) return null
				this.remove_child( id )
			}
			return null
		}

		@ $mol_mem
		override children_rows(): readonly any[] {
			if( !this.has_children() ) return [ this.Children_empty() as any ]
			return this.child_ids().map( id => this.Child_row( id ) as any )
		}

	}

	export class $bog_tracker_mpit_neolo_parent_profile_row extends $.$bog_tracker_mpit_neolo_parent_profile_row {}

	export class $bog_tracker_mpit_neolo_parent_profile_child_row extends $.$bog_tracker_mpit_neolo_parent_profile_child_row {}

}
