// importing essential hooks, components
import { useState } from "react";
import axios from "axios";
import { Form, Button, Card, Input } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

//create to do function main entry
export function CreateTodo() {
  // useState funtion to update the state of the data
  // intially set to default empty strings.
  const [data, setData] = useState({
    title: "",
    description: "",
    priority: "",
    completed: false,
  });

  //function to set the new state of the data from empty strings to real values from user
  function handleChange(e) {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  // Handle submit function to capture the new data and send it through to the api
  function handleSubmit(e) {
    e.preventDefault();

    //
    axios
      .post("http://localhost:8001/api/todo", data)
      .then((res) => {
        setData({ title: "", description: "", priority: "", completed: false });
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("Error couldn't create TODO");
        console.log(err.message);
        alert("Error couldn't create TODO", err.message);
      });
  }

  return (
    <section className="create-todo-container">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="create-todo-card-container">
        <Card centered={true} className="create-todo">
          <Form
            onSubmit={handleSubmit}
            className="form-container"
            noValidate
            size="large"
            widths="equal"
          >
            <Form.Field>
              <label className="todo-label" htmlFor="title">
                Title
              </label>
              <Input
                type="text"
                name="title"
                value={data.title}
                onChange={handleChange}
                // placeholder='title'
                className="create-todo-input"
                focus
              />
            </Form.Field>
            <Form.Field>
              <label className="todo-label" htmlFor="description">
                Description
              </label>
              <Input
                type="text"
                name="description"
                // placeholder='description'
                value={data.description}
                onChange={handleChange}
                className="create-todo-input"
                focus
              />
            </Form.Field>
            <Button type="submit" className="button primary">
              Save
            </Button>

            <Button className="button">
              <NavLink className="p-2" to="/showTodoList" exact>
                View
              </NavLink>
            </Button>
          </Form>
          <br />
        </Card>
      </div>
    </section>
  );
}
