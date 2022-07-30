import React from "react";
import { NavLink } from "react-router-dom";
import { Button} from "semantic-ui-react";

const TodoHomeButtons = () => {
  return (
    <div>
      <Button className="todoHomeButtons">
        <NavLink className="p-2" to="/createTodo" exact>
          New Task
        </NavLink>
      </Button>
      <Button className="todoHomeButtons">
        <NavLink className="p-2" to="/showTodoList" exact>
          View Todos
        </NavLink>
      </Button>
    </div>
  );
};

export default TodoHomeButtons;
