import { useState } from "react";
import "./ToDo.css";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [item, setItem] = useState("");
  const [warning, setWarning] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = { id: todo.length + 1, task: item };
    if (item === "") {
      setWarning("Input cannot be empty!");
    } else {
      setTodo([...todo, newItem]);
      setItem("");
      setWarning("");
    }
  };
  const handleDelete = (event) => {
    event.preventDefault();
    setTodo([]);
    setItem("");
    setWarning("");
  };

  return (
    <form>
      <p>{warning}</p>
      <div className="input-section">
        <input
          type="text"
          value={item}
          onChange={(event) => setItem(event.target.value)}
          required
        ></input>

        <button type="submit" onClick={handleSubmit}>
          Add Item
        </button>
      </div>
      <ol>
        {todo.map((task) => (
          <li key={task.id}>
            <input type="checkbox" key={task.id} id="task"></input>
            <label htmlFor="task">{task.task}</label>
          </li>
        ))}
      </ol>
      <button className="delete" type="submit" onClick={handleDelete}>
        Delete List
      </button>
    </form>
  );
}

export default Todo;
