import { IoBagAdd } from "react-icons/io5";
import { useState, useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAddButtonClicked = (e) => {
    e.preventDefault();
    if (todoName && dueDate) {
      addNewItem(todoName, dueDate);
      setTodoName("");
      setDueDate("");
    }
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
            placeholder="Enter To Do Here"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <IoBagAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
