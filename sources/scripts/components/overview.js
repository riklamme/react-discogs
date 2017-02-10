import React from 'react'

export class Overview extends React.Component {
	constructor() {
		super();
	}

	state = {
		records: {}
	};

	componentWillMount() {
		fetch('https://api.discogs.com/database/search?artist=luca debonaire&key=wqUQvwNxoRghPSAqSnrc&secret=eTbhihtyFJNVhvZfRDXvTTGMGguRRsyL')
			.then(function(response) {
				return response.json()
			}).then(function(json) {
				console.log('parsed json', json)

				this.setState({
					records: json.results
				});
			}).catch(function(ex) {
				console.log('parsing failed', ex)
			})
	}

	render () {
		return (
			<article>
				<h1>Here comes the overview</h1>
				<em>All the records in cards.</em>
			</article>
		)
	}
}
