import React from 'react';
import ChatBody from './chatBody';

class ChatSkeleton extends React.Component {
    render() { 
        const 
        properties = this.props,
        selectedContact = properties.selectedContact,
        contacts = properties.contacts;

        let
        groupMembers,
        groupMembersNames = []
        ;

        if (Object.keys(selectedContact).length) {

            groupMembers = selectedContact.groupMembers;

            contacts.map(contact => {
                if (groupMembers.includes(contact.id)) {
                    groupMembersNames.push(contact.name);
                }
            });
            groupMembersNames.unshift('You');
        }


        return ( 
            <section>
                <div className="chat-background"></div>
                <header className="row navBar chat-head d-flex">
                    <div style={{padding: '0 15px'}} className="d-flex">
                        <div  style={{flexGrow: 1}} onClick={this.props.onContactDetailClick} className="cursor-pointer d-flex">
                            <img src={selectedContact.image} width="40" height="40" draggable="false" className="rounded-circle skeleton chat-dp"/>
                            <div >
                                <h5 className="name">{selectedContact.name}</h5>
                                <h6 className="more-info">{selectedContact.isGroup ? groupMembersNames.join(', ') : "Click here to check the contact info"}</h6>
                            </div>
                        </div>

                        <div className="d-flex">

                            <div>
                                <button className="btn pt-1 rounded-circle" type="button">
                                    <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"></path></svg>
                                </button>
                            </div>

                            <div className="dropdown"> 
                                <button className="btn dropdown-toggle rounded-circle" type="button" style={{width: '50px', height: '50px'}} id="contactMoreDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="contactMoreDropdown">
                                    <li><a className="dropdown-item" >Contact info</a></li>
                                    <li><a className="dropdown-item" >Select messages</a></li>
                                    <li><a className="dropdown-item" >Mute notifications</a></li>
                                    <li><a className="dropdown-item" >Clear messages</a></li>
                                    <li><a className="dropdown-item" >Delete chat</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                
                <ChatBody contact={selectedContact}/>

                <footer className="navBar chat-foot d-flex">
                    <button className="btn" style={{marginRight: '8px'}}> 
                        <span>
                            <svg viewBox="0 0 24 24" width="24" height="24" >
                                <path fill="currentColor" d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"></path>
                            </svg>
                        </span>
                    </button>
                    <button className="btn" style={{marginRight: '8px'}}> 
                        <span>
                            <svg viewBox="0 0 24 24" width="24" height="24" >
                                <path fill="currentColor" d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"></path>
                                </svg>
                        </span>
                    </button>
                    <input type="text" className="form-control chat-input" placeholder="Type a mesage"/>
                    <button className="btn"> 
                        <span>
                            <svg viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"></path>
                            </svg>
                        </span>
                    </button>
                </footer>
            </section>
        );
    }
}
 
export default ChatSkeleton;