import { useContext } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { TodoItemsContext } from "../store/todo-item-store";
function TodoItem0({todoName,todoDate}){
 const {deleteItem}=useContext(TodoItemsContext)
  
return (
<div className="container ">
        <div className="row kg-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger kg-button" onClick={()=>deleteItem(todoName)}>
            <RiDeleteBin2Line />
            </button>
          </div>
        </div>
        </div>
);
}
export default TodoItem0;