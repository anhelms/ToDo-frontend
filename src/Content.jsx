import axios from "axios";
import { ToDosNew } from "./ToDosNew";
import { ToDosIndex } from "./ToDosIndex";
import { ToDosShow } from "./ToDosShow";
import { Modal } from "./Modal";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function Content() {
  const [toDos, setToDos] = useState([]);
  const [currentToDo, setCurrentToDo] = useState({});

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
    axios.delete(`http://localhost:3000/to_dos/${toDo.id}.json`).then((response) => {
      setToDos(toDos.filter((p) => p.id !== toDo.id));
      handleClose();
    });
  };

  return (
    <main>
      <Routes>
        <Route path="/to-dos/new" element={<ToDosNew onCreateToDo={handleCreateToDo} />} />
        <Route path="/to-dos" element={<ToDosIndex toDos={toDos} />} />
        <Route path="/" element={<ToDosIndex toDos={toDos} />} />
      </Routes>
      <Modal>
        <ToDosShow toDo={currentToDo} onUpdateToDo={handleUpdateToDo} onDestroyToDo={handleDestroyToDo} />
      </Modal>
    </main>
  );
}
