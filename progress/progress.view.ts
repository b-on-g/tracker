namespace $.$$ {

	export class $bog_tracker_progress extends $.$bog_tracker_progress {

		override label() {
			const done = this.done_count()
			const total = this.total_count()
			const pct = total ? Math.round( done / total * 100 ) : 0
			return `${ done } / ${ total } (${ pct }%)`
		}

		override percent_width() {
			const done = this.done_count()
			const total = this.total_count()
			const pct = total ? Math.round( done / total * 100 ) : 0
			return `${ pct }%`
		}

	}

}
