namespace $.$$ {

	export class $bog_tracker_mpit_neolo_teacher extends $.$bog_tracker_mpit_neolo_teacher {

		/* ═══════ state getters with defaults ═══════ */

		@ $mol_mem
		override screen( next?: string ): string {
			return super.screen( next ) ?? 'classes'
		}

		@ $mol_mem
		override open_class_id( next?: string ): string {
			return super.open_class_id( next ) ?? ''
		}

		@ $mol_mem
		override open_class_tab( next?: string ): string {
			return super.open_class_tab( next ) ?? 'students'
		}

		@ $mol_mem
		override new_class_name( next?: string ): string {
			return super.new_class_name( next ) ?? ''
		}

		@ $mol_mem
		override new_class_subject( next?: string ): string {
			return super.new_class_subject( next ) ?? ''
		}

		@ $mol_mem
		override create_class_error(): string {
			return this.create_class_error_state()
		}

		@ $mol_mem
		create_class_error_state( next?: string ): string {
			return next ?? ''
		}

		@ $mol_mem
		override invite_student_id( next?: string ): string {
			return super.invite_student_id( next ) ?? ''
		}

		@ $mol_mem
		override invite_result(): string {
			return this.invite_result_state()
		}

		@ $mol_mem
		invite_result_state( next?: string ): string {
			return next ?? ''
		}

		/* ═══════ modal visibility ═══════ */

		@ $mol_mem
		create_class_open( next?: boolean ): boolean {
			return next ?? false
		}

		@ $mol_mem
		invite_open( next?: boolean ): boolean {
			return next ?? false
		}

		@ $mol_mem
		override create_class_modal_hidden() {
			return !this.create_class_open()
		}

		@ $mol_mem
		override invite_modal_hidden() {
			return !this.invite_open()
		}

		/* ═══════ profile / teacher_id ═══════ */

		@ $mol_mem
		current_teacher_id(): bigint {
			const profile = this.store().profile()
			if( !profile ) return 0n
			return profile.user_id()?.val() ?? 0n
		}

		@ $mol_mem
		override teacher_side_id_text() {
			const id = this.current_teacher_id()
			if( id === 0n ) return ''
			return 'ID: ' + id.toString()
		}

		/* ═══════ screen title ═══════ */

		@ $mol_mem
		override screen_title_text() {
			if( this.open_class_id() ) {
				const cls = this.current_open_class()
				return cls?.name()?.val() ?? 'Класс'
			}
			const titles: Record<string, string> = {
				classes: 'Мои классы',
				review: 'Задания на проверку',
				stats: 'Общая статистика',
				profile: 'Личный кабинет',
			}
			return titles[ this.screen() ] ?? ''
		}

		/* ═══════ sidebar state ═══════ */

		@ $mol_mem
		override side_classes_active() {
			return this.screen() === 'classes'
		}

		@ $mol_mem
		override side_review_active() {
			return this.screen() === 'review'
		}

		@ $mol_mem
		override side_stats_active() {
			return this.screen() === 'stats'
		}

		@ $mol_mem
		override side_profile_active() {
			return this.screen() === 'profile'
		}

		@ $mol_mem
		override review_badge_hidden() {
			return this.review_count() === 0
		}

		@ $mol_mem
		override review_badge_text() {
			const n = this.review_count()
			return n > 0 ? String( n ) : ''
		}

		@ $mol_mem
		review_count(): number {
			return this.review_tasks().length
		}

		/* ═══════ active_screen switch ═══════ */

		@ $mol_mem
		override active_screen(): any {
			if( this.open_class_id() ) return this.Detail_screen()
			switch( this.screen() ) {
				case 'review': return this.Review_screen()
				case 'stats': return this.Stats_screen()
				case 'profile': return this.Profile_screen()
				default: return this.Classes_screen()
			}
		}

		/* ═══════ sidebar clicks ═══════ */

		@ $mol_action
		override side_classes_click( next?: any ): any {
			if( next === undefined ) return null
			this.screen( 'classes' )
			this.open_class_id( '' )
			return null
		}

		@ $mol_action
		override side_review_click( next?: any ): any {
			if( next === undefined ) return null
			this.screen( 'review' )
			this.open_class_id( '' )
			return null
		}

		@ $mol_action
		override side_stats_click( next?: any ): any {
			if( next === undefined ) return null
			this.screen( 'stats' )
			this.open_class_id( '' )
			return null
		}

		@ $mol_action
		override side_profile_click( next?: any ): any {
			if( next === undefined ) return null
			this.screen( 'profile' )
			this.open_class_id( '' )
			return null
		}

