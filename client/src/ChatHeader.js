import { useCookies } from "react-cookie";

const ChatHeader = ({ user }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const logout = () => {
    removeCookie("UserId", cookies.UserId);
    removeCookie("AuthToken", cookies.AuthToken);
    window.location.reload();
  };

  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="img-container">
          <img src={user.url} alt={"photo of " + user.first_name} />
        </div>
        <h3 className="chat-user-first-name">{user.first_name}🟢</h3>
      </div>
      <i className="log-out-icon" onClick={logout}>
        <button className="logout-button">S🚦gn Out! 👋</button>
      </i>
      {/* <div>Signal</div> */}
    </div>
  );
};

export default ChatHeader;
