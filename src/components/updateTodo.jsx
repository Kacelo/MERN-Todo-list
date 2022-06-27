import { useState } from "react";
import axios from "axios";
import { Form, Button, Card, Dropdown, Input} from "semantic-ui-react";

export function UpdateTodo({ _id, handleClose, handleUpdate }) {
    const [data, setData] = useState({ title: "", description: "" , priority: "", completed: false });

    function handleChange(e) {
        setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log({ _id }, { data });

        axios
            .put(`http://localhost:8000/api/todo/${_id}`, data)
            .then((res) => {
                setData({ title: "", description: "", priority: "", completed: false});
                console.log(res.data.message);
            })
            .catch((err) => {
                console.log("Failed to update todo");
                console.log(err.message);
            });
    }

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
            <Button type="submit" className="button" primary>
                Submit
            </Button>
            </Form.Field>
            
        </Form>
        </Card>
        
    );
}