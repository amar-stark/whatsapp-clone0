import React from 'react';
import Contact from './contact';

class Contacts extends React.Component {
    
    render() {
        const {contacts, onContactClick} = this.props;

        return (
            <section className="contacts-list">
                
                {contacts.length 
                ? 
                contacts.map(contact => ( 
                    <div onClick={() => onContactClick(contact.id)} key={contact.id}>
                        <Contact contact={contact}   />
                    </div>
                )) 
                :
                (<div className="no-contact-wrapper">
                    <p className="no-contact-found">No chats, contacts or messages found</p>
                </div>)}
            </section>
        );
    }
}
 
export default Contacts;