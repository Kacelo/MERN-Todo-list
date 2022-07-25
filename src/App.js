import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShowTodoList } from "./components/showTodoList";
import { CreateTodo } from "./components/createTodo";
import CreateButton from "./components/navigation/create_new_btn";
import "./components/styles.scss";
import { getCurrentdate } from "./helpers/current-day";
import { greetUser } from "./helpers/greeting";
import Home from "./components/home";
function App() {
  console.log(greetUser());
  return (
    <Router>
      <div className="App">
        <Home />

        <CreateButton />

        <Routes>
          <Route exact path="/showTodoList" element={<ShowTodoList />} />
          <Route path="/createTodo" element={<CreateTodo />} />
        </Routes>
      </div>
      {/* <CreateTodo/> */}
    </Router>
  );
}

export default App;