		@ $mol_action
		override logout( next?: any ): any {
			if( next === undefined ) return null
			// Placeholder: actual logout rotates the Giper Baza auth key.
			// The root $bog_tracker_mpit_neolo watches store.profile(), so clearing it
			// (e.g. via auth rotation) will switch the screen back to Auth.
			try {
				// eslint-disable-next-line
				localStorage.clear()
				location.reload()
			} catch {}
			return null
		}

		/* ═══════ open class from classes list ═══════ */

		@ $mol_action
		override open_class_id_set( id: string, next?: any ): any {
			if( next === undefined ) return null
			this.open_class_id( id )
			return null
		}

		@ $mol_action
		override close_class_detail( next?: any ): any {
			if( next === undefined ) return null
			this.open_class_id( '' )
			return null
		}

		/* ═══════ create class modal ═══════ */

		@ $mol_action
		override create_class_open_click( next?: any ): any {
			if( next === undefined ) return null
			this.new_class_name( '' )
			this.new_class_subject( '' )
			this.create_class_error_state( '' )
			this.create_class_open( true )
			return null
		}

		@ $mol_action
		override create_class_close( next?: any ): any {
			if( next === undefined ) return null
			this.create_class_open( false )
			return null
		}

		@ $mol_action
		override create_class_submit( next?: any ): any {
			if( next === undefined ) return null
			const name = this.new_class_name().trim()
			const subject = this.new_class_subject().trim()
			if( !name ) {
				this.create_class_error_state( 'Введите название класса' )
				return null
			}
			this.create_class_error_state( '' )

			try {
				const reg = this.store().registry()
				if( !reg ) {
					this.create_class_error_state( 'Нет доступа к базе' )
					return null
				}
				const classes_ref = reg.Classes( null )
				if( !classes_ref ) {
					this.create_class_error_state( 'Не удалось открыть список классов' )
					return null
				}
				const cls = classes_ref.make( null ) as $bog_tracker_mpit_neolo_class | null
				if( !cls ) {
					this.create_class_error_state( 'Не удалось создать класс' )
					return null
				}
				cls.name( null )!.val( name )
				if( subject ) cls.subject( null )!.val( subject )
				cls.teacher_id( null )!.val( this.current_teacher_id() )

				this.create_class_open( false )
				this.new_class_name( '' )
				this.new_class_subject( '' )

				// Open the newly created class. Use its link as id.
				this.open_class_id( cls.link().toString() )
			} catch( e ) {
				this.create_class_error_state( String( e ) )
			}
			return null
		}

		/* ═══════ invite modal ═══════ */

		@ $mol_action
		override invite_open_click( next?: any ): any {
			if( next === undefined ) return null
			this.invite_student_id( '' )
			this.invite_result_state( '' )
			this.invite_open( true )
			return null
		}

		@ $mol_action
		override invite_close( next?: any ): any {
			if( next === undefined ) return null
			this.invite_open( false )
			return null
		}

		@ $mol_action
		override invite_submit( next?: any ): any {
			if( next === undefined ) return null
			const raw = this.invite_student_id().trim()
			if( !raw ) {
				this.invite_result_state( 'Введите ID ученика' )
				return null
			}
			let sid_big: bigint
			try {
				sid_big = BigInt( raw )
			} catch {
				this.invite_result_state( 'ID должен быть числом' )
				return null
			}

			const cls = this.current_open_class()
			if( !cls ) {
				this.invite_result_state( 'Класс не выбран' )
				return null
			}
			const existing = cls.student_ids()?.items() ?? []
			if( existing.includes( raw ) ) {
				this.invite_result_state( 'Этот ученик уже в классе' )
				return null
			}

			try {
				const reg = this.store().registry()
				if( !reg ) {
					this.invite_result_state( 'Нет доступа к базе' )
					return null
				}
				const invs_ref = reg.Invitations( null )
				if( !invs_ref ) {
					this.invite_result_state( 'Не удалось открыть приглашения' )
					return null
				}
				const inv = invs_ref.make( null ) as $bog_tracker_mpit_neolo_invitation | null
				if( !inv ) {
					this.invite_result_state( 'Не удалось создать приглашение' )
					return null
				}

				const profile = this.store().profile()
				inv.class_id( null )!.val( cls.link().toString() )
				inv.class_name( null )!.val( cls.name()?.val() ?? '' )
				inv.from_teacher_id( null )!.val( this.current_teacher_id() )
				const teacher_name = [ profile?.name()?.val() ?? '', profile?.surname()?.val() ?? '' ]
					.filter( s => s ).join( ' ' ).trim()
				inv.from_teacher_name( null )!.val( teacher_name )
				inv.status( null )!.val( 'pending' )
				inv.created_iso( null )!.val( new Date().toISOString() )

				// Optimistically add student id to the class roster.
				cls.student_ids( null )!.add( sid_big.toString() )

				this.invite_result_state( 'Приглашение создано. Ученик увидит его у себя.' )
				// Auto-close after a beat.
				setTimeout( () => this.invite_open( false ), 1200 )
			} catch( e ) {
				this.invite_result_state( String( e ) )
			}
			return null
		}

