import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [item, setItem] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = { id: todo.length + 1, task: item };
    setTodo([...todo, newItem]);
    setItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={item}
        onChange={(event) => setItem(event.target.value)}
      ></input>

      <button type="submit">Add Item</button>
      <ol>
        {todo.map((task) => (
          <li key={task.id}>
            {task.task} <input type="checkbox" key={task.id}></input>
          </li>
        ))}
      </ol>
    </form>
  );
}

export default Todo;
