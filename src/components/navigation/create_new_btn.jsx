import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "semantic-ui-react";

const CreateBtn = () => {
  return (
    <>
    <h1>What would you like to do today?</h1>
      <Button>
        <NavLink className="p-2" to="/createTodo" exact>
          New Task
        </NavLink>
      </Button>
      <Button>
        <NavLink className="p-2" to="/showTodoList" exact>
          View Todos
        </NavLink>
      </Button>
    </>
  );
};

export default CreateBtn;
