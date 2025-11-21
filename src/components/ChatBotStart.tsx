import React from "react";
import "./ChatBotStart.css";

interface IStartPageProps {
  setStartPage: (value: boolean) => void;
}

const ChatBotStart = ({ setStartPage }: IStartPageProps) => {
  return (
    <div className="start-page">
      <button
        className="start-page-btn"
        onClick={() => {
          setStartPage(false);
        }}
      >
        Chat AI
      </button>
    </div>
  );
};

export default ChatBotStart;
