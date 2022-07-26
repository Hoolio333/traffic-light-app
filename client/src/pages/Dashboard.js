import TinderCard from "react-tinder-card";
import { useState } from "react";
import ChatContainer from "../ChatContainer";

const Dashboard = () => {
  const characters = [
    {
      name: "Richard Hendricks",
      url: "https://scontent.fiom1-1.fna.fbcdn.net/v/t1.15752-9/295531818_1083117802309913_5638759651114782723_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=DIm1nfjg6PwAX_X07Dq&_nc_ht=scontent.fiom1-1.fna&oh=03_AVKhFc6yRACIEvqgZ7X4y1S8ZMQ889Dz5LKXh-8Lq2RSGA&oe=63043A95",
    },
    {
      name: "Erlich Bachman",
      url: "https://scontent.fiom1-1.fna.fbcdn.net/v/t1.15752-9/295531818_1083117802309913_5638759651114782723_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=DIm1nfjg6PwAX_X07Dq&_nc_ht=scontent.fiom1-1.fna&oh=03_AVKhFc6yRACIEvqgZ7X4y1S8ZMQ889Dz5LKXh-8Lq2RSGA&oe=63043A95",
    },
    {
      name: "Monica Hall",
      url: "https://scontent.fiom1-1.fna.fbcdn.net/v/t1.15752-9/295531818_1083117802309913_5638759651114782723_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=DIm1nfjg6PwAX_X07Dq&_nc_ht=scontent.fiom1-1.fna&oh=03_AVKhFc6yRACIEvqgZ7X4y1S8ZMQ889Dz5LKXh-8Lq2RSGA&oe=63043A95",
    },
    {
      name: "Jared Dunn",
      url: "https://scontent.fiom1-1.fna.fbcdn.net/v/t1.15752-9/295531818_1083117802309913_5638759651114782723_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=DIm1nfjg6PwAX_X07Dq&_nc_ht=scontent.fiom1-1.fna&oh=03_AVKhFc6yRACIEvqgZ7X4y1S8ZMQ889Dz5LKXh-8Lq2RSGA&oe=63043A95",
    },
    {
      name: "Dinesh Chugtai",
      url: "https://scontent.fiom1-1.fna.fbcdn.net/v/t1.15752-9/295531818_1083117802309913_5638759651114782723_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=DIm1nfjg6PwAX_X07Dq&_nc_ht=scontent.fiom1-1.fna&oh=03_AVKhFc6yRACIEvqgZ7X4y1S8ZMQ889Dz5LKXh-8Lq2RSGA&oe=63043A95",
    },
  ];

  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="dashboard">
      <ChatContainer />
      <div className="swipe-container">
        <div className="card-container">
          {characters.map((character) => (
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                style={{ backgroundImage: "url(" + character.url + ")" }}
                className="card"
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
          <div className="swipe-info">
            {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
