import "./App.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ShowTodoList } from "./components/showTodoList";
import { CreateTodo } from "./components/createTodo";
import "./components/styles.scss";
import { getCurrentdate } from "./helpers/current-day";
import {greetUser} from "./helpers/greeting"
import Home from "./components/home";
function App() {
  console.log(greetUser());
  return (
    <div className="App">
     
      {/* 
        <Routes>
          <Route exact path="/" element={<ShowTodoList/>} />
          <Route path="/create-todo" exact component={<CreateTodo/>}/>
        </Routes> */}
        <Home/>
      <CreateTodo />
      <ShowTodoList />
    </div>
  );
}

export default App;
