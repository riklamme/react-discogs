import React from 'react';
import RecordItem from './record-item';

export class RecordsContainer extends React.Component {
	render () {
		const records = this.props.records;

		return (
			<div className="row">
				{records.map(record => <RecordItem key={`${record.id}-${record.catno}`} record={record} />)}
			</div>
		)
	}
}

export default RecordsContainer;
