import React from 'react';

class Profile extends React.Component {

    render() { 
        return ( 
            <section className="profile full-height">
                <header>
                    <div style={{width: '53px'}}>
                        <span className="return-from-profile" onClick={this.props.onReturnFromProfileClick}>
                            <svg viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"></path>
                            </svg>
                        </span>
                    </div>
                    <div style={{paddingTop: '2px'}}>
                        <h1>Profile</h1>
                    </div>
                </header>

                <div className="profile-details" style={{height: 'calc(100% - 108px'}}>

                    <div>
                        <div style={{margin: "28px 0"}} className="text-center">
                            <img src="https://1.bp.blogspot.com/-ceZCvjagyFw/WNAx0UcFtiI/AAAAAAAAALk/k7s5kcUBK-0jjBBxodzfSrsrUNXmoTNqACLcB/s1600/logo%2Bstark1.jpg" width="200" height="200" className="rounded-circle skeleton"/>
                        </div>
                    </div>

                    <div style={{padding: '14px 30px 25px 30px'}} className="name-section">
                        <p style={{color: '#00af9c'}}>Your Name</p>
                        <div className="d-flex" >
                            <input type="text" defaultValue="Amar Stark" className="w-100 profile-name"/>
                            <span title="Click to edit"  className="cursor-pointer flex-shrink-1">
                                <svg viewBox="0 0 24 24" width="24" height="24" >
                                    <path fill="currentColor" d="M3.95 16.7v3.4h3.4l9.8-9.9-3.4-3.4-9.8 9.9zm15.8-9.1c.4-.4.4-.9 0-1.3l-2.1-2.1c-.4-.4-.9-.4-1.3 0l-1.6 1.6 3.4 3.4 1.6-1.6z"></path>
                                </svg>
                            </span>
                        </div>
                        <div style={{marginTop: '24px'}}>
                            <span style={{color: 'rgba(241,241,242,0.45)', fontSize: '14px'}}>This is not your username or pin. This name will be visible to your WhatsApp contacts.</span>
                        </div>
                    </div>

                    <div style={{padding: '14px 30px 10px'}} className="about-section">
                        <p style={{color: '#00af9c'}}>About</p>
                        <div className="d-flex" >
                            <textarea className="w-100 about" defaultValue="Perfection is a journey.  Not a destination. And the finish line is where the journey begins">
                            
                            </textarea>
                            <span title="Click to edit"  className="cursor-pointer flex-shrink-1">
                                <svg viewBox="0 0 24 24" width="24" height="24" >
                                    <path fill="currentColor" d="M3.95 16.7v3.4h3.4l9.8-9.9-3.4-3.4-9.8 9.9zm15.8-9.1c.4-.4.4-.9 0-1.3l-2.1-2.1c-.4-.4-.9-.4-1.3 0l-1.6 1.6 3.4 3.4 1.6-1.6z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                
                </div>

            </section>
        );
    }
}
 
export default Profile;