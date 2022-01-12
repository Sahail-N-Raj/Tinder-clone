import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Dhoni",
      url: "https://c.ndtvimg.com/2021-10/gjo8hnng_ms-dhoni-ipl_625x300_07_October_21.jpg?output-quality=80&downsize=1278:*",
    },
    {
      name: "Cristiano Ronaldo",
      url: "https://i.dailymail.co.uk/1s/2022/01/10/11/52751219-10386457-image-a-1_1641815609197.jpg",
    },
  ]);
  const swiped = (direction, nameToDelete) => {
    console.log("removing:" + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + "left the screen!");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
