import { useState } from "react";
import "./App.css";
import ChatBotApp from "./components/ChatBotApp";
import ChatBotStart from "./components/ChatBotStart";

function App() {
  const [isStartPage, setStartPage] = useState(true);
  return (
    <div className="container">
      {isStartPage ? (
        <ChatBotStart setStartPage={setStartPage} />
      ) : (
        <ChatBotApp setStartPage={setStartPage} />
      )}
    </div>
  );
}

export default App;
