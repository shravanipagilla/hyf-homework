import React, { useEffect, useContext } from "react";
import { CreatingUserContext } from "./CreateContext";

const HyfRepos = () => {
  const usingRepoContext = useContext(CreatingUserContext);
  const repoUrl = "https://api.github.com/users/HackYourFuture-CPH/repos";
  useEffect(() => {
    fetch(repoUrl)
      .then((res) => res.json())
      .then((data) => usingRepoContext.setRepos(data));
  });
  return (
    <div>
      <h1>Names of Repos in HackYourFuture-CPH</h1>
      <ul>
        {usingRepoContext.repos &&
          usingRepoContext.repos.map((repo) => (
            <li key={repo.id}> {repo.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default HyfRepos;
