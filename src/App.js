import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShowTodoList } from "./components/showTodoList";
import { CreateTodo } from "./components/createTodo";
import CreateButton from "./components/navigation/create_new_btn"
import "./components/styles.scss";
function App() {
  return (
    <Router>
    <div className="App">
      
        <CreateButton/>
        <Routes>
          <Route exact path="/showTodoList" element={<ShowTodoList/>} />
          <Route path="/createTodo" element={<CreateTodo/>} />
        </Routes>
        </div>
        {/* <CreateTodo/> */}
      </Router>
      
    
  );
}

export default App;
