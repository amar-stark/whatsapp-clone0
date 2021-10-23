import React  from 'react';

class ContactStatus extends React.Component {
    render() { 
        const statuse = this.props.statuse;

        return (
            <div className="status-card user-no-select d-flex" >
                <div className="dp" style={{padding: '0 15px 0 3px'}}>
                    <img src={statuse.image} draggable="false" width="40" height="40" className="rounded-circle skeleton"/>
                </div>
                <div className="status-detail">
                    <div className="col-flex">
                        <h6 className="name mb-1 pt-2">{statuse.name}</h6>
                    </div>
                    <div className="col-flex">
                        <h6 className="recentMessage">{statuse.lastSeen}</h6>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ContactStatus;