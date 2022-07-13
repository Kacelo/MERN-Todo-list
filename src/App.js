import "./App.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ShowTodoList } from "./components/showTodoList";
import { CreateTodo } from "./components/createTodo";
import "./components/styles.scss";
function App() {
  return (
    <div className="App">
      hello summer
{/* 
        <Routes>
          <Route exact path="/" element={<ShowTodoList/>} />
          <Route path="/create-todo" exact component={<CreateTodo/>}/>
        </Routes> */}
      <CreateTodo />
      <ShowTodoList />
    </div>
  );
}

export default App;
