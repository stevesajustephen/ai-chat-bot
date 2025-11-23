import React, { useState } from "react";
import "./ChatBotApp.css";

interface IChatBotAppProps {
  goToStartPage: () => void;
  chats: unknown[];
  setChats: () => void;
}

const ChatBotApp = ({ goToStartPage, chats, setChats }: IChatBotAppProps) => {
  const [inputValue, setInputValue] = useState("");
  const [currentChat, setCurrentChat] = useState(chats[0] ?? {});

  function handleInputChange(e) {
    setInputValue(e.target?.value);
    console.log(e.target.value);
  }

  function sendMessage() {
    if (inputValue.trim() == "") return;
    else {
      const updatedCurrentChat = structuredClone(currentChat);
      updatedCurrentChat?.messages?.push(inputValue);
      setCurrentChat(updatedCurrentChat);
      setInputValue("");

      console.log(currentChat?.messages);
    }
  }

  return (
    <div className="chat-app">
      <div className="chat-list">
        <div className="chat-list-header">
          <h2>Chat List</h2>
          <i className="bx bx-edit-alt">New Chat</i>
        </div>
        {chats.map((e, i) => {
          return (
            <div className="chat-list-item active">
              <h4>{e?.id}</h4>
              <i className="bx bx-x cicle"></i>
            </div>
          );
        })}
      </div>

      <div className="chat-window">
        <div className="chat-title">
          <h3>Chat with AI</h3>
          <i onClick={() => goToStartPage()} className="bx bx-arrow-back arrow">
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
            onChange={handleInputChange}
            value={inputValue}
            type="text"
            className="msg-input"
            placeholder="type a message..."
          />
          <i onClick={sendMessage} className="fa-solid fa-paper-plane"></i>
        </form>
      </div>
    </div>
  );
};

export default ChatBotApp;
