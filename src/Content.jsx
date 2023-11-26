import { ToDosNew } from "./ToDosNew";
import { ToDosIndex } from "./ToDosIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { ToDosShow } from "./ToDosShow";

export function Content() {
  const [toDos, setToDos] = useState([]);
  const [currentToDo, setCurrenToDo] = useState({});
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

  const handleUpdateToDo = (id, params, successCallback) => {
    console.log("handleUpdateToDo", params);
    axios.patch(`http://localhost:3000/to_dos/${id}.json`, params).then((response) => {
      setToDos(
        toDos.map((toDo) => {
          if (toDo.id === response.data.id) {
            return response.data;
          } else {
            return toDo;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  return (
    <main>
      <ToDosNew onCreateToDo={handleCreateToDo} />
      <ToDosShow toDo={currentToDo} onUpdateToDo={handleUpdateToDo} />
      <ToDosIndex toDos={toDos} />
    </main>
  );
}
