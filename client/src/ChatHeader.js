import { useCookies } from "react-cookie";

const ChatHeader = ({ user }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const logout = () => {
    removeCookie("UserId", cookies.UserId);
    removeCookie("AuthToken", cookies.AuthToken);
    window.location.reload();
  };

  return (
    <>
      <div className="chat-container-header-top">
        <div className="profile">
          <div className="img-container">
            <img src={user.url} alt={"photo of " + user.first_name} />
          </div>
          <h3 className="chat-user-first-name">{user.first_name}</h3>
        </div>
        <i className="log-out-icon" onClick={logout}>
          <button className="logout-button">S🚦gn Out!</button>
        </i>
        <br />
      </div>
      <div className="status-color">
        <div className="love">
          <h3>
            🚦ove 🔴
            <input className="love-input" type="text" />
          </h3>
        </div>
        <div className="social">
          <h3>
            Soc🚦al 🟡
            <input className="social-input" type="text" />
          </h3>
        </div>
        <div className="business">
          <h3>
            Bus🚦ness 🟢
            <input className="business-input" type="text" />
          </h3>
        </div>
        <hr />
      </div>
    </>
  );
};

export default ChatHeader;
