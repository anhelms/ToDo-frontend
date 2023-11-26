export function ToDosNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateToDo(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>New ToDo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          User_id: <input name="user_id" type="integer" />
        </div>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Deadline: <input name="deadline" type="date" />
        </div>
        <div>
          Completed: <input name="completed" type="checkbox" />
        </div>
        <div>
          <button className="button" type="submit">Create ToDo</button>
        </div>
      </form>
    </div>
  );
}
