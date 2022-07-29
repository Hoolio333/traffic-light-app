import ChatHeader from "./ChatHeader";
import MatchesDisplay from "./MatchesDisplay";
import ChatDisplay from "./ChatDisplay";
import { useState } from "react";

const ChatContainer = ({ user }) => {
  const [clickedUser, setClickedUser] = useState(null);

  return (
    <div className="chat-container">
      <ChatHeader user={user} />

      <div className="options-gap">
        <button className="option" onClick={() => setClickedUser(null)}>
          Cross🚦ngs
        </button>
        <button className="option" disabled={!clickedUser}>
          S🚦gnals
        </button>
      </div>

      {!clickedUser && (
        <MatchesDisplay
          matches={user.matches}
          setClickedUser={setClickedUser}
        />
      )}

      {clickedUser && <ChatDisplay user={user} clickedUser={clickedUser} />}
    </div>
  );
};

export default ChatContainer;
