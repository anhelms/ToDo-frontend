import { ToDosNew } from "./ToDosNew";
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  const [toDos, setToDos] = useState();

  const handleCreateToDo = (params) => {
    axios.get("http://localhost:3000/to_dos.json", params).then((response) => {
      console.log(response.data);
      setToDos([...toDos, response.data]);
    });
  };

  return (
    <main>
      <h1>Welcome to React!</h1>
      <ToDosNew onCreateToDo={handleCreateToDo} />
    </main>
  );
}
