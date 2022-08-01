import Nav from "../components/Nav";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import App from "../App";

const Profile = ({ user }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
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
      <div className="love-status-info">
        <h4>🚦ove Status 🚦nfo 🔴:</h4>
        <input className="love-status-input" type="text" />
      </div>
      <div className="social-status-info">
        <h4>Soc🚦al Status 🚦nfo 🟡:</h4>
        <input className="social-status-input" type="text" />
      </div>
      <div className="business-status-info">
        <h4>Bus🚦ness Status 🚦nfo 🟢:</h4>
        <input className="business-status-input" type="text" />
      </div>
      <h4 className="profile-page-phot">Prof🚦le Photo:</h4>
      <img src={user.url} alt={user.first_name + " profile"} />
    </div>
  );
};
export default Profile;
