export function ToDosIndex(props) {
  console.log(props);
  return (
    <div>
      <h1>All ToDos</h1>
      {props.toDos.map((toDo) => (
        <div key={toDo.id}>
          <h2>{toDo.title}</h2>
          <p>{toDo.user_id}</p>
          <p>{toDo.description}</p>
          <p>{toDo.deadline}</p>
          <p>{toDo.completed}</p>
          <label>
            Completed:
            <input type="checkbox" checked={toDo.completed} />
          </label>
          <button onClick={() => props.onShowToDo(toDo)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
