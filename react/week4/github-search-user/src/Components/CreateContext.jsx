import React, { createContext, useState } from "react";

// @ts-ignore
export const CreatingUserContext = createContext();

const GithubSearchContext = ({ children }) => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);

  const [repos, setRepos] = useState([]);

  const contextValues = {
    input,
    onChange: (e) => {
      e.preventDefault();
      setInput(e.target.value);
    },
    isLoading,
    setIsLoading,
    error,
    setError,
    users,
    setUsers,
    message,
    setMessage,
    repos,
    setRepos,
  };
  return (
    <CreatingUserContext.Provider value={contextValues}>
      {children}
    </CreatingUserContext.Provider>
  );
};
export default GithubSearchContext;
