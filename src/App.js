
import './App.scss';

import { BrowserRouter, Route, Routes,Switch } from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import { ShowTodoList } from "./components/showTodoList";
import { CreateTodo } from "./components/createTodo";
import './components/styles.scss'
function App() {
  return (
    <div className="App">
      hello summer
      {/* <BrowserRouter> */}
     {/* <Switch> */}
      {/* <Routes>
      <Route path="/" element={<ShowTodoList/>} />
      <Route path="/create-todo">
<CreateTodo/>
      </Route>
      <Route path="/create-todo" element={<CreateTodo/>} />
      </Routes> */}
      {/* </Switch> */}
      
                
            {/* </BrowserRouter> */}
            
            <CreateTodo />
            <ShowTodoList />
    </div>
  );
}

export default App;
