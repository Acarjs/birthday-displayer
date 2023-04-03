import React from "react";

const Person = (props) => {
  const { image, name, age } = props;

  return (
    <article className="person">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </article>
  );
};

export default Person;