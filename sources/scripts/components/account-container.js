import React from 'react';
import RecordList from './record-list';

class AccountContainer extends React.Component {
	constructor() {
		super();

	  	this.renderItem = this.renderItem.bind(this);
	}

	renderItem(key) {
		const record = this.props.wishlist[key];
		
		return (
			<RecordList key={record.id} recordId={record.id} record={record} />
		)
	}

	render() {
		const wishlistItems = Object.keys(this.props.wishlist);

		return (
			<div className="account-container col-3">
				<h3>Wishlist</h3>
				{wishlistItems.map(this.renderItem)}
			</div>
		)
	}
}

export default AccountContainer;