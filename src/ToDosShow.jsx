export function ToDosShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateToDo(props.toDo.id, params, () => event.target.reset());
  };

  return (
    <div>
      <h1> Information</h1>
      <p>Title: {props.toDo.title}</p>
      <p>Description: {props.toDo.description}</p>
      <p>Deadline: {props.toDo.deadline}</p>
      <p>Completed?: {props.toDo.completed ? "Yes" : "No"}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input defaultValue={props.toDo.title} className="form-control" name="title" type="text" />
        </div>
        <div className="form-group">
          <input defaultValue={props.toDo.description} className="form-control" name="description" type="text" />
        </div>
        <div className="form-group">
          <input defaultValue={props.toDo.deadline} className="form-control" name="deadline" type="date" />
        </div>
        <div className="form-group">
          <input defaultValue={props.toDo.completed} name="completed" type="checkbox" />
        </div>
        <button type="submit"> Update Task</button>
      </form>
    </div>
  );
}
