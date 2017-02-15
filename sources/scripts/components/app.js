/*
 * Import node modules
 */
import React from 'react';
import Rebase from 're-base';

/*
 * Import scripts
 */
import firebase from '../firebase';

/*
 * Import components
 */
import RecordsContainer from './records-container';
import AccountContainer from './account-container';
import AccountForm from './account-form';

/*
 * App components
 */
class App extends React.Component {
	constructor() {
		super();

		this.fetchAccount = this.fetchAccount.bind(this);
		this.addAccount = this.addAccount.bind(this);

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

	addAccount(account) {
		console.log(account);

		firebase.push(account.username, {
			data: {account: account}
		});
	}

	fetchAccount(account) {
		console.log(account);

		firebase.fetch(account.username, {
		    context: this
		  }).then(data => {
		    console.log(data);

		    if (data === null) {
		    	console.log('account not exist');

		    	this.addAccount(account);
		    } else {
		    	console.log('account exist');
		    }

		  }).catch(error => {
		  	console.log('error', error)
		  })
	}

	addToWishlist(item) {
		let wishlist = this.state.wishlist;
		wishlist[item.id] = item;
		this.setState({ wishlist: wishlist });
	}

	removeFromWishlist(key) {
		let wishlist = this.state.wishlist;
		wishlist[key] = null;
		this.setState({ wishlist: wishlist });
	}

	render () {
		return (
			<div>
			    <section className="jumbotron text-center">
			        <div className="container">
			            <h1 className="jumbotron-heading">Discogs React</h1>
			            <p className="lead text-muted">Boilerplate for web apps with React, Babel, Firebase and Webpack 2</p>
			            <AccountForm addAccount={this.fetchAccount} />
			        </div>
			    </section>
				<div className="album text-muted">
	        		<div className="container">
						<div className="row">
							<RecordsContainer records={this.state.records} triggerAddToWishlist={(item) => this.addToWishlist(item)} />
							<AccountContainer wishlist={this.state.wishlist} triggerRemoveFromWishlist={(id) => this.removeFromWishlist(id)} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}


/*
 * App components export
 */
export default App;