export function ToDosIndex(props) {
    return (
      <div>
        <h1>All ToDos</h1>
        {props.todos.map((todo) => (
        <div key={todo.user_id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <p>{todo.deadline}</p>
            <p>{todo.completed}</p>
            </div>
        ))}
      </div>
    );
  }