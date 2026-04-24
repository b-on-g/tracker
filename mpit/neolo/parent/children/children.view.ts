namespace $.$$ {

	export class $bog_tracker_mpit_neolo_parent_children extends $.$bog_tracker_mpit_neolo_parent_children {

		@ $mol_mem
		children_list(): readonly $bog_tracker_mpit_neolo_parent_child_summary[] {
			return this.children() as readonly $bog_tracker_mpit_neolo_parent_child_summary[]
		}

		@ $mol_mem
		override child_ids(): readonly string[] {
			return this.children_list().map( c => String( c.id ) )
		}

		@ $mol_mem
		has_children(): boolean {
			return this.children_list().length > 0
		}

		@ $mol_mem
		override count_label(): string {
			const n = this.children_list().length
			const word = n === 1 ? 'ребёнок' : ( n < 5 ? 'ребёнка' : 'детей' )
			return `${ n } ${ word }`
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
			return `@${ c.username } · ${ c.school || '—' }`
		}

		/** Per-card click: routes the id up via the `open_child?val` signal. */
		@ $mol_action
		override card_open( id: string, next?: any ): any {
			if( next !== undefined ) {
				this.open_child( id )
			}
			return null
		}

		@ $mol_action
		override card_remove( id: string, next?: any ): any {
			if( next !== undefined ) {
				if( !confirm( 'Удалить ребёнка из списка?' ) ) return null
				this.remove_child( id )
			}
			return null
		}

		@ $mol_mem
		override cards(): readonly any[] {
			if( !this.has_children() ) return []
			return this.child_ids().map( id => this.Card( id ) )
		}

		@ $mol_mem
		override rows(): readonly any[] {
			if( !this.has_children() ) return [ this.Empty() as any ]
			return [ this.Header_bar() as any, this.Grid() as any ]
		}

	}

	export class $bog_tracker_mpit_neolo_parent_children_card extends $.$bog_tracker_mpit_neolo_parent_children_card {}

}
