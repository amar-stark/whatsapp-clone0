import React from 'react';
import AChat from './aChat';

class ChatBody extends React.Component {

    render() { 
        const {contact} = this.props;

        let messagesArray = [];

        for (let i=1; i<= 50; i++) {
            messagesArray.push({id: i, message: `message ${i}`});
        }

        return (
            <div className="chat-body">
                {messagesArray.map(message => (<AChat key={message.id} message={message}  sender={contact.name}/>))}
            </div>
        );
    }
}
 
export default ChatBody;