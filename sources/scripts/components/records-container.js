import React from 'react'

export class RecordsContainer extends React.Component {
	render () {
		const records = this.props.records;

		return (
			<article>
				<h1>Here comes the overview</h1>
				<em>All the records in cards.</em>
			</article>

			{records}
		)
	}
}

export default RecordsContainer;
