import axios from "axios";
import { ToDosNew } from "./ToDosNew";
import { ToDosIndex } from "./ToDosIndex";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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

  return (
    <main>
      <Routes>
        <Route path="/to-dos/new" element={<ToDosNew onCreateToDo={handleCreateToDo} />} />
        <Route path="/to-dos" element={<ToDosIndex toDos={toDos} />} />
      </Routes>
    </main>
  );
}
