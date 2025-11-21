import React from "react";
import "./ChatBotApp.css";

interface IChatBotAppProps {
  setStartPage: (value: boolean) => void;
}

const ChatBotApp = ({ setStartPage }: IChatBotAppProps) => {
  return (
    <div className="chat-app">
      <div className="chat-list">
        <div className="chat-list-header">
          <h2>Chat List</h2>
          <i className="bx bx-edit-alt" new-chat></i>
        </div>
        <div className="chat-list-item active">
          <h4>Chat 20.07.2025 12:59:42 PM</h4>
          <i className="bx bx-x cicle"></i>
        </div>

        <div className="chat-list-item">
          <h4>Chat 20.07.2025 12:59:42 PM</h4>
          <i className="bx bx-x cicle"></i>
        </div>

        <div className="chat-list-item">
          <h4>Chat 20.07.2025 12:59:42 PM</h4>
          <i className="bx bx-x cicle"></i>
        </div>
      </div>

      <div className="chat-window">
        <div className="chat-title">
          <h3>Chat with AI</h3>
          <i
            onClick={() => setStartPage(true)}
            className="bx bx-arrow-back arrow"
          >
            back
          </i>
        </div>

        <div className="chat">
          <div className="prompt">
            Hi, how are you? <span>12:59:51 PM</span>
          </div>

          <div className="response">
            Hello, this is a AI chat <span>12:59:51 PM</span>
          </div>

          <div className="typing">Typing...</div>
        </div>

        <form className="msg-form">
          <i className="fa-solid fa-face-smile emoji"></i>
          <input
            type="text"
            className="msg-input"
            placeholder="type a message..."
          />
          <i className="fa-solid fa-paper-plane"></i>
        </form>
      </div>
    </div>
  );
};

export default ChatBotApp;
