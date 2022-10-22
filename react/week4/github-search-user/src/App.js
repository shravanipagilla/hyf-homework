import React from "react";
import "./App.css";
import GithubSearchContext from "./Components/CreateContext";
import HyfRepos from "./Components/HyfRepos";
import UserSearch from "./Components/UserSearch";

function App() {
  return (
    <div className="container">
      <GithubSearchContext>
        <UserSearch />
        <HyfRepos />
      </GithubSearchContext>
    </div>
  );
}

export default App;
