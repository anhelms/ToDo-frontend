export function ToDosShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateToDo(props.toDo.id, params, () => event.target.reset());
  };

  return (
    <div>
      <h1>TEST</h1>
      <form onSubmit={handleSubmit}>
        <input defaultValue={props.toDo.title} name="title" type="text" placeholder="Task" />{" "}
        <button type="submit"> Update Task</button>
      </form>
    </div>
  );
}
