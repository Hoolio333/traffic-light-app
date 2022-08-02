import main3 from "../images/main3.gif";
import main4 from "../images/main4.gif";
import name from "../images/name.png";

const Nav = ({ minimal, setShowModal, showModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  const authToken = false;

  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? main3 : main4} />
        <img className="name" src={name} />
      </div>

      {!authToken && !minimal && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Log🚦n
        </button>
      )}
    </nav>
  );
};

export default Nav;
