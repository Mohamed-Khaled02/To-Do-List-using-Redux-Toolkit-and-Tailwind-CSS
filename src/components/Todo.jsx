import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../featurs/TodoSlice";
import { toggleComplete } from "../featurs/TodoSlice";

function Todo({ text, id, complete }) {
  const dispatch = useDispatch();

  const handelToggleComplete = () => {
    dispatch(toggleComplete(id));
  };

  return (
    <div className="flex p-6 justify-between items-center border border-b-gray-300">
      <p
        onClick={handelToggleComplete}
        className={`
         ${complete ? "bg-gray-200 text-red-400" : ""}
         text-2xl hover:text-red-400 hover:bg-gray-200 p-3 h-full w-full hover:cursor-pointer duration-200 `}
      >
        {text}
      </p>
      <div>
        <AiFillDelete
          onClick={() => dispatch(deleteTodo(id))}
          size="30px"
          className="cursor-pointer hover:text-red-500 duration-200"
        />
      </div>
    </div>
  );
}

export default Todo;
