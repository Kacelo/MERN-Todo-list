// importing essential hooks, components
import { useState, useEffect } from "react";
import { FORM_CONSTANTS } from "../configs/constants";
import axios from "axios";
import { Form, Button, Card, Dropdown, Input } from "semantic-ui-react";
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
      .post("http://localhost:8000/api/todo", data)
      .then((res) => {
        setData({ title: "", description: "", priority: "", completed: false });
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("Error couldn't create TODO");
        console.log(err.message);
      });
  }

  return (
    <section className="container">
      <div className="create-todo-container">

      
        <Card centered={true} className="contents">
          <Form
            onSubmit={handleSubmit}
            className="form-container"
            noValidate
            size="large"
            widths="equal"
          >
            <Form.Field>
              <label className="label" htmlFor="title">
                Title
              </label>
              <Input
                type="text"
                name="title"
                value={data.title}
                onChange={handleChange}
                className="input"
                focus
              />
            </Form.Field>
            <Form.Field>
              <label className="label" htmlFor="description">
                Description
              </label>
              <Input
                type="text"
                name="description"
                value={data.description}
                onChange={handleChange}
                className="input"
                focus
              />
            </Form.Field>
            {/* <Form.Field>
    
                                <Dropdown placeholder="select priority"
                                selection
                                options={FORM_CONSTANTS.priority}
                                value={data.priority}
                                onChange={handleChange}>
    
                                </Dropdown>
                            </Form.Field> */}

            <Button type="submit" className="button primary">
              Add New
            </Button>
            <Button>
              <NavLink className="p-2" to="/showTodoList" exact>
                View Todos
              </NavLink>
            </Button>
          </Form>
          <br />
        </Card>
      </div>
    </section>
  );
}
