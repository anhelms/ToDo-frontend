import { ToDosNew } from "./ToDosNew";
import axios from "axios";
import { useState, useEffect } from "react";
import { ToDosShow } from "./ToDosShow";

export function Content() {
  const [toDos, setToDos] = useState([]);
  const [currentToDo, setCurrenToDo] = useState({});

  const handleCreateToDo = (params) => {
    axios.get("http://localhost:3000/to_dos.json", params).then((response) => {
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
    </main>
  );
}
