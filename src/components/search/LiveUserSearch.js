import React, { useState, useEffect } from "react";
import axios from "axios";

const LiveUserSearch = ({ input }) => {
  const [foundUsers, setFoundUsers] = useState(undefined);
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    if (input.length > 2) {
      axios
        .get("https://api.github.com/search/users?q=" + input + "&per_page=5")
        .then(function (response) {
          setFoundUsers(response.data.items);
          setloading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return null;
  }
  return (
    <div>
      <div className="title">
        <h4>Related Users</h4>
      </div>
      <div className="live-search-group">
        {foundUsers.map((user, index) => {
          return (
            <div className="mr-2 item" key={index}>
              <img
                className="avatar mr-1"
                src={user.avatar_url}
                alt="user pic"
              />
              {user.login}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LiveUserSearch;
