import React from "react";

const SinglePlayer = (props) => {
  const { price, picture, name, job, age, about } = props.player;
  return (
    <div>
      <img src={picture} alt="" />
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Nationalaty:</p>
      <p>About: {about} </p>
      <p>Role:{job}</p>
      <p>Price:${price}</p>
    </div>
  );
};

export default SinglePlayer;
