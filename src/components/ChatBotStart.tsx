import React from "react";
import "./ChatBotStart.css";

interface IStartPageProps {
  beginChatSession: () => void;
}

const ChatBotStart = ({ beginChatSession }: IStartPageProps) => {
  return (
    <div className="start-page">
      <button
        className="start-page-btn"
        onClick={() => {
          beginChatSession();
        }}
      >
        Chat AI
      </button>
    </div>
  );
};

export default ChatBotStart;
