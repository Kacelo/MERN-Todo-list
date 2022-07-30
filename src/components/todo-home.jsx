import React from "react";
import { CreateTodo } from "./createTodo";
const TodoHome = () => {
  return (
    <div className="todo-home">
      <div className="todo-home-welcome-message">
        <h1 className="todo-home-welcome-message-text">
          keep track of your daily tasks
        </h1>
      </div>
      <div className="TodoHomeButtons-container">
        <CreateTodo/>
      </div>
    </div>
  );
};

export default TodoHome;
