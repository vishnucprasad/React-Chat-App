import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import NewChatForm from './components/NewChatForm';

const App = () => {
    const { REACT_APP_PROJECT_ID } = process.env;

    if (!localStorage.getItem('userName')) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID={REACT_APP_PROJECT_ID}
            userName={localStorage.getItem('userName')}
            userSecret={localStorage.getItem('password')}
            renderNewChatForm={(chatAppProps) => <NewChatForm {...chatAppProps} />}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;