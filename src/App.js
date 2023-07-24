import logo from './logo.svg';
import './normal.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <h1>Pick Model</h1>
        <div className="side-menu-button">
          <span>+</span>
          Get Started!
        </div>

      </aside>
      <section className='chatbox'>
        <div className="chat-log">
          <div className="chat-message">
            <div className="chat-message-center">
                <div className="avatar">Knotz</div>
                <div className="message">Genius Bot</div>
            </div>
          </div>
        </div>
        <div className="chat-input-holder">
          <textarea className='chat-input-textarea' rows='1' placeholder='Type Your Prompt Here'></textarea>
        </div>
      </section>
    </div>
  );
}

export default App;
