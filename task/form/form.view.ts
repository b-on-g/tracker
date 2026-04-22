namespace $.$$ {

	export class $bog_tracker_task_form extends $.$bog_tracker_task_form {

		@ $mol_action
		back_click( next?: any ) {
			if( next === undefined ) return null
			this.$.$mol_state_arg.value( 'screen', 'home' )
			return next
		}

		@ $mol_action
		save_click( next?: any ) {
			if( next === undefined ) return null
			const title = this.draft_title().trim()
			if( !title ) return next

			const list = this.store().registry().Tasks( 'auto' )
			if( !list ) return next

			const task = list.make( null )
			if( !task ) return next

			task.subject( 'auto' )?.val( this.draft_subject() )
			task.title( 'auto' )?.val( title )
			task.deadline( 'auto' )?.val( this.draft_deadline() )
			task.priority( 'auto' )?.val( this.draft_priority() )
			task.assignee_name( 'auto' )?.val( this.draft_assignee() )
			task.done( 'auto' )?.val( false )

			const profile = this.store().registry().Profile()?.remote()
			const author = profile?.name()?.val() ?? ''
			task.author_name( 'auto' )?.val( author )

			// Reset draft
			this.draft_subject( '' )
			this.draft_title( '' )
			this.draft_deadline( '' )
			this.draft_priority( 'medium' )
			this.draft_assignee( '' )

			this.$.$mol_state_arg.value( 'screen', 'home' )
			return next
		}

	}

}
