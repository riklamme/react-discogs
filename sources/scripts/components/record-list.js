import React from 'react';

class RecordList extends React.Component {
    render() {
        const { record, recordId } = this.props;
        const recordTitle = (title) => {
            const arr = title.split(' - ');

            return (
                <p className="card-text">
                    <span className="track">{arr[1]}</span>
                    <span className="artist">{arr[0]}</span>
                </p>
            )
        }

        return (
            <div className="card type-list" key={record.id}>
                <div className="card-block">
                    <figure className="card-img-crop">
                        <img src={record.thumb} alt={record.title} />
                    </figure>
                    {recordTitle(record.title)}
                    <p className="card-text">
                        <small className="text-muted">
                            {record.label}
                        </small>
                    </p>
                </div>
                <div className="card-footer">
                    <span className="badge badge-default">{record.style}</span>
                </div>
            </div>
        )
    }

}

export default RecordList;