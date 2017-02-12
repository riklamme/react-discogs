import React from 'react';
import RecordsContainer from './records-container';

class App extends React.Component {
	constructor() {
		super();
		// this.addLiked = this.addLiked.bind(this);

		this.state = {
			records: [],
			liked: []
		}
	}

	componentWillMount() {
		fetch('https://api.discogs.com/database/search?artist=luca debonaire&key=wqUQvwNxoRghPSAqSnrc&secret=eTbhihtyFJNVhvZfRDXvTTGMGguRRsyL')
			.then((response) => {
				return response.json()
			}).then((json) => {
				// console.log('parsed json', json)

				this.setState({
					records: json.results
				});
			}).catch((ex) => {
				console.log('parsing failed', ex)
			});
	}

	// addLiked(key) {
	//     // take a copy of our state
	//     const liked = {...this.state.liked};
	//     // update or add the new number of fish ordered
	//     // order[key] = order[key] + 1 || 1;
	//     // update our state
	//     this.setState({ liked });
	// }

	handleClick(item) {
		console.log(item);
		let liked = this.state.liked.slice();
		liked.push(item);
		this.setState({ liked: liked });
	}

	render () {
		return (
			<RecordsContainer records={this.state.records} onClick={(id) => this.handleClick(id)} />
		)
	}
}

// App.propTypes = {
//   params: React.PropTypes.object.isRequired
// }

export default App;