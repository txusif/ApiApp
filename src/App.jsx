import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
// import contacts from "../contacts";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users?page=1");
      // console.log(response.data.data);
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div>
      <h1 className="heading">React WebApp</h1>
      <button className="btn" onClick={getUsers}>
        Get Users
      </button>
      <div className="card-container">
        {users.map((user) => (
          <Card key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
}

export default App;