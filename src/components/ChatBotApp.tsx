/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from "react";
import "./ChatBotApp.css";

interface IChatBotAppProps {
  goToStartPage: () => void;
  chats: unknown[];
  setChats: (newState: unknown) => void;
}

const ChatBotApp = ({ goToStartPage, chats, setChats }: IChatBotAppProps) => {
  const [inputValue, setInputValue] = useState("");
  const [currentChat, setCurrentChat] = useState(chats[0] ?? {});

  useEffect(() => {
    const updatedChats = chats.map((e) => {
      if (e.id === currentChat.id) {
        return currentChat;
      } else {
        return e;
      }
    });
    setChats(updatedChats);
  }, [currentChat]);

  function handleInputChange(e) {
    setInputValue(e.target?.value);
  }

  function sendMessage(): void {
    if (inputValue.trim() == "") return;
    else {
      const updatedCurrentChat = structuredClone(currentChat);
      updatedCurrentChat?.messages?.push({
        type: "prompt",
        text: inputValue,
        timestamp: new Date().toLocaleTimeString(),
      });
      setInputValue("");

      setCurrentChat(updatedCurrentChat);
    }
  }

  function newChatSession() {
    const newChat = {
      id: `chat ${new Date().toLocaleDateString(
        "en-GB"
      )} ${new Date().toLocaleTimeString()}`,
      messages: [
        {
          type: "response",
          text: "hello I am AI Agent, talk to me",
          timestamp: new Date().toLocaleTimeString(),
        },
      ],
    };
    setCurrentChat(newChat);
    setChats([newChat, ...chats]);
  }
  return (
    <div className="chat-app">
      <div className="chat-list">
        <div className="chat-list-header">
          <h2>Chat List</h2>
          <i onClick={newChatSession} className="bx bx-edit-alt"></i>
        </div>
        {chats.reverse().map((e, i) => {
          return (
            <div
              onClick={() => setCurrentChat(chats[i])}
              className={`chat-list-item ${
                e.id === currentChat.id ? "active" : ""
              }`}
            >
              <h4>{e?.id}</h4>
              <i className="bx bx-x cicle"></i>
              <input type="text" value={i} hidden />
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
          {currentChat.messages.map((e, i) => {
            return (
              <div className={e.type === "prompt" ? "prompt" : "response"}>
                {e.text} <span>{e.timestamp}</span>
              </div>
            );
          })}

          <div className="typing">Typing...</div>
        </div>

        <form className="msg-form">
          <i className="fa-solid fa-face-smile emoji"></i>
          <input
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                sendMessage();
              }
            }}
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
