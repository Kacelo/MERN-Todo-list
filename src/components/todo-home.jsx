import React from "react";
import CreateBtn from "./navigation/create_new_btn";
const TodoHome = () =>{
    return(
        <div className="todo-home">
            <h2>
                Add or View your todo list
            </h2>
            <CreateBtn/>
        </div>
    )
}

export default TodoHome;