namespace $.$$ {

	type $bog_tracker_mpit_neolo_ai_test_question_data = {
		question: string
		options: { letter: string; text: string }[]
		correct: string
	}

	type $bog_tracker_mpit_neolo_ai_test_mistake_data = {
		qi: number
		question: string
		user: string
		correct_letter: string
		correct_text: string
	}

	export class $bog_tracker_mpit_neolo_ai_test extends $.$bog_tracker_mpit_neolo_ai_test {

		// ── State ──────────────────────────────────────────────
		@ $mol_mem
		override hidden( next?: boolean ): boolean {
			return super.hidden( next ) ?? true
		}

		@ $mol_mem
		phase( next?: 'loading' | 'questions' | 'results' | 'error' ): 'loading' | 'questions' | 'results' | 'error' {
			if( next !== undefined ) return next
			return 'loading'
		}

		@ $mol_mem
		override error_text( next?: string ): string {
			return super.error_text( next ) ?? ''
		}

		@ $mol_mem
		questions_data( next?: readonly $bog_tracker_mpit_neolo_ai_test_question_data[] ): readonly $bog_tracker_mpit_neolo_ai_test_question_data[] {
			if( next !== undefined ) return next
			return []
		}

		@ $mol_mem_key
		answer( qi: string, next?: string ): string {
			if( next !== undefined ) return next
			return ''
		}

		@ $mol_mem
		score( next?: number ): number {
			if( next !== undefined ) return next
			return 0
		}

		@ $mol_mem
		mistakes_data( next?: readonly $bog_tracker_mpit_neolo_ai_test_mistake_data[] ): readonly $bog_tracker_mpit_neolo_ai_test_mistake_data[] {
			if( next !== undefined ) return next
			return []
		}

		// ── Derived flags ──────────────────────────────────────
		@ $mol_mem
		override is_loading(): boolean {
			return this.phase() === 'loading'
		}

		@ $mol_mem
		override is_questions(): boolean {
			return this.phase() === 'questions'
		}

		@ $mol_mem
		override is_results(): boolean {
			return this.phase() === 'results'
		}

		@ $mol_mem
		override is_error(): boolean {
			return this.phase() === 'error'
		}

		@ $mol_mem
		override has_mistakes(): boolean {
			return this.mistakes_data().length > 0
		}

		@ $mol_mem
		override subtitle(): string {
			if( this.phase() === 'loading' ) return 'Генерация вопросов...'
			if( this.phase() === 'results' ) return 'Результаты теста'
			if( this.phase() === 'error' ) return 'Ошибка'
			const qs = this.questions_data()
			return `${ qs.length } вопросов`
		}

		@ $mol_mem
		override score_text(): string {
			const total = this.questions_data().length
			return `${ this.score() }/${ total }`
		}

		@ $mol_mem
		override results_label(): string {
			const total = this.questions_data().length
			if( total === 0 ) return ''
			const pct = Math.round( this.score() / total * 100 )
			if( pct >= 80 ) return 'Отлично!'
			if( pct >= 60 ) return 'Хорошо'
			return 'Попробуй ещё'
		}

		@ $mol_mem
		override results_detail(): string {
			const total = this.questions_data().length
			if( total === 0 ) return ''
			const pct = Math.round( this.score() / total * 100 )
			return `Правильных ответов: ${ pct }%`
		}

		// ── Explicit open/regenerate ───────────────────────────
		/** Call this from the parent to open the modal and start generation. */
		@ $mol_action
		open() {
			this.hidden( false )
			this.do_generate()
		}

		@ $mol_action
		do_generate() {
			this.phase( 'loading' )
			this.error_text( '' )
			this.questions_data( [] )
			this.mistakes_data( [] )
			this.score( 0 )
			$mol_wire_async( this ).generate_async()
		}

		async generate_async() {
			try {
				const title = this.task_title()
				const desc = this.task_desc()
				const file = this.task_file()
				const res = await this.api().ai_generate_test( title, desc, file )
				if( !res || !res.ok ) {
					this.phase( 'error' )
					this.error_text( res?.error || 'Неизвестная ошибка' )
					return
				}
				const qs = $bog_tracker_mpit_neolo_ai_test.parse_quiz_response( String( res.content || '' ) )
				if( qs.length === 0 ) {
					this.phase( 'error' )
					this.error_text( 'Нейросеть не смогла распознать формат. Попробуйте ещё раз или используйте другой материал.' )
					return
				}
				this.questions_data( qs )
				this.phase( 'questions' )
			} catch( e: any ) {
				this.phase( 'error' )
				this.error_text( 'Не удалось связаться с сервером: ' + ( e.message || String( e ) ) )
			}
		}

