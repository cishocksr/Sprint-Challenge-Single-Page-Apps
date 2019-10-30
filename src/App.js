import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import { Route, Link } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterCard from "./components/CharacterCard";
import SearchForm from "./components/SearchForm";
import "./styles.css";

export default function App() {
  return (
    <main className="App">
      <nav>
        <Header />
        <div className="nav-links">
          <Link to="/">Welcome</Link>
          <Link to="/characters">Chracters</Link>
          <Link to="/item-list/search">Search</Link>
        </div>
      </nav>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters/" component={CharacterList} />
      <Route exact path="/search" component={SearchForm} />
      <Route path="/search/:id" />
    </main>
  );
}
