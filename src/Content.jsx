import axios from "axios";
import { useState, useEffect } from "react";
import { ToDosIndex } from "./ToDosIndex";

export function Content() {
    const [todos, setToDos] = useState([]);

    const handleIndex

    return (
      <div>
        <ToDosIndex todos={todos} />
      </div>
    )
}