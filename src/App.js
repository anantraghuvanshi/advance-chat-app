import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';;

const App = () =>{
    return (
        <ChatEngine 
            height = '100vh'
            projectID='5895d14d-bb72-4769-b676-165ce7ba3010'
            userName= 'Anant'
            userSecret='123123'
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
        />

    );
}

export default App;