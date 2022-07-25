import React, { useState, useEffect } from "react";

//axios to make API calls to the backend. :)
import axios from "axios";
import {
  Form,
  Button,
  Card,
  Dropdown,
  List,
  Icon,
  Checkbox,
} from "semantic-ui-react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { UpdateTodo } from "./updateTodo";
function TodoCard({ data, handleEdit, handleDelete }) {
  // destructuring the data to display individual data types from the API
  const { _id, title, description, priority, completed } = data;

  var [status, setStatus] = useState("");

  const handleStatus = () => {
    if (completed === true) {
      setStatus("Complete");
    } else {
      setStatus("Pending");
    }
  };
  useEffect(() => {
    handleStatus();

    return () => {};
  }, [completed]);

  return (
    <div>
      <>
      
        <List>
          <List.Item key={_id} className={"created-tasks"}>
            <List.Content>
            <List.Header>{status}</List.Header>
              <List.Header>{title}</List.Header>
              <List.Description>{description}</List.Description>
              <p>{priority}</p>
              <p>{completed}</p>
            </List.Content>

            <List.Content className="button-container">
              <Button
                color="green"
                className="button"
                name={_id}
                onClick={handleEdit}
              >
                <Icon name="edit" />
              </Button>
              <Button
                color="red"
                className="button"
                name={_id}
                onClick={handleDelete}
              >
                <Icon name="trash" />
              </Button>
              <hr />
            </List.Content>
          </List.Item>
        </List>
      </>
    </div>
  );
}

// function to show completed to dos that are fetched from the database
export function ShowTodoList(data) {
  // array to store to do list
  const [todo, setTodo] = useState([]);
  //
  const [open, setOpen] = useState(false);
  //   variable to store todo ID
  const [id, setId] = useState("");
  //   variable to toggle the visibility of the update component
  const [update, setUpdate] = useState(false);

  //   hook to fetch all the created todos from the database
  useEffect(
    function () {
      axios
        .get("http://localhost:8000/api/todo")
        .then((res) => {
          console.log(res.data[0].title);
          //   storing fetched todos into the todo array
          setTodo(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    [update]
  );
  // function to allow editing a todo according to its ID
  function handleEdit(e) {
    //   setting todo id from an empty string
    setId(e.target.name);
    setOpen(true);
  }

  function handleUpdate() {
    console.log("update:", update, !update);
    // setting update to either true or false, which is initially set to false
    setUpdate(!update);
  }
  // delete function handler to delete todo according to its ID
  function handleDelete(e) {
    axios.delete(`http://localhost:8000/api/todo/${e.target.name}`);

    // updating the todo Array to show that item has been deletedp
    setTodo((data) => {
      return data.filter((todo) => todo._id !== e.target.name);
    });
  }

  // function toggleComplete(e) {
  //   todo.map((todos) => {
  //     if (todos._id === todos._id) {
  //       const updatedTodos = [];
  //     }
  //   });

  //   axios.put(`http://localhost:8000/api/todo/${e.target.name}`);

  //   try {
  //     setTodo({ complete: true });
  //   } catch (error) {}
  // }

  console.log(todo);

  function handleClose() {
    setId("");
    setOpen(false);
  }

  return (
    <>
      {/* <Router>
          <Link
            to="/create-todo"
            activeClassName="selected"
            className="button-new"
          >
          
          </Link>
        </Router> */}
      <Card centered className="cards">
        <section className="container">
          <section className="contents">
            <div className="title">
              <h1>TODO LIST</h1>
            </div>

            <List className="list-container">
              {todo.map((data) => (
                <>
                  <TodoCard
                    data={data}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                </>
              ))}
            </List>
          </section>

          {open ? (
            <section className="update-container">
              <div className="update-contents">
                <p onClick={handleClose} className="close">
                  <Icon name="chevron down">&times;</Icon>
                </p>

                <UpdateTodo
                  _id={id}
                  handleClose={handleClose}
                  handleUpdate={handleUpdate}
                />
              </div>
            </section>
          ) : (
            ""
          )}
        </section>
      </Card>
    </>
  );
}
