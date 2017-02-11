import React from 'react';

export class RecordItem extends React.Component {
    render () {
        const { record } = this.props;
        
        return (
            <div className="card" key={`${record.id}-${record.catno}`}>
                <figure className="card-img-crop">
                    <img className="card-img-top" src={record.thumb} alt={record.title} />
                </figure>
                <div className="card-block">
                    <p className="card-text">{record.title}</p>
                    <p className="card-text">
                        <small className="text-muted">
                            {record.label}
                        </small>
                    </p>
                </div>
            </div>
        )
    }
}

export default RecordItem;