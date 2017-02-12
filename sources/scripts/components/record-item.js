import React from 'react';

class RecordItem extends React.Component {
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
            <div className="card" key={record.id}>
                <figure className="card-img-crop">
                    <img className="card-img-top" src={record.thumb} alt={record.title} />
                </figure>
                <div className="card-block">
                    {recordTitle(record.title)}
                    <p className="card-text">
                        <small className="text-muted">
                            {record.label}
                        </small>
                    </p>
                </div>
                <div className="card-footer">
                    <span className="badge badge-default">{record.style}</span>
                    <button className="btn btn-outline-primary btn-sm float-right" type="button" onClick={() => this.props.onClick(record.id)}>
                        <i className="fa fa-heart" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        )
    }
}

//this.props.addToLiked(recordId)

// RecordItem.propTypes = {
//   record: React.PropTypes.object.isRequired,
//   recordId: React.PropTypes.number.isRequired,
//   addToLiked: React.PropTypes.func.isRequired
// };

export default RecordItem;