import { useState } from "react";
import "./ToDo.css";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [item, setItem] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = { id: todo.length + 1, task: item };
    setTodo([...todo, newItem]);
    setItem("");
  };
  const handleDelete = (event) => {
    event.preventDefault();
    setTodo([]);
    setItem("");
  };

  return (
    <form>
      <input
        value={item}
        onChange={(event) => setItem(event.target.value)}
      ></input>

      <button type="submit" onClick={handleSubmit}>
        Add Item
      </button>
      <ol>
        {todo.map((task) => (
          <li key={task.id}>
            {task.task} <input type="checkbox" key={task.id}></input>
          </li>
        ))}
      </ol>
      <button type="submit" onClick={handleDelete}>
        Delete List
      </button>
    </form>
  );
}

export default Todo;
