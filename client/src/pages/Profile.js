import Nav from "../components/Nav";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import App from "../App";

const Profile = ({ user }) => {
  const [userInfo, setUserInfo] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  function handleChange(event) {
    const { type, value, name } = event.target;

    if (name === "love" && type === "text") {
      setUserInfo({ ...userInfo, loveStatus: value });
    }
    if (name === "social" && type === "text") {
      setUserInfo({ ...userInfo, socialStatus: value });
    }
    if (name === "business" && type === "text") {
      setUserInfo({ ...userInfo, businessStatus: value });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(userInfo);
  }

  return (
    <div className="profile">
      <Nav minimal={true} setShowModal={() => {}} showModal={false} />
      <h2 className="profile-title">
        🚦 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ Prof🚦le _ _ _ _ _ _ _ _ _ _ _
        _ _ _ _ _ _ _ _ 🚦
      </h2>
      <br />
      <h4 className="first-name-profile">F🚦rst Name: {user.first_name}</h4>
      <h4 className="birthday-profile">B🚦rthday: {user.dob_year}</h4>
      <h4 className="gender-profile">Gender: {user.gender_identity}</h4>
      <h4 className="show-me-profile">Show Me: {user.gender_interest}</h4>
      <h4 className="about-me-profile">About Me: {user.about}</h4>
      <div className="love-info">
        <h4>
          🚦ove Status 🚦nfo{" "}
          {/* <button type="submit" onSubmit={handleSubmit}>
            🔴
          </button> */}
          🔴:
        </h4>
        <input
          className="love-info-input"
          name="love"
          type="text"
          love="loveInfo"
          onChange={handleChange}
          value={userInfo.loveInfo}
        />
      </div>
      <div className="social-info">
        <h4>
          Soc🚦al Status 🚦nfo{" "}
          {/* <button type="submit" onSubmit={handleSubmit}>
            🟡
          </button> */}
          🟡:
        </h4>
        <input
          className="social-info-input"
          name="social"
          type="text"
          social="socialInfo"
          onChange={handleChange}
          value={userInfo.socialInfo}
        />
      </div>
      <div className="business-info">
        <h4>
          Bus🚦ness Status 🚦nfo{" "}
          {/* <button type="submit" onSubmit={handleSubmit}>
            🟢
          </button> */}
          🟢:
        </h4>
        <input
          className="business-info-input"
          name="business"
          type="text"
          business="businessInfo"
          onChange={handleChange}
          value={userInfo.businessInfo}
        />
      </div>
      <h4 className="profile-page-phot">Prof🚦le Photo:</h4>
      <img src={user.url} alt={user.first_name + " profile"} />
    </div>
  );
};
export default Profile;
