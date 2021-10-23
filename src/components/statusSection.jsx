import React from 'react';
import ContactsStatuses from './contactsStatuses';

const StatusSection = (props) => {
    const {contacts, onStatusSectionToggle, onHideStausesClick, onContactStausesClick} = props;

    return ( 
        <section className="full-height" id="status-section">
			<div className="full-height d-flex">
				<div className="full-height" style={{width: '30%', background: '#141414'}}>

                    <div className="d-flex user-no-select" style={{marginTop: '34px', height: '69px', padding: '14px'}}>
                        <div className="dp" style={{padding: '0 15px 0 3px'}}>
                            <img src="https://picsum.photos/180" draggable="false" width="40" height="40" className="rounded-circle skeleton"/>
                        </div>
                        <div className="">
                            <div className="col-flex">
                                <h6 className="name mb-1">My Status</h6>
                            </div>
                            <div className="col-flex">
                                <h6 className="recentMessage">No updates</h6>
                            </div>
                        </div>
                    </div>

                    <div style={{height: 'calc(100% - 103px)', overflowY: 'scroll'}}>

                        <div className="pt-2" style={{fontSize: '13px', padding: '14px', color: '#b3b3b3', borderTop: '1px solid #30383d'}}> 
                            <span> RECENT </span>
                        </div>

                        <ContactsStatuses statusType="recent" onContactStausesClick={onContactStausesClick} contacts={contacts}/>
                        
                        <div className="pt-2" style={{fontSize: '13px', padding: '14px', color: '#b3b3b3', borderTop: '1px solid #30383d'}}> 
                            <span> VIEWED </span>
                        </div>

                        <ContactsStatuses statusType="viewed" onContactStausesClick={onContactStausesClick} contacts={contacts}/>
                        
                        <div style={{fontSize: '13px', padding: '14px', borderTop: '1px solid #30383d'}} className="d-flex justify-content-between pt-2"> 
                            <span style={{color: '#b3b3b3'}}>MUTED</span>
                            <span style={{color: '#b3b3b3'}} className="cursor-pointer" onClick={onHideStausesClick}>HIDE</span>
                        </div>

                        <ContactsStatuses statusType="muted" onContactStausesClick={onContactStausesClick} contacts={contacts}/>

                    </div>

                </div>

                <div style={{color: '#FFFFFF', background: '#000000', position: 'absolute', right: '18px', paddingTop: '16px'}}>
                    <span className="cursor-pointer">
                        <svg viewBox="0 0 24 24" width="24" height="24" onClick={onStatusSectionToggle}>
                            <path fill="currentColor" d="M19.8 5.8l-1.6-1.6-6.2 6.2-6.2-6.2-1.6 1.6 6.2 6.2-6.2 6.2 1.6 1.6 6.2-6.2 6.2 6.2 1.6-1.6-6.2-6.2 6.2-6.2z"></path>
                        </svg>
                    </span>
                </div>

				<div className="full-height d-flex text-center" style={{width: '70%', background: '#000000', color: '##8C8C8C', alignItems: 'center'}}>
                    
                    <div style={{margin: '0 auto'}}>
                        <span>
                            <svg viewBox="0 0 80 80" width="80" height="80" style={{marginBottom: '40px', color: '#8C8C8C'}}>
                                <path fill="currentColor" d="M30.566 78.982c-.222 0-.447-.028-.672-.087C12.587 74.324.5 58.588.5 40.631c0-3.509.459-6.989 1.363-10.343a2.625 2.625 0 0 1 5.068 1.366 34.505 34.505 0 0 0-1.182 8.977c0 15.578 10.48 29.226 25.485 33.188a2.625 2.625 0 0 1-.668 5.163zm19.355-.107C67.336 74.364 79.5 58.611 79.5 40.563c0-3.477-.452-6.933-1.345-10.27a2.624 2.624 0 1 0-5.071 1.356 34.578 34.578 0 0 1 1.166 8.914c0 15.655-10.545 29.319-25.646 33.23a2.625 2.625 0 0 0 1.317 5.082zM15.482 16.5C21.968 9.901 30.628 6.267 39.867 6.267c9.143 0 17.738 3.569 24.202 10.05a2.625 2.625 0 0 0 3.717-3.708C60.329 5.135 50.413 1.018 39.867 1.018c-10.658 0-20.648 4.191-28.128 11.802a2.624 2.624 0 1 0 3.743 3.68z">
                                </path>
                            </svg>
                        </span>
                        <p style={{color: '#8C8C8C'}}>
                        Click on a contact to view their status updates
                        </p>
                    </div>
                   
				</div>
			</div>
            
		</section>
    );
}
 
export default StatusSection;