import React from "react";

export default function CharacterCard(props) {
  return (
    <div key={props.id}>
      <h1>{props.name}</h1>
      <img src={props.image} alt={props.name} />
      <p>{props.species}</p>
      <p>{props.status}</p>
    </div>
  );
}
