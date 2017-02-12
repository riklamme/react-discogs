import React from 'react';
import RecordItem from './record-item';

class RecordsContainer extends React.Component {
	render() {
		const records = this.props.records;

		return (
			<div className="row">
				{records.map(record => <RecordItem key={record.id} recordId={record.id} record={record} addToLiked={this.addLiked} onClick={(id) => this.props.onClick(id)} />)}
			</div>
		)
	}
}

export default RecordsContainer;
