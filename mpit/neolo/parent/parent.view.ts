namespace $.$$ {

	/** Serialized summary of a child stored as a single string inside parent's children_ids list.
	 * Format: "id|username|name|surname|school" (school may be empty). */
	export type $bog_tracker_mpit_neolo_parent_child_summary = {
		id: number
		username: string
		name: string
		surname: string
		school: string
	}

	function encode_child( c: $bog_tracker_mpit_neolo_parent_child_summary ): string {
		return [
			String( c.id ),
			c.username,
			c.name,
			c.surname,
			c.school,
		].join( '|' )
	}

	function decode_child( raw: string ): $bog_tracker_mpit_neolo_parent_child_summary | null {
		const parts = raw.split( '|' )
		if( parts.length < 2 ) return null
		const id = Number( parts[ 0 ] )
		if( !Number.isFinite( id ) ) return null
		return {
			id,
			username: parts[ 1 ] ?? '',
			name: parts[ 2 ] ?? '',
			surname: parts[ 3 ] ?? '',
			school: parts[ 4 ] ?? '',
		}
	}

	export class $bog_tracker_mpit_neolo_parent extends $.$bog_tracker_mpit_neolo_parent {

		@ $mol_mem
		override screen_id( next?: string ): string {
			return super.screen_id( next ) ?? 'children'
		}

		@ $mol_mem
		override open_child_id( next?: string ): string {
			return super.open_child_id( next ) ?? ''
		}

		@ $mol_mem
		override add_child_modal_open( next?: boolean ): boolean {
			return super.add_child_modal_open( next ) ?? false
		}

		@ $mol_mem
		override add_child_id( next?: string ): string {
			return super.add_child_id( next ) ?? ''
		}

		@ $mol_mem
		override add_child_result( next?: string ): string {
			return super.add_child_result( next ) ?? ''
		}

		@ $mol_mem
		override add_child_result_kind( next?: string ): string {
			return super.add_child_result_kind( next ) ?? ''
		}

		/** Current parent profile, via store. Primitive return — safe to memoize. */
		@ $mol_mem
		profile_name(): string {
			return this.store().profile()?.name()?.val() ?? ''
		}

		@ $mol_mem
		profile_surname(): string {
			return this.store().profile()?.surname()?.val() ?? ''
		}

		@ $mol_mem
		profile_username(): string {
			return this.store().profile()?.username()?.val() ?? ''
		}

		@ $mol_mem
		profile_id(): string {
			const id = this.store().profile()?.user_id()?.val()
			return id !== null && id !== undefined ? String( id ) : ''
		}

		/** Raw list of children records from the profile's children_ids list. */
		@ $mol_mem
		children_raw_list(): readonly string[] {
			const profile = this.store().profile()
			if( !profile ) return []
			return ( profile.children_ids()?.items() ?? [] ).filter( ( s ): s is string => !!s )
		}

		@ $mol_mem
		children_summaries(): readonly $bog_tracker_mpit_neolo_parent_child_summary[] {
			const out: $bog_tracker_mpit_neolo_parent_child_summary[] = []
			for( const raw of this.children_raw_list() ) {
				const c = decode_child( raw )
				if( c ) out.push( c )
			}
			return out
		}

		@ $mol_mem
		override side_id(): string {
			const id = this.profile_id()
			return id ? 'ID: ' + id : ''
		}

		@ $mol_mem
		override screen_title(): string {
			const id = this.open_child_id()
			if( id ) {
				const c = this.children_summaries().find( ch => String( ch.id ) === id )
				return c ? `${ c.name } ${ c.surname }`.trim() : 'Ребёнок'
			}
			const s = this.screen_id()
			if( s === 'calendar' ) return 'Календарь заданий'
			if( s === 'profile' ) return 'Личный кабинет'
			return 'Мои дети'
		}

		@ $mol_mem
		override side_children_selected(): boolean {
			return this.screen_id() === 'children'
		}

		@ $mol_mem
		override side_calendar_selected(): boolean {
			return this.screen_id() === 'calendar'
		}

		@ $mol_mem
		override side_profile_selected(): boolean {
			return this.screen_id() === 'profile'
		}

		@ $mol_action
		override goto_children( next?: any ): any {
			if( next !== undefined ) {
				this.screen_id( 'children' )
				this.open_child_id( '' )
			}
			return null
		}

		@ $mol_action
		override goto_calendar( next?: any ): any {
			if( next !== undefined ) {
				this.screen_id( 'calendar' )
				this.open_child_id( '' )
			}
			return null
		}

		@ $mol_action
		override goto_profile( next?: any ): any {
			if( next !== undefined ) {
				this.screen_id( 'profile' )
				this.open_child_id( '' )
			}
			return null
		}

		@ $mol_action
		override logout_click( next?: any ): any {
			if( next !== undefined ) {
				// Clear Auth (Giper Baza cryptographic identity) and reload to re-enter auth flow.
				try {
					localStorage.clear()
				} catch {}
				location.reload()
			}
			return null
		}

		/** Signal called by children sub-view when a child card is clicked.
		 * Writes the id to open_child_id. */
		@ $mol_action
		override children_open_child( next?: string ): string {
			if( next !== undefined && next ) {
				this.open_child_id( next )
				this.screen_id( 'children' )
			}
			return ''
		}

		/** Signal called by children / profile sub-views when a child is removed. */
		@ $mol_action
		override children_remove_child( next?: string ): string {
			if( next !== undefined && next ) {
				this.do_remove_child( next )
			}
			return ''
		}

		do_remove_child( child_id: string ): void {
			const profile = this.store().profile()
			if( !profile ) return
			const list = profile.children_ids( null )
			if( !list ) return
			for( const raw of this.children_raw_list() ) {
				const c = decode_child( raw )
				if( c && String( c.id ) === child_id ) {
					list.cut( raw )
				}
			}
		}

		@ $mol_action
		override back_to_children( next?: any ): any {
			if( next !== undefined ) {
				this.open_child_id( '' )
				this.screen_id( 'children' )
			}
			return null
		}

		@ $mol_action
		override open_add_child_modal( next?: any ): any {
			if( next !== undefined ) {
				this.add_child_id( '' )
				this.add_child_result( '' )
				this.add_child_result_kind( '' )
				this.add_child_modal_open( true )
			}
			return null
		}

		@ $mol_action
		override add_child_close( next?: any ): any {
			if( next !== undefined ) {
				this.add_child_modal_open( false )
			}
			return null
		}

		@ $mol_action
		override add_child_submit( next?: any ): any {
			if( next === undefined ) return null
			this.do_add_child()
			return null
		}

		@ $mol_action
		do_add_child(): void {
			const raw = this.add_child_id().trim()
			if( !raw ) {
				this.add_child_result( 'Введите ID ребёнка' )
				this.add_child_result_kind( 'error' )
				return
			}
			const id = Number( raw )
			if( !Number.isFinite( id ) || id <= 0 ) {
				this.add_child_result( 'Некорректный ID' )
				this.add_child_result_kind( 'error' )
				return
			}
			const already = this.children_summaries().some( c => c.id === id )
			if( already ) {
				this.add_child_result( 'Этот ребёнок уже добавлен' )
				this.add_child_result_kind( 'warn' )
				return
			}
			const profile = this.store().profile()
			if( !profile ) {
				this.add_child_result( 'Профиль не найден' )
				this.add_child_result_kind( 'error' )
				return
			}
			// Cross-user profile lookup via Giper Baza is out of scope of this skeleton.
			// We store a placeholder summary with just the id so UI has something to display.
			// In a full implementation you would resolve the child's land+profile here
			// (e.g. through a shared directory land) and fill name/username/surname/school.
			const summary: $bog_tracker_mpit_neolo_parent_child_summary = {
				id,
				username: 'user' + id,
				name: 'Ребёнок',
				surname: '#' + id,
				school: '',
			}
			profile.children_ids( null )!.add( encode_child( summary ) )
			this.add_child_result( `Добавлен: ${ summary.name } ${ summary.surname } (ID ${ id })` )
			this.add_child_result_kind( 'ok' )
			// Close modal shortly after (non-blocking, UI-only).
			setTimeout( () => {
				try { this.add_child_modal_open( false ) } catch {}
			}, 1200 )
		}

		@ $mol_action
		override create_task_click( next?: any ): any {
			if( next !== undefined ) {
				// Task creation modal is out of scope of this skeleton.
				// See the original HTML (openParentTaskModal) for the full UX.
			}
			return null
		}

		/** Choose which sub-screen to show. */
		@ $mol_mem
		override active_screen(): any {
			if( this.open_child_id() ) return this.Child_screen() as any
			const s = this.screen_id()
			if( s === 'calendar' ) return this.Calendar_screen() as any
			if( s === 'profile' ) return this.Profile_screen() as any
			return this.Children_screen() as any
		}

	}

	export class $bog_tracker_mpit_neolo_parent_side_item extends $.$bog_tracker_mpit_neolo_parent_side_item {}

	export class $bog_tracker_mpit_neolo_parent_add_child_modal extends $.$bog_tracker_mpit_neolo_parent_add_child_modal {

		@ $mol_mem
		override open( next?: boolean ): boolean {
			return super.open( next ) ?? false
		}

	}

}
