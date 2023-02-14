import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  AiOutlineSchedule,
  AiFillCheckCircle,
  AiOutlineOrderedList,
} from "react-icons/ai";
import Todos from "./Todos";

function TodoList() {
  const todos = useSelector((state) => state.todos);

  const [filter, setFilter] = useState("all");

  const filterTodos = todos.filter((todo) => {
    if (filter === "all") {
      return true;
    } else if (filter === "complete") {
      return todo.complete;
    } else if (filter === "incomplete") {
      return !todo.complete;
    }
  });

  return (
    <>
      {/* filter the group list */}
      <div className=" text-white px-2 w-[100%] h-[100px] bg-red-400 flex items-center justify-around ">
        <div
          onClick={() => setFilter("incomplete")}
          className="
        hover:border-b-2 hover:border-b-blue-500  w-[200px] mt-1 h-full
        flex flex-col items-center gap-2 cursor-pointer hover:font-bold active:font-bold duration-300"
        >
          <AiOutlineSchedule size={40} />
          <p className="md:text-2xl sm:text-xl">TO-DO</p>
        </div>
        <div
          onClick={() => setFilter("complete")}
          className="
        hover:border-b-2 hover:border-b-blue-500  w-[200px] mt-1 h-full
        flex flex-col items-center gap-2 cursor-pointer hover:font-bold active:font-bold duration-200"
        >
          <AiFillCheckCircle size={40} />
          <p className="md:text-2xl sm:text-xl">DONE</p>
        </div>
        <div
          onClick={() => setFilter("all")}
          className="
        hover:border-b-2 hover:border-b-blue-500  w-[200px] mt-1 h-full 
        flex flex-col items-center gap-2 cursor-pointer hover:font-bold active:font-bold duration-200"
        >
          <AiOutlineOrderedList size={40} />
          <p className="md:text-2xl sm:text-xl">
            ALL <span>({todos.length})</span>
          </p>
        </div>
      </div>

      {/* show the todos lists */}
      <Todos filterTodos={filterTodos} />
    </>
  );
}

export default TodoList;
