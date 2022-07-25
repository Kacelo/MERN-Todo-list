import "./App.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ShowTodoList } from "./components/showTodoList";
import { CreateTodo } from "./components/createTodo";
import "./components/styles.scss";
import { getCurrentdate } from "./helpers/current-day";
function App() {
  console.log(getCurrentdate());
  return (
    <div className="App">
      hello summer
      {/* 
        <Routes>
          <Route exact path="/" element={<ShowTodoList/>} />
          <Route path="/create-todo" exact component={<CreateTodo/>}/>
        </Routes> */}
        <h3>{getCurrentdate()}</h3>
      <CreateTodo />
      <ShowTodoList />
    </div>
  );
}

export default App;
