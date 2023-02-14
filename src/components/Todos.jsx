import React from "react";
import Todo from "./Todo";

function Todos({ filterTodos }) {
  return (
    <div className="flex justify-center items-center py-12">
      <ul className="lg:w-[800px] md:w-[700px] sm:w-[500px] bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {filterTodos.map((todo) => {
          const { id, text, complete } = todo;
          return <Todo key={id} id={id} text={text} complete={complete} />;
        })}
      </ul>
    </div>
  );
}

export default Todos;
