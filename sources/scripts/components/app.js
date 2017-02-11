import React from 'react';
import RecordsContainer from './records-container';

export class App extends React.Component {
	constructor() {
		super();

		this.state = {
			records: []
		}
	}

	componentWillMount() {
		fetch('https://api.discogs.com/database/search?artist=luca debonaire&key=wqUQvwNxoRghPSAqSnrc&secret=eTbhihtyFJNVhvZfRDXvTTGMGguRRsyL')
			.then((response) => {
				return response.json()
			}).then((json) => {
				console.log('parsed json', json)

				this.setState({
					records: json.results
				});
			}).catch((ex) => {
				console.log('parsing failed', ex)
			});
	}

	render () {
		return (
			<RecordsContainer records={this.state.records} />
		)
	}
}