		// ── Quiz parsing (ported from index.html.bac parseQuizResponse) ──
		static parse_quiz_response( text: string ): $bog_tracker_mpit_neolo_ai_test_question_data[] {
			const questions: $bog_tracker_mpit_neolo_ai_test_question_data[] = []
			let clean = text
				.replace( /^(?:Вот тест|Тест|Вот ваш тест|Вот задания|Задания|Ответ|Отвечаю)[\s:]*/im, '' )
				.replace( /^(?:Конечно|Разумеется|Безусловно)[,\s]*/im, '' )
				.trim()

			const qRegex = /(?:^|\n)(?:Q?\d+[.):\s]+|\d+[.\s]+)\s*(.+?)(?=\n[A-Da-d][).\s])((?:\n[A-Da-d][).\s]*.+?)+)?\s*(?:\n)?(?:Правильный|Correct|Ответ|Answer|Правильный ответ)[\s:)*]+([A-Da-d])/gim
			let m: RegExpExecArray | null
			while( ( m = qRegex.exec( clean ) ) !== null ) {
				const qText = m[ 1 ].trim().replace( /\n+/g, ' ' )
				const optsBlock = m[ 2 ] || ''
				const correct = m[ 3 ].toUpperCase()
				const opts: { letter: string; text: string }[] = []
				const optRegex = /^([A-Da-d])[).\s]*\s*(.+)$/gm
				let om: RegExpExecArray | null
				while( ( om = optRegex.exec( optsBlock ) ) !== null ) {
					opts.push( { letter: om[ 1 ].toUpperCase(), text: om[ 2 ].trim().replace( /\n+/g, ' ' ) } )
				}
				if( opts.length >= 2 ) questions.push( { question: qText, options: opts, correct } )
			}

			// Fallback: split by question numbers
			if( questions.length === 0 ) {
				const blocks = clean.split( /\n(?=\s*(?:Q?\d+[.):\s]+|\d+[.\s]+))/im ).filter( b => b.trim() )
				for( const block of blocks ) {
					const lines = block.split( '\n' ).map( l => l.trim() ).filter( l => l )
					let currentQ: $bog_tracker_mpit_neolo_ai_test_question_data | null = null
					for( const line of lines ) {
						const qMatch = line.match( /^(?:Q?\d+[.):\s]+|\d+[.\s]+)\s*(.+)/i )
						if( qMatch ) {
							if( currentQ && currentQ.options.length >= 2 ) questions.push( currentQ )
							currentQ = { question: qMatch[ 1 ].trim(), options: [], correct: '' }
						}
						const oMatch = line.match( /^([A-Da-d])[).\s]*\s*(.+)/ )
						if( oMatch && currentQ ) currentQ.options.push( { letter: oMatch[ 1 ].toUpperCase(), text: oMatch[ 2 ].trim() } )
						const cMatch = line.match( /(?:Правильный|Correct|Ответ|Answer|Правильный ответ)[\s:)*]+([A-Da-d])/i )
						if( cMatch && currentQ ) currentQ.correct = cMatch[ 1 ].toUpperCase()
					}
					if( currentQ && currentQ.options.length >= 2 ) questions.push( currentQ )
				}
			}

			// Line-by-line fallback
			if( questions.length === 0 ) {
				const lines = clean.split( '\n' ).map( l => l.trim() ).filter( l => l )
				let currentQ: $bog_tracker_mpit_neolo_ai_test_question_data | null = null
				for( const line of lines ) {
					const qMatch = line.match( /^(?:Q?\d+[.):\s]+|\d+[.\s]+)\s*(.+)/i )
					if( qMatch ) {
						if( currentQ && currentQ.options.length >= 2 ) questions.push( currentQ )
						currentQ = { question: qMatch[ 1 ].trim(), options: [], correct: '' }
					}
					const oMatch = line.match( /^([A-Da-d])[).\s]*\s*(.+)/ )
					if( oMatch && currentQ ) currentQ.options.push( { letter: oMatch[ 1 ].toUpperCase(), text: oMatch[ 2 ].trim() } )
					const cMatch = line.match( /(?:Правильный|Correct|Ответ|Answer|Правильный ответ)[\s:)*]+([A-Da-d])/i )
					if( cMatch && currentQ ) currentQ.correct = cMatch[ 1 ].toUpperCase()
				}
				if( currentQ && currentQ.options.length >= 2 ) questions.push( currentQ )
			}
			return questions
		}

		// ── Question list wiring ───────────────────────────────
		@ $mol_mem
		override question_ids(): readonly string[] {
			return this.questions_data().map( ( _q, i ) => String( i ) )
		}

		@ $mol_mem_key
		question_data( qi: string ): $bog_tracker_mpit_neolo_ai_test_question_data | null {
			const i = Number( qi )
			return this.questions_data()[ i ] ?? null
		}

		@ $mol_mem_key
		override question_num_text( qi: string ): string {
			const i = Number( qi ) + 1
			return `Вопрос ${ i } / ${ this.questions_data().length }`
		}

		@ $mol_mem_key
		override question_text( qi: string ): string {
			return this.question_data( qi )?.question ?? ''
		}

		@ $mol_mem_key
		override question_options( qi: string ): readonly any[] {
			const q = this.question_data( qi )
			if( !q ) return []
			return q.options.map( o => this.Option( qi + '_' + o.letter ) )
		}

		@ $mol_mem_key
		Option( key: string ) {
			const opt = new this.$.$bog_tracker_mpit_neolo_ai_test_option()
			const [ qi, letter ] = key.split( '_' )
			opt.letter = () => letter
			opt.text_val = () => this.option_text( qi, letter )
			opt.state = () => this.option_state( qi, letter )
			opt.click = ( next?: any ) => this.option_click( qi, letter, next )
			return opt
		}

		@ $mol_mem_key
		option_text( qi: string, letter: string ): string {
			const q = this.question_data( qi )
			if( !q ) return ''
			return q.options.find( o => o.letter === letter )?.text ?? ''
		}

		@ $mol_mem_key
		option_state( qi: string, letter: string ): string {
			if( this.phase() === 'results' ) {
				const q = this.question_data( qi )
				if( !q ) return 'idle'
				const userAns = this.answer( qi )
				if( q.correct === letter ) return 'correct'
				if( userAns === letter && userAns !== q.correct ) return 'wrong'
				return 'idle'
			}
			if( this.answer( qi ) === letter ) return 'selected'
			return 'idle'
		}

		@ $mol_action
		option_click( qi: string, letter: string, next?: any ): any {
			if( next === undefined ) return null
			if( this.phase() !== 'questions' ) return null
			this.answer( qi, letter )
			return null
		}

		@ $mol_mem
		override question_cards(): readonly any[] {
			return this.question_ids().map( qi => this.Question_card( qi ) )
		}

		// ── Finish / grade ─────────────────────────────────────
		@ $mol_action
		override finish( next?: any ): any {
			if( next === undefined ) return null
			if( this.phase() !== 'questions' ) return null
			const qs = this.questions_data()
			const answered = qs.filter( ( _q, i ) => !!this.answer( String( i ) ) ).length
			if( answered < qs.length ) {
				alert( `Отвечено ${ answered } из ${ qs.length } вопросов` )
				return null
			}
			let correct = 0
			const mistakes: $bog_tracker_mpit_neolo_ai_test_mistake_data[] = []
			qs.forEach( ( q, i ) => {
				const user = this.answer( String( i ) )
				const ok = user === q.correct
				if( ok ) { correct++; return }
				const correct_opt = q.options.find( o => o.letter === q.correct )
				mistakes.push( {
					qi: i,
					question: q.question,
					user,
					correct_letter: q.correct,
					correct_text: correct_opt?.text ?? '',
				} )
			} )
			this.score( correct )
			this.mistakes_data( mistakes )
			this.phase( 'results' )
			return null
		}

		// ── Mistakes rows ──────────────────────────────────────
		@ $mol_mem
		override mistake_ids(): readonly string[] {
			return this.mistakes_data().map( ( _m, i ) => String( i ) )
		}

		@ $mol_mem_key
		mistake( id: string ) {
			const i = Number( id )
			return this.mistakes_data()[ i ] ?? null
		}

		@ $mol_mem_key
		override mistake_question( id: string ): string {
			return this.mistake( id )?.question ?? ''
		}

		@ $mol_mem_key
		override mistake_user_answer( id: string ): string {
			return this.mistake( id )?.user ?? ''
		}

		@ $mol_mem_key
		override mistake_correct_answer( id: string ): string {
			return this.mistake( id )?.correct_letter ?? ''
		}

		@ $mol_mem_key
		override mistake_correct_text( id: string ): string {
			return this.mistake( id )?.correct_text ?? ''
		}

		@ $mol_mem
		override mistake_rows(): readonly any[] {
			return this.mistake_ids().map( id => this.Mistake_row( id ) )
		}

		// ── Close handling ─────────────────────────────────────
		@ $mol_action
		override close_click( next?: any ): any {
			if( next === undefined ) return null
			this.do_close()
			return null
		}

		@ $mol_action
		override backdrop_click( next?: any ): any {
			if( next === undefined ) return null
			const ev = next as Event | undefined
			if( ev && ev.target === ev.currentTarget ) this.do_close()
			return null
		}

		@ $mol_action
		do_close() {
			this.hidden( true )
			const cb = this.on_close
			if( typeof cb === 'function' ) cb.call( this )
		}

	}

	export class $bog_tracker_mpit_neolo_ai_test_question extends $.$bog_tracker_mpit_neolo_ai_test_question {}
	export class $bog_tracker_mpit_neolo_ai_test_option extends $.$bog_tracker_mpit_neolo_ai_test_option {}
	export class $bog_tracker_mpit_neolo_ai_test_mistake extends $.$bog_tracker_mpit_neolo_ai_test_mistake {}

}
