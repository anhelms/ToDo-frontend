import { ToDosNew } from "./ToDosNew";
import { ToDosIndex } from "./ToDosIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { ToDosShow } from "./ToDosShow";
import { Modal } from "./Modal";

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
      <ToDosNew onCreateToDo={handleCreateToDo} />
      <ToDosShow toDo={currentToDo} onUpdateToDo={handleUpdateToDo} onDestroyToDo={handleDestroyToDo} />
      <ToDosIndex toDos={toDos} />
      <Modal show={true}>
        <h2>To Do's</h2>
      </Modal>
    </main>
  );
}
