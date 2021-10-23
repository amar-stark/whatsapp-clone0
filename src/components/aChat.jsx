import React from 'react';

class AChat extends React.Component {
    render() { 
        const message = this.props.message;

        return (
        <React.Fragment>
            <div className={message.id%3 === 0 ? "you" : "sender"}>
                <p>
                    <span> {message.message}</span>
                </p>
            </div>
        </React.Fragment>);
    }
}
 
export default AChat;