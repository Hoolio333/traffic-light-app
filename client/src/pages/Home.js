import Nav from "../components/Nav";
import AuthModal from "../components/AuthModal";
import { useState } from "react";
import { useCookies } from "react-cookie";

const Home = ({ cookies, setCookie, removeCookie }) => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  // const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const authToken = cookies.AuthToken;

  const handleClick = () => {
    if (authToken) {
      removeCookie("UserId", cookies.UserId);
      removeCookie("AuthToken", cookies.AuthToken);
      window.location.reload();
      return;
    }
    setShowModal(true);
    setIsSignUp(true);
  };

  return (
    <div className="overlay">
      <Nav
        authToken={authToken}
        minimal={false}
        setShowModal={setShowModal}
        showModal={showModal}
        setIsSignUp={setIsSignUp}
      />
      <div className="home">
        <h1 className="primary-title">
          Bus🚦ness or Pleasure?
          <div>
            🚦 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - 🚦
          </div>
          S🚦gnal your status!🔴🟡🟢
        </h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "S🚦gn Up"}
        </button>

        {showModal && (
          <AuthModal
            cookies={cookies}
            setCookie={setCookie}
            setShowModal={setShowModal}
            isSignUp={isSignUp}
          />
        )}
      </div>
    </div>
  );
};
export default Home;
