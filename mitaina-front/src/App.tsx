import "./App.css";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

interface Users {
  id?: number;
  email?: string;
  name?: string;
}

function App() {
  const [message, setMessage] = useState("");
  const [users, setUsers]: [Users[], Dispatch<SetStateAction<[]>>] = useState(
    []
  );
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);
  console.log(message);

  return (
    <div className="App">
      <p>{message}</p>
      {users.length && <p>{users[0].name}</p>}
    </div>
  );
}

export default App;
