import React, { useContext, useEffect } from "react";
import { CreatingUserContext } from "./CreateContext";

const Github_URL = "https://api.github.com/search/users?q=";

const UserSearch = () => {
  const usingUserContext = useContext(CreatingUserContext);

  useEffect(() => {
    fetchGithubUsers();
  }, [usingUserContext.input]);

  const fetchGithubUsers = async () => {
    const url = Github_URL + usingUserContext.input;
    try {
      const fetchUsers = await fetch(url);
      const usersData = await fetchUsers.json();

      if (usersData.items) {
        usingUserContext.setIsLoading(false);

        return usingUserContext.setUsers(usersData.items);
      } else if (usersData.message) {
        usingUserContext.setIsLoading(false);
        usingUserContext.setMessage(usersData.message);
      }
    } catch (error) {
      usingUserContext.setIsLoading(false);
      usingUserContext.setError(error);
    }
  };

  return (
    <div>
      <div>
        <h1>Github User Searcher</h1>
        <input
          type="text"
          placeholder="search for user..."
          onChange={usingUserContext.onChange}
        ></input>
      </div>
      <div>
        {usingUserContext.isLoading && <p>loading...</p>}
        {usingUserContext.message && <p>{usingUserContext.message}</p>}
        {usingUserContext.users
          ? usingUserContext.users.map((user) => (
              <li key={user.id}>{user.login}</li>
            ))
          : usingUserContext.input === "" && <p>No results found</p>}
        {usingUserContext.error && <h3>{usingUserContext.error}</h3>}
      </div>
    </div>
  );
};

export default UserSearch;
