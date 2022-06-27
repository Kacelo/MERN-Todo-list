import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FORM_CONSTANTS } from "../configs/constants";
import axios from "axios";
import { Form, Button, Card, Dropdown, Input} from "semantic-ui-react";
import { Formik } from "formik";
export function CreateTodo() {
    const [data, setData] = useState({ title: "", description: "", priority: "", completed:false });

    function handleChange(e) {
        setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    }

    function dropdownChange(e){
        setData((data) => ({ ...data, [e.target.name]: e.target.value }));

    }
    useEffect(() => {
      
    
      return () => {
        
      }
    }, [data])
    
    function handleSubmit(e) {
        e.preventDefault();
        // setTimeout(function(){window.location.reload();},3)
        axios
            .post("http://localhost:8000/api/todo", data)
            .then((res) => {
                setData({ title: "", description: "", priority:"", completed:false });
                console.log(res.data.message);
            })
            .catch((err) => {
                console.log("Error couldn't create TODO");
                console.log(err.message);
            });
    }

    return (
        <section className="container">
            {/* <Link to="/">
                <button type="button" className="button button-back">
                    back
                </button>
            </Link> */}
            <Formik
            render={({})=>{
                return(
                    <><Card centered={true} className="contents">
                    <Form
                        onSubmit={handleSubmit}
                        className="form-container"
                        noValidate
                        size="mini"
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
                            <Form.Field>
    
                                <Dropdown placeholder="select priority"
                                selection
                                options={FORM_CONSTANTS.priority}
                                value={data.priority}
                                onChange={handleChange}>
    
                                </Dropdown>
                            </Form.Field>
                  
                        <Button color="instagram" type="submit" className="button">
                            create todo
                        </Button>
                    </Form>
                </Card></>
                )
            }}/>
            
        </section>
    );
}