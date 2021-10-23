import React from 'react';
import ContactStatus from './contactStatus';

class ContactsStatuses extends React.Component {

    renderStatuses(contacts, statusType) {
        let statuses = [];

        switch(statusType) {
            case 'recent':
                return statuses = contacts.filter(contact => (contact.id % 3 === 0));
            case 'viewed':
                return statuses = contacts.filter(contact => (contact.id % 5 === 0));
            case 'muted':
                return statuses = contacts.filter(contact => (contact.id % 7 === 0));
          }
        return statuses;
    }
    
    render() {
        const {contacts, statusType, onContactStausesClick} = this.props;

        const statuses = this.renderStatuses(contacts, statusType);

        return (
            <section  id={statusType === "muted" ? "muted-statuses" : ""} style={{}}>
                
                {statuses.length 
                ? 
                statuses.map(statuse => ( 
                    <div onClick={() => onContactStausesClick(statuse.id)} key={statuse.id}>
                        <ContactStatus statuse={statuse}   />
                    </div>
                )) 
                :
                (<div className="no-contact-wrapper">
                    <p className="no-contact-found">No statuses yet</p>
                </div>)}
            </section>
        );
    }
}
 
export default ContactsStatuses;