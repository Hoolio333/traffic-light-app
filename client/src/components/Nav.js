import main from "../images/main.gif";
import main2 from "../images/main2.gif";

const Nav = ({ minimal, setShowModal, showModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  const authToken = false;

  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? main2 : main} />
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
