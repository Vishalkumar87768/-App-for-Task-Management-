import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";
import TodoItem0 from "./TodoItem0";
import styles from "./TodoItems.module.css";
const TodoItems = () => {
  
   const {todoItems } =useContext(TodoItemsContext)
   
   
   console.log({todoItems})
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem0
          key={item.name}
          todoDate={item.duedate}
          todoName={item.name}
          
        ></TodoItem0>
      ))}
    </div>
  );
};
export default TodoItems;
