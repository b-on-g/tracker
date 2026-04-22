namespace $.$$ {

	export class $bog_tracker_task_page extends $.$bog_tracker_task_page {

		@ $mol_mem
		override task_id() {
			return this.$.$mol_state_arg.value( 'task' ) ?? ''
		}

		/** Find task pawn by link string */
		@ $mol_mem
		task() {
			const id = this.task_id()
			if( !id ) return null
			const list = this.store().registry().Tasks()
			if( !list ) return null
			const tasks = list.remote_list() ?? []
			return tasks.find( t => t.link().str === id ) ?? null
		}

		override title() {
			return this.task()?.title()?.val() ?? 'Задание'
		}

		override subject() {
			return this.task()?.subject()?.val() ?? ''
		}

		override deadline_text() {
			const raw = this.task()?.deadline()?.val() ?? ''
			if( !raw ) return ''
			const d = new Date( raw )
			if( isNaN( d.getTime() ) ) return raw
			return d.toLocaleDateString( 'ru-RU' )
		}

		override priority() {
			return ( this.task()?.priority()?.val() ?? 'medium' ) as any
		}

		override assignee() {
			return this.task()?.assignee_name()?.val() ?? ''
		}

		override author() {
			return this.task()?.author_name()?.val() ?? ''
		}

		override done( next?: boolean ) {
			const task = this.task()
			if( !task ) return false
			if( next !== undefined ) {
				task.done( 'auto' )?.val( next )
				return next
			}
			return task.done()?.val() ?? false
		}

		subject_label() {
			const v = this.subject()
			return v ? `Предмет: ${ v }` : 'Предмет: —'
		}

		deadline_label() {
			const v = this.deadline_text()
			return v ? `Срок: ${ v }` : 'Срок: —'
		}

		priority_label() {
			const map: Record<string, string> = {
				low: 'Низкий',
				medium: 'Средний',
				high: 'Высокий',
			}
			return `Приоритет: ${ map[ this.priority() ] ?? this.priority() }`
		}

		assignee_label() {
			const v = this.assignee()
			return v ? `Кому: ${ v }` : 'Кому: —'
		}

		author_label() {
			const v = this.author()
			return v ? `Автор: ${ v }` : 'Автор: —'
		}

		/** Current comments for the task */
		@ $mol_mem
		comments() {
			const task = this.task()
			if( !task ) return []
			const list = task.Comments()
			if( !list ) return []
			return list.remote_list() ?? []
		}

		@ $mol_mem
		override comment_ids() {
			return this.comments().map( c => c.link().str )
		}

		override comment_rows() {
			return this.comment_ids().map( id => this.Comment_row( id ) )
		}

		@ $mol_mem_key
		comment_by_id( id: string ) {
			return this.comments().find( c => c.link().str === id ) ?? null
		}

		override comment_author_text( id: string ) {
			const name = this.comment_by_id( id )?.author_name()?.val() ?? ''
			return name || 'Аноним'
		}

		override comment_body_text( id: string ) {
			return this.comment_by_id( id )?.text()?.val() ?? ''
		}

		override comment_date_text( id: string ) {
			const iso = this.comment_by_id( id )?.created_iso()?.val() ?? ''
			if( !iso ) return ''
			const d = new Date( iso )
			if( isNaN( d.getTime() ) ) return iso
			return d.toLocaleString( 'ru-RU' )
		}

		@ $mol_action
		back_click( next?: any ) {
			if( next === undefined ) return null
			this.$.$mol_state_arg.value( 'screen', 'home' )
			this.$.$mol_state_arg.value( 'task', null )
			return next
		}

		@ $mol_action
		override comment_submit( next?: any ) {
			if( next === undefined ) return null
			const task = this.task()
			if( !task ) return next
			const text = this.comment_text().trim()
			if( !text ) return next

			const list = task.Comments( 'auto' )
			if( !list ) return next

			const comment = list.make( null )
			if( !comment ) return next

			const profile = this.store().registry().Profile()?.remote()
			const author = profile?.name()?.val() ?? ''

			comment.text( 'auto' )?.val( text )
			comment.author_name( 'auto' )?.val( author )
			comment.created_iso( 'auto' )?.val( new Date().toISOString() )

			this.comment_text( '' )
			return next
		}

		override content() {
			if( !this.task() ) return [ this.Missing() ]
			return [ this.Body_content() ]
		}

		override comments_block_content() {
			if( !this.comment_ids().length ) return [ this.Comment_empty() ]
			return [ this.Comments_list() ]
		}

	}

}
