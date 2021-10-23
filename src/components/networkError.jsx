import React from 'react';

const NetworkError = (props) => {
    return ( 
        <div>
            <div style={{background: '#d7a53b', padding: '13px 12px 14px 13px', alignItems: 'center'}} className="d-flex">
                <div>
                    <span style={{color: 'rgba(241,241,242,0.8)', marginRight: '15px'}}>
                        <svg viewBox="0 0 48 48" width="48" height="48" >
                            <path fill="currentColor" d="M24.154 2C11.919 2 2 11.924 2 24.165S11.919 46.33 24.154 46.33s22.154-9.924 22.154-22.165S36.389 2 24.154 2zm-.169 32.138L12.976 19.459c3.028-2.294 6.881-3.67 11.009-3.67 4.129 0 7.982 1.376 11.009 3.67L23.985 34.138zm-.945-5.65h1.981v-1.981H23.04v1.981zm0-3.962h1.981v-5.017H23.04v5.017z"></path>
                        </svg>
                    </span>
                </div>
                <div className="d-flex" style={{flexDirection: 'column', justifyContent: 'center'}}>
                    <div style={{fontSize: '16px', lineHeight: '21px', color: 'rgba(9,14,17,0.96)'}}>
                        Computer not connected
                    </div>
                    <div className="d-flex" style={{fontSize: '14px', marginTop: '2px', lineHeight: '19px', color: 'rgba(9,14,17,0.96)', flexDirection: 'column'}}>
                        Make sure your computer has an active Internet connection. 
                        <span>
                            <a href="" style={{color: 'rgba(9,14,17,0.96)', textDecoration: 'none'}}>Reconnect</a> &nbsp;
                            <span >
                                <svg viewBox="0 0 8 12" width="8" height="12" >
                                    <path fill="currentColor" d="M2.173 1l4.584 4.725-4.615 4.615-1.103-1.103 3.512-3.512L1 2.173 2.173 1z"></path>
                                </svg>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NetworkError;