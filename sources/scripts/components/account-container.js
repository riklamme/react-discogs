import React from 'react';
import RecordList from './record-list';

class AccountContainer extends React.Component {
	constructor() {
		super();

	  	this.renderItem = this.renderItem.bind(this);
	}

	renderItem(key) {
		const record = this.props.wishlist[key];
		console.log(record);
		
		return (
			<RecordList key={record.id} recordId={record.id} record={record} />
		)
	}

	render() {
		const wishlistItems = Object.keys(this.props.wishlist);

		return (
			<div className="col-3">
				<h1>Account</h1>
				{wishlistItems.map(this.renderItem)}
			</div>
		)
	}
}

export default AccountContainer;