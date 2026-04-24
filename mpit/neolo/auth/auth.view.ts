namespace $.$$ {

	export class $bog_tracker_mpit_neolo_auth extends $.$bog_tracker_mpit_neolo_auth {

		@ $mol_mem
		override mode( next?: string ): string {
			if( next !== undefined ) {
				// Clear error when the user switches tab.
				this.error( '' )
			}
			return super.mode( next ) ?? 'login'
		}

		@ $mol_mem
		override error( next?: string ): string {
			return super.error( next ) ?? ''
		}

		@ $mol_mem
		override busy( next?: boolean ): boolean {
			return super.busy( next ) ?? false
		}

		@ $mol_mem
		override role( next?: string ): string {
			return super.role( next ) ?? ''
		}

		@ $mol_mem
		override has_error() {
			return this.error().length > 0
		}

		@ $mol_mem
		override is_login_mode() {
			return this.mode() === 'login'
		}

		@ $mol_mem
		override is_register_mode() {
			return this.mode() === 'register'
		}

		@ $mol_mem
		override needs_school_field() {
			if( !this.is_register_mode() ) return false
			const r = this.role()
			return r === 'student' || r === 'teacher'
		}

		@ $mol_mem
		override role_student_selected() {
			return this.role() === 'student'
		}

		@ $mol_mem
		override role_teacher_selected() {
			return this.role() === 'teacher'
		}

		@ $mol_mem
		override role_parent_selected() {
			return this.role() === 'parent'
		}

		@ $mol_action
		override role_student_click( next?: any ): any {
			this.role( 'student' )
			this.error( '' )
			return null
		}

		@ $mol_action
		override role_teacher_click( next?: any ): any {
			this.role( 'teacher' )
			this.error( '' )
			return null
		}

		@ $mol_action
		override role_parent_click( next?: any ): any {
			this.role( 'parent' )
			this.error( '' )
			return null
		}

		@ $mol_mem
		override login_enabled() {
			if( this.busy() ) return false
			return this.login_username().trim().length > 0 && this.login_password().length > 0
		}

		@ $mol_mem
		override register_enabled() {
			return !this.busy()
		}

		@ $mol_mem
		override login_label() {
			return this.busy() && this.is_login_mode() ? 'Входим...' : 'Войти'
		}

		@ $mol_mem
		override register_label() {
			return this.busy() && this.is_register_mode() ? 'Регистрируем...' : 'Зарегистрироваться'
		}

		@ $mol_action
		override login_click( next?: any ): any {
			this.do_login()
			return null
		}

		@ $mol_action
		override register_click( next?: any ): any {
			this.do_register()
			return null
		}

		@ $mol_action
		do_login() {
			this.error( '' )
			const username = this.login_username().trim()
			const password = this.login_password()
			if( !username || !password ) {
				this.error( 'Введите логин и пароль.' )
				return
			}
			// Giper Baza auth is cryptographic. A returning user already has a key
			// in LocalStorage — their Profile node is live. If profile exists, we're in.
			// Username/password fields are kept for UX parity with the original backend
			// but are NOT validated server-side. If no profile — user must register first.
			const profile = this.store().profile()
			if( !profile ) {
				this.error( 'Профиль не найден. Пройдите регистрацию.' )
				return
			}
			// Already "logged in" — parent component watches store.profile() and switches screen.
		}

		@ $mol_action
		do_register() {
			this.error( '' )
			const username = this.reg_username().trim()
			const password = this.reg_password()
			const password2 = this.reg_password2()
			const name = this.reg_name().trim()
			const surname = this.reg_surname().trim()
			const school = this.reg_school().trim()
			const role = this.role()

			if( !username || username.length < 3 ) {
				this.error( 'Логин — не менее 3 символов.' )
				return
			}
			if( !password || password.length < 4 ) {
				this.error( 'Пароль — не менее 4 символов.' )
				return
			}
			if( password !== password2 ) {
				this.error( 'Пароли не совпадают.' )
				return
			}
			if( !name ) {
				this.error( 'Введите имя.' )
				return
			}
			if( !surname ) {
				this.error( 'Введите фамилию.' )
				return
			}
			if( !role ) {
				this.error( 'Выберите роль.' )
				return
			}
			if( ( role === 'student' || role === 'teacher' ) && !school ) {
				this.error( 'Введите название школы.' )
				return
			}

			this.busy( true )
			try {
				const store = this.store()
				const registry = store.registry()
				if( !registry ) {
					this.error( 'Не удалось получить доступ к базе.' )
					return
				}

				// Create Profile node in user's home land.
				const profile_ref = registry.Profile( null )
				if( !profile_ref ) {
					this.error( 'Не удалось создать профиль.' )
					return
				}
				const profile = profile_ref.ensure( null ) as $bog_tracker_mpit_neolo_user | null
				if( !profile ) {
					this.error( 'Не удалось создать профиль.' )
					return
				}

				profile.username( null )!.val( username )
				profile.name( null )!.val( name )
				profile.surname( null )!.val( surname )
				profile.role( null )!.val( role )
				if( school ) profile.school( null )!.val( school )
				// Deterministic non-cryptographic numeric user_id derived from username.
				profile.user_id( null )!.val( this.hash_id( username ) )

				// Reset form
				this.reg_username( '' )
				this.reg_password( '' )
				this.reg_password2( '' )
				this.reg_name( '' )
				this.reg_surname( '' )
				this.reg_school( '' )
				this.role( '' )
			} catch( e ) {
				this.error( 'Не удалось зарегистрироваться: ' + String( e ) )
			} finally {
				this.busy( false )
			}
		}

		/** Deterministic 63-bit FNV-1a hash for use as numeric user_id. */
		hash_id( source: string ): bigint {
			let h = 1469598103934665603n
			const prime = 1099511628211n
			const mask = ( 1n << 63n ) - 1n
			for( let i = 0; i < source.length; ++i ) {
				h = ( h ^ BigInt( source.charCodeAt( i ) ) ) * prime
				h = h & mask
			}
			return h
		}

	}

	export class $bog_tracker_mpit_neolo_auth_role_button extends $.$bog_tracker_mpit_neolo_auth_role_button {}

}
