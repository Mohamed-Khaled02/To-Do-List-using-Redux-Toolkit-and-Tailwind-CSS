import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../featurs/TodoSlice";

function AddTodo() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("please enter text");
    } else {
      dispatch(addTodo(text));
      setText("");
    }
  };
  return (
    <div className="flex justify-center items-center py-12 mx-4">
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Type task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="bg-red-400 text-white text-xl shadow-2xl px-5 py-4 ml-1 sm:mt-3 rounded-md"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
