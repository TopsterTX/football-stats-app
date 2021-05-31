import React from "react";

export const Team = ({ name, id, index, img }) => {
  return (
    <li className="teams__link" key={index}>
      <span className="teams__index">{index + 1}</span>
      <img
        src={img}
        alt="&#10006;"
        width="30"
        height="30"
        className="teams__icons"
      />
      <span className="teams__name">{name}</span>
    </li>
  );
};
