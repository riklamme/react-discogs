/*
 * Import node modules
 */
import React from 'react';
import Rebase from 're-base';

/*
 * Import components
 */
import RecordsContainer from './records-container';
import AccountContainer from './account-container';


const firebase = Rebase.createClass({
  apiKey: "AIzaSyAkkEqs6WSSSDX2QdXVT0S-MSlT7ohnpPM",
  authDomain: "react-discogs.firebaseapp.com",
  databaseURL: "https://react-discogs.firebaseio.com",
});

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			records: [],
			wishlist: {}
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

	    // this runs right before the <App> is rendered
	    this.db = firebase.syncState(`riklamme/wishlist`, {
	      context: this,
	      state: 'wishlist'
	    });
	}

	componentWillUnmount() {
		firebase.removeBinding(this.db);
	}

	addToWishlist(item) {
		let wishlist = this.state.wishlist;
		wishlist[item.id] = item;
		this.setState({ wishlist: wishlist });
	}

	render () {
		return (
			<div className="row">
				<RecordsContainer records={this.state.records} triggerAddToWishlist={(item) => this.addToWishlist(item)} />
				<AccountContainer wishlist={this.state.wishlist} triggerAddToWishlist={(item) => this.addToWishlist(item)} />
			</div>
		)
	}
}

// App.propTypes = {
//   params: React.PropTypes.object.isRequired
// }

export default App;