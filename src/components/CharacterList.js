import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(results => {
        console.log(results.data.results);
        setCharacters(results.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <section className="character-list">
      {characters.map(character => {
        return (
          <CharacterCard
            id={character.id}
            name={character.name}
            image={character.image}
            species={character.species}
            status={character.status}
          />
        );
      })}
    </section>
  );
}
