import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import main3 from "./images/main3.gif";

const ChatHeader = ({ user }) => {
  const [userStatus, setUserStatus] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  let navigate = useNavigate();

  const logout = () => {
    removeCookie("UserId", cookies.UserId);
    removeCookie("AuthToken", cookies.AuthToken);
    // window.location.reload();
    navigate("/");
  };

  const handleClick = () => {
    navigate("/profile");
  };

  function handleChange(event) {
    const { type, value, name } = event.target;

    if (name === "love" && type === "text") {
      setUserStatus({ ...userStatus, loveStatus: value });
    }
    if (name === "social" && type === "text") {
      setUserStatus({ ...userStatus, socialStatus: value });
    }
    if (name === "business" && type === "text") {
      setUserStatus({ ...userStatus, businessStatus: value });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(userStatus);
  }

  return (
    <>
      <div className="chat-container-header-top">
        {/* <img className="logo" src={main3} /> */}

        <div className="profile-chat-header grid-two">
          <div className="img-container">
            <img
              onClick={handleClick}
              src={user.url}
              alt={"photo of " + user.first_name}
            />
          </div>
          <h3 className="chat-user-first-name">{user.first_name}</h3>
        </div>
        <i className="log-out-icon" onClick={logout}>
          <button className="logout-button">S🚦gn Out!</button>
        </i>
        <br />
      </div>
      <div className="status-color">
        <div className="love-status">
          <h3>
            🚦ove{" "}
            <input
              className="love-input"
              name="love"
              type="text"
              love="loveStatus"
              onChange={handleChange}
              value={userStatus.loveStatus}
            />
            {/* <button type="submit" onSubmit={handleSubmit}>
              
            </button> */}
            🔴
          </h3>
        </div>
        <div className="social-status">
          <h3>
            Soc🚦al
            <input
              className="social-input"
              name="social"
              type="text"
              social="socialStatus"
              onChange={handleChange}
              value={userStatus.socialStatus}
            />
            {/* <button type="submit" onSubmit={handleSubmit}>
              🟡
            </button> */}
            🟡
          </h3>
        </div>
        <div className="business-status">
          <h3>
            Bus🚦ness
            <input
              className="business-input"
              name="business"
              type="text"
              business="businessStatus"
              onChange={handleChange}
              value={userStatus.businessStatus}
            />
            {/* <button type="submit" onSubmit={handleSubmit}>
              🟢
            </button> */}
            🟢
          </h3>
        </div>
        <hr />
      </div>
    </>
  );
};

export default ChatHeader;
