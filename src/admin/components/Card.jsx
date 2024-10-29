import React from "react";

export default function Card({ id, title, children, percentage, completePer }) {
  return (
    <div className="adminCardContainer" key={id}>
      <div className="cardItem one">
        <h4>{title}</h4>
        <div id="iconB"> {children}</div>
      </div>
      <div className=" cardItem two">
        <h1>{percentage}</h1>
        <p>{`${completePer} complete`}</p>
      </div>
    </div>
  );
}
