import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShowTodoList } from "./components/showTodoList";
import { CreateTodo } from "./components/createTodo";
import "./components/styles.scss";
import Home from "./components/home";
import TodoHome from "./components/todo-home";
function App() {
  return (
    <Router>
      <div className="App">
        {/* <CreateButton /> */}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/showTodoList" element={<ShowTodoList />} />
          <Route path="/createTodo" element={<CreateTodo />} />
          <Route path="/todo-home"  element={<TodoHome/>}/>
        </Routes>
      </div>
      {/* <CreateTodo/> */}
    </Router>
  );
}

export default App;
