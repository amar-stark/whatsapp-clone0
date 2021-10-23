import React from 'react';
import Contact from './contact';

class ContactDetails extends React.Component {
    render() { 

        const 
        you = {
            "id": 0,
            "name": "You",
            "image": "https://1.bp.blogspot.com/-ceZCvjagyFw/WNAx0UcFtiI/AAAAAAAAALk/k7s5kcUBK-0jjBBxodzfSrsrUNXmoTNqACLcB/s1600/logo%2Bstark1.jpg",
            "latestMessage": "Hai",
            "lastSeen": "Today",
            "isGroup": false,
            "isgroupAdmin": true,
            "groupMembers": [],
            "groupAdmins": [],
            "createdOn": "",
            "about": "Perfection is a journey.  Not a destination. And the finish line is where the journey begins",
            "messages": []
        };

        const 
        properties = this.props,
        selectedContact = properties.selectedContact,
        contacts = properties.contacts
        ;

        let
        allGroups = [],
        commonGroups = [],
        groupMembers,
        groupAdmins,
        groupMembersObjArray = [],
        groupMembersNames = []
        ;

        if (Object.keys(selectedContact).length) {

            groupMembers = selectedContact.groupMembers;
            groupAdmins = selectedContact.groupAdmins;

            contacts.map(contact => {
                if (groupMembers.includes(contact.id)) {
                    if (groupAdmins.includes(contact.id))  contact["isgroupAdmin"] = true;
                    groupMembersObjArray.push(contact);
                    groupMembersNames.push(contact.name);
                }
                if (contact.isGroup) {
                    allGroups.push(contact);
                }
            });
        };
        
        if (Object.keys(allGroups).length) {
            allGroups.map(group => {
                if (group.groupMembers && group.groupMembers.includes(selectedContact.id) && group.groupMembers.includes(you.id)) {
                    commonGroups.push(group);
                }
            })
        }

        const personalContact = (
            <div key="0">
                < Contact contact={you} isGroupMember={true} />
            </div>
        );

        return (
            <section className="full-height">
                <div className="navBar d-flex">
                    <header>
                        <div style={{width: '53px'}}>
                            <span className="return-from-profile" onClick={properties.onReturnFromProfileClick}>
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="currentColor" d="M19.1 17.2l-5.3-5.3 5.3-5.3-1.8-1.8-5.3 5.4-5.3-5.3-1.8 1.7 5.3 5.3-5.3 5.3L6.7 19l5.3-5.3 5.3 5.3 1.8-1.8z"></path>
                                </svg>
                            </span>
                        </div>
                        <div style={{paddingTop: '3px'}}>
                            <h3>Contact info</h3>
                        </div>
                    </header>
                </div>

                <div style={{height: 'calc(100% - 59px)', overflowY: 'scroll'}}>
                    <div style={{padding: '28px 30px 19px', background: '#131c21', marginBottom: '10px'}}>
                        <div style={{marginBottom: "20px"}} className="text-center">
                            <img src={selectedContact.image} data-bs-toggle="modal" data-bs-target="#contactImageModal" draggable="false" width="200" height="200" className="rounded-circle skeleton cursor-pointer"/>
                        </div>
                        <div>
                            <h1>{selectedContact.name}</h1>
                            {selectedContact.isGroup ? <h5>Created {(new Date(selectedContact.createdOn)).toLocaleString('en-US', {  day: 'numeric', month: 'numeric',  year: 'numeric' })} at {(new Date(selectedContact.createdOn)).toLocaleString('en-US', {  hour: 'numeric', minute: 'numeric', hour12: true })}</h5> : null}
                        </div>
                    </div>
                    
                    <div style={{background: '#131c21', marginBottom: '10px', color: '#D8D8DA'}}>
                        <div className="d-flex cursor-pointer options" style={{'borderBottom': '1px solid #30383d'}}>
                            <h3 className="w-100 profile-name">Mute Notifications</h3>
                            <span title="Click to edit"  className="cursor-pointer flex-shrink-1">
                                <svg viewBox="0 0 10 21" width="10" height="21" >
                                    <path fill="currentColor" d="M1 15.75l5.2-5.2L1 5.35l1.5-1.5 6.5 6.7-6.6 6.6-1.4-1.4z"></path>
                                </svg>
                            </span>
                        </div>
                        <div className="d-flex cursor-pointer options"  style={{'borderBottom': '1px solid #30383d'}}>
                            <h3 className="w-100 profile-name">Starred Messages</h3>
                            <span title="Click to edit"  className="cursor-pointer flex-shrink-1">
                                <svg viewBox="0 0 10 21" width="10" height="21" >
                                    <path fill="currentColor" d="M1 15.75l5.2-5.2L1 5.35l1.5-1.5 6.5 6.7-6.6 6.6-1.4-1.4z"></path>
                                </svg>
                            </span>
                        </div>
                        <div className="d-flex cursor-pointer options">
                            <h3 className="w-100 profile-name">Disappearing Messages</h3>
                            <span title="Click to edit"  className="cursor-pointer flex-shrink-1">
                                <svg viewBox="0 0 10 21" width="10" height="21" >
                                    <path fill="currentColor" d="M1 15.75l5.2-5.2L1 5.35l1.5-1.5 6.5 6.7-6.6 6.6-1.4-1.4z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>

                    

                    <div style={{background: '#131c21', marginBottom: '10px'}} className={(groupMembersObjArray && groupMembersObjArray.length) ? "d-block" : "d-none"}>
                        <div className="d-flex" style={{padding: '14px 0', margin: '0 30px', alignItems: 'center', borderBottom: '1px solid #30383d'}}>
                            <h3 className="w-100 mb-0" style={{color: '#00af9c', fontSize: '14px'}}>{groupMembersObjArray.length + 1} participants</h3>
                            <span className="me-3" style={{color: '#575D5F'}}>
                                <svg viewBox="0 0 24 24" width="24" height="24" >
                                    <path fill="currentColor" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path>
                                </svg>
                            </span>
                        </div>

                        {personalContact}

                        {
                        (groupMembersObjArray && groupMembersObjArray.length) 
                        ?
                        groupMembersObjArray.map(groupMember => 
                            (<div onClick={() => properties.onContactClick(groupMember.id)} key={groupMember.id}>
                                < Contact contact={groupMember} isGroupMember={true} />
                            </div>)
                        )
                        :
                        null
                        }

                    </div>

                    <div style={{background: '#131c21', marginBottom: '10px'}} className={(commonGroups && commonGroups.length) ? "d-block" : "d-none"}>
                        <div className="d-flex" style={{padding: '14px 0', margin: '0 30px', alignItems: 'center', borderBottom: '1px solid #30383d'}}>
                            <h3 className="w-100 mb-0" style={{color: '#00af9c', fontSize: '14px'}}> Groups in common</h3>
                            <span className="me-3" style={{color: '#00af9c'}}>
                                {commonGroups.length}
                            </span>
                        </div>

                        {
                        (commonGroups && commonGroups.length) 
                        ?
                        commonGroups.map(group => 
                            (<div onClick={() => properties.onContactClick(group.id)} key={group.id}>
                                < Contact contact={group} isGroupMember={true} />
                            </div>)
                        )
                        :
                        null
                        }

                    </div>

                    {selectedContact.isGroup 
                    ?
                    (<div>
                        <div style={{background: '#131c21', marginBottom: '10px', color: '#ef697a'}}>
                            <div className="d-flex cursor-pointer options more" >
                                <span className="me-3">
                                    <svg viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="currentColor" d="M16.6 8.1l1.2-1.2 5.1 5.1-5.1 5.1-1.2-1.2 3-3H8.7v-1.8h10.9l-3-3zM3.8 19.9h9.1c1 0 1.8-.8 1.8-1.8v-1.4h-1.8v1.4H3.8V5.8h9.1v1.4h1.8V5.8c0-1-.8-1.8-1.8-1.8H3.8C2.8 4 2 4.8 2 5.8v12.4c0 .9.8 1.7 1.8 1.7z"></path>
                                    </svg>
                                </span>
                                <h3 className="w-100 mb-0 danger-text">Exit group</h3>
                            </div>
                        </div>

                        <div style={{background: '#131c21', marginBottom: '10px', color: '#ef697a'}}>
                            <div className="d-flex cursor-pointer options more" >
                                <span className="me-3">
                                    <svg viewBox="0 0 24 24" width="24" height="24" >
                                        <path fill="currentColor" d="M14.091 4.2H6.318c-.691 0-1.295.432-1.555 1.036l-2.591 6.132c-.086.173-.172.346-.172.605V13.7c0 .95.777 1.727 1.727 1.727h5.441L8.305 19.4v.259c0 .345.173.691.345.95l.95.864 5.7-5.7c.345-.345.518-.777.518-1.209V5.927c0-.95-.777-1.727-1.727-1.727zm3.454 0v10.364H21V4.2h-3.455z" id="thumb-down"></path>
                                    </svg>
                                </span>
                                <h3 className="w-100 mb-0 danger-text">Report group</h3>
                            </div>
                        </div>
                    </div>) 
                    :
                    (<div>
                        <div style={{background: '#131c21', marginBottom: '10px', color: '#ef697a'}}>
                            <div className="d-flex cursor-pointer options more">
                                <span className="me-3">
                                    <svg viewBox="0 0 24 24" width="24" height="24" >
                                        <path fill="currentColor" d="M12 2.8c-5.3 0-9.7 4.3-9.7 9.7s4.3 9.7 9.7 9.7 9.7-4.3 9.7-9.7-4.4-9.7-9.7-9.7zm-7.3 9.7c0-4 3.3-7.3 7.3-7.3 1.6 0 3.1.5 4.3 1.4L6.1 16.8c-.9-1.2-1.4-2.7-1.4-4.3zm7.3 7.3c-1.6 0-3-.5-4.2-1.4L17.9 8.3c.9 1.2 1.4 2.6 1.4 4.2 0 4-3.3 7.3-7.3 7.3z"></path>
                                    </svg>
                                </span>
                                <h3 className="w-100 mb-0 danger-text">Block</h3>
                            </div>
                        </div>

                        <div style={{background: '#131c21', marginBottom: '10px', color: '#ef697a'}}>
                            <div className="d-flex cursor-pointer options more" >
                                <span className="me-3">
                                    <svg viewBox="0 0 24 24" width="24" height="24" >
                                        <path fill="currentColor" d="M14.091 4.2H6.318c-.691 0-1.295.432-1.555 1.036l-2.591 6.132c-.086.173-.172.346-.172.605V13.7c0 .95.777 1.727 1.727 1.727h5.441L8.305 19.4v.259c0 .345.173.691.345.95l.95.864 5.7-5.7c.345-.345.518-.777.518-1.209V5.927c0-.95-.777-1.727-1.727-1.727zm3.454 0v10.364H21V4.2h-3.455z" id="thumb-down"></path>
                                    </svg>
                                </span>
                                <h3 className="w-100 mb-0 danger-text">Report contact</h3>
                            </div>
                        </div>

                        <div style={{background: '#131c21', marginBottom: '10px', color: '#ef697a'}}>
                            <div className="d-flex cursor-pointer options more">
                                <span className="me-3">
                                    <svg viewBox="0 0 24 24" width="24" height="24" >
                                        <path fill="currentColor" d="M6 18c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V6H6v12zM19 3h-3.5l-1-1h-5l-1 1H5v2h14V3z"></path>
                                    </svg>
                                </span>
                                <h3 className="w-100 mb-0 danger-text">Delete chat</h3>
                            </div>
                        </div>
                    </div>)
                    }
                </div>

               

                <div className="modal fade" id="contactImageModal" tabIndex="-1" aria-labelledby="contactImageModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                           
                            <div className="modal-body">
                                <img src={selectedContact.image}  draggable="false"  className="full-width cursor-pointer"/>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}
 
export default ContactDetails;