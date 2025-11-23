import { useState } from "react";
import "./App.css";
import ChatBotApp from "./components/ChatBotApp";
import ChatBotStart from "./components/ChatBotStart";

function App() {
  const [isStartPage, setStartPage] = useState(true);
  const [chats, setChats] = useState([]);
  console.log(chats);
  function goToStartPage() {
    setStartPage(true);
  }

  function beginChatSession() {
    setStartPage(false);
    console.log("beign session");
    if (!chats.length) {
      const newChat = {
        id: `chat ${new Date().toLocaleDateString(
          "en-GB"
        )} ${new Date().toLocaleTimeString()}`,
        messages: [],
      };
      setChats([newChat]);
    }
  }
  return (
    <div className="container">
      {isStartPage ? (
        <ChatBotStart beginChatSession={beginChatSession} />
      ) : (
        <ChatBotApp
          goToStartPage={goToStartPage}
          chats={chats}
          setChats={setChats}
        />
      )}
    </div>
  );
}

export default App;
