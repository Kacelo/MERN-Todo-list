import { useState, useEffect } from "react";
import axios from "axios";
import {
  Form,
  Button,
  Card,
  Dropdown,
  Input,
  Checkbox,
} from "semantic-ui-react";

export function UpdateTodo({ _id, handleClose, handleUpdate }) {
  // useState to be used to update data object values
  const [data, setData] = useState({
    title: "",
    description: "",
    priority: "",
    completed: false,
  });
  //this value will be used to set the value of completed and for toggling the checkbox field
  const [checked, setChecked] = useState(false);

  //method to toggle between true or false
  const handleChecked = () => {
    setChecked((current) => !current);
  };

  //this method sets updated data
  function handleChange(e) {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  }
  function handleSubmit(e) {
    e.preventDefault();

    console.log("ID: ", { _id }, { data });
    // put operation also known as the update operation
    // update todo according to it's ID

    //make sure id is correct

    axios
      .put(`http://localhost:8000/api/todo/${_id}`, data)
      .then((res) => {
        setData({ title: "", description: "", priority: "", completed: false });
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("Failed to update todo");
        console.log(err.message);
      });
  }
  console.log("returned ID: ", _id);
  return (
    <Card centered>
      <Form
        className="form-container"
        onSubmit={(e) => {
          handleSubmit(e);
          handleUpdate();
          handleClose();
        }}
      >
        <Form.Field>
          <label htmlFor="title" className="label">
            Title
          </label>
          <Input
            type="text"
            name="title"
            className="input"
            onChange={handleChange}
            focus
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="description" className="label">
            Description
          </label>
          <Input
            type="text"
            name="description"
            className="input"
            onChange={handleChange}
            focus
          />
        </Form.Field>

        <Form.Field>
          <input
            type="checkbox"
            value={!checked}
            label="Complete Task"
            name="completed"
            onChange={handleChange}
            onClick={handleChecked}
            checked={checked}
          />
          <Button type="submit" className="button" primary>
            Submit
          </Button>
        </Form.Field>
      </Form>
    </Card>
  );
}
