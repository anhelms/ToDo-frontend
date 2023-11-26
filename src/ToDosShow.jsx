export function ToDosShow(props) {
  return (
    <div>
      <h1>TEST</h1>
      <form>
        <input defaultValue={props.toDo.title} name="title" type="text" placeholder="Task" />{" "}
      </form>
    </div>
  );
}
