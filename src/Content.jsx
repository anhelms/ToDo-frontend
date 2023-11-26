import { ToDosNew } from "./ToDosNew";
import { ToDosIndex } from "./ToDosIndex";
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  const [toDos, setToDos] = useState([]);

  const handleIndexToDos = () => {
    console.log("another hello");
    axios.get("http://localhost:3000/to_dos.json").then((response) => {
      console.log(response.data, "hello");
      setToDos(response.data);
    });
  };

  useEffect(handleIndexToDos, []);

  const handleCreateToDo = (params) => {
    axios.post("http://localhost:3000/to_dos.json", params).then((response) => {
      console.log(response.data);
      setToDos([...toDos, response.data]);
    });
  };

  const handleDestroyToDo = (toDo) => {
    console.log("handleDestroyToDo", toDo);
    axios.delete(`http://localhost:3000/todos/${toDo.id}.json`).then((response) => {
        setToDos(toDos.filter((p) => p.id !== toDo.id));
    });
  };

  return (
    <main>
      <h1>Welcome to React!</h1>
      <ToDosNew onCreateToDo={handleCreateToDo} />
      <ToDosIndex toDos={toDos} />
    </main>
  );
}
