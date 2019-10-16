import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import { Route, Link } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterCard from "./components/CharacterCard";

export default function App() {
  return (
    <main>
      {/* <Header />
      <CharacterList /> */}

      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters/" component={CharacterList} />
    </main>
  );
}