		/* ═══════ assign modal (external) ═══════ */

		@ $mol_action
		override assign_open_click( next?: any ): any {
			if( next === undefined ) return null
			// STUB: assign modal lives in neolo/task/. Another agent wires it up.
			// Once that component exists, declare it in teacher.view.tree and
			// flip a boolean like this.assign_open(true) here.
			console.warn( 'assign_open_click: assign modal not yet wired' )
			return null
		}

		/* ═══════ delete class ═══════ */

		@ $mol_action
		override delete_class_click( next?: any ): any {
			if( next === undefined ) return null
			const cls = this.current_open_class()
			if( !cls ) return null
			const name = cls.name()?.val() ?? ''
			if( !confirm( `Удалить класс «${ name }»?` ) ) return null

			try {
				const reg = this.store().registry()
				const classes_ref = reg?.Classes( null )
				classes_ref?.cut( cls.link() )
				this.open_class_id( '' )
			} catch {}
			return null
		}

		/* ═══════ helpers: current open class, review tasks ═══════ */

		/** Find the open class by its stringified link among store.classes_all(). */
		current_open_class(): $bog_tracker_mpit_neolo_class | null {
			const id = this.open_class_id()
			if( !id ) return null
			const all = this.store().classes_all()
			for( const c of all ) {
				if( c.link().toString() === id ) return c
			}
			return null
		}

		/** Tasks in review state that belong to this teacher's classes. */
		review_tasks(): $bog_tracker_mpit_neolo_task[] {
			const tid = this.current_teacher_id()
			if( tid === 0n ) return []
			const my_class_ids = new Set<string>()
			for( const c of this.store().classes_all() ) {
				if( c.teacher_id()?.val() === tid ) my_class_ids.add( c.link().toString() )
			}
			const out: $bog_tracker_mpit_neolo_task[] = []
			for( const t of this.store().tasks_all() ) {
				if( t.source()?.val() !== 'teacher' ) continue
				if( t.status()?.val() !== 'review' ) continue
				const cid = t.class_id()?.val() ?? ''
				if( !my_class_ids.has( cid ) ) continue
				out.push( t )
			}
			return out
		}

		my_classes(): $bog_tracker_mpit_neolo_class[] {
			const tid = this.current_teacher_id()
			if( tid === 0n ) return []
			return this.store().classes_all().filter( c => c.teacher_id()?.val() === tid )
		}

		/* ═══════ review accept/reject (child routes events up) ═══════ */

		@ $mol_action
		override review_accept( id: string, next?: any ): any {
			if( next === undefined ) return null
			const t = this.review_tasks().find( tk => tk.link().toString() === id )
			t?.status( null )!.val( 'done' )
			return null
		}

		@ $mol_action
		override review_reject( id: string, next?: any ): any {
			if( next === undefined ) return null
			const t = this.review_tasks().find( tk => tk.link().toString() === id )
			t?.status( null )!.val( 'rejected' )
			return null
		}

		/* ═══════ sub-component getters: pass live data down ═══════ */

		@ $mol_mem
		override Classes_screen() {
			const el = super.Classes_screen()
			;( el as any ).teacher_classes = () => this.my_classes()
			return el
		}

		@ $mol_mem
		override Detail_screen() {
			const el = super.Detail_screen()
			;( el as any ).current_class = () => this.current_open_class()
			return el
		}

		@ $mol_mem
		override Review_screen() {
			const el = super.Review_screen()
			;( el as any ).review_tasks_list = () => this.review_tasks()
			return el
		}

		@ $mol_mem
		override Stats_screen() {
			const el = super.Stats_screen()
			;( el as any ).teacher_classes = () => this.my_classes()
			return el
		}

		@ $mol_mem
		override Profile_screen() {
			const el = super.Profile_screen()
			;( el as any ).classes_count = () => this.my_classes().length
			return el
		}

	}

	/* ═══════ side item — plain ═══════ */

	export class $bog_tracker_mpit_neolo_teacher_side_item extends $.$bog_tracker_mpit_neolo_teacher_side_item {}

	/* ═══════ modals — plain (view.tree provides behavior) ═══════ */

	export class $bog_tracker_mpit_neolo_teacher_create_class_modal extends $.$bog_tracker_mpit_neolo_teacher_create_class_modal {}

	export class $bog_tracker_mpit_neolo_teacher_invite_modal extends $.$bog_tracker_mpit_neolo_teacher_invite_modal {}

}
