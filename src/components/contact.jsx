import React  from 'react';

class Contact extends React.Component {
    render() { 
        const contact = this.props.contact;
        const isGroupMember = this.props.isGroupMember;
        return (
            <div className="contact-card user-no-select" style={ isGroupMember ? {paddingLeft: '24px'} : {}}>
                <div className="dp">
                    <img src={contact.image} draggable="false" width="49" height="49" className="rounded-circle skeleton"/>
                </div>
                <div className="contact-detail">
                    <div className="col-flex">
                        <h6 className="name">{contact.name}</h6>
                        {!isGroupMember ? <span className="lastSeen">{contact.lastSeen}</span> : (contact.isgroupAdmin ? <span className="admin">Group admin</span> : null)}
                    </div>
                    <div className="col-flex">
                        <h6 className="recentMessage">{isGroupMember ? contact.about : contact.latestMessage}</h6>
                        {/* <div className="dropdown" style={{marginLeft: '2px'}}> 
                            <button className="btn dropdown-toggle rounded-circle contact-more" type="button" style={{width: '30px', height: '30px'}} id="contactMoreDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="contactMoreDropdown">
                                <li><a className="dropdown-item" >New group</a></li>
                                <li><a className="dropdown-item" >Create a room</a></li>
                                <li><a className="dropdown-item" >Archived</a></li>
                                <li><a className="dropdown-item" >Starred</a></li>
                                <li><a className="dropdown-item" >Settings</a></li>
                                <li><a className="dropdown-item" >Log out</a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Contact;