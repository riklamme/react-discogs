import React from 'react';
import RecordItem from './record-item';

class RecordsContainer extends React.Component {
	render() {
		const records = this.props.records;

		return (
			<div className="col-9">
				{records.map(record => <RecordItem key={record.id} recordId={record.id} record={record} triggerAddToWishlist={(item) => this.props.triggerAddToWishlist(item)} />)}
			</div>
		)
	}
}

export default RecordsContainer;
