import React,{useState, useEffect} from 'react';

//axios to make API calls to the backend. :)
import axios from 'axios'
import { Form, Button, Card, Dropdown, List, Icon} from "semantic-ui-react";
import { Link } from 'react-router-dom';
import { UpdateTodo } from './updateTodo';
function TodoCard({data, handleEdit, handleDelete}){
    const { _id, title, description,priority, completed } = data;

// const completedStuff = data.filter((t)=> t.data==="Cook");
// console.log("completed", completedStuff)
    return (
        <div>
{title!=="Cook"? <List.Item key={_id} className={ "title-description" } >
            <div >
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{priority}</p>
                <p>{completed}</p>
            </div>

            <div className="button-container">
                <Button 
               color='green' className="button" name={_id} onClick={handleEdit}>
                    edit
                </Button>
                <Button color='red' className="button" name={_id} onClick={handleDelete}>
                    delete
                </Button>
            </div>
        </List.Item>:
       <>
       <h1>Completed</h1>
       <List.Item key={_id} className={"title-description" } >
       <div >
           <h3>{title}</h3>
           <p>{description}</p>
           <p>{priority}</p>
           <p>{completed}</p>
       </div>

       <div className="button-container">
           <Button 
          color='green' className="button" name={_id} onClick={handleEdit}>
               edit
           </Button>
           <Button color='red' className="button" name={_id} onClick={handleDelete}>
               delete
           </Button>
       </div>
   </List.Item></>
}
        </div>
        
    
    );
}

function CompletedTodos(data, handleEdit, handleDelete){
    const { _id, title, description,priority, completed } = data;
    return(
    
    <List.Item key={_id}>
    <div className={title==="Get Married"? "Hidden":"title-description"}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{priority}</p>
        <p>{completed}</p>
    </div>

    <div className="button-container">
        <Button 
       color='green' className="button" name={_id} onClick={handleEdit}>
            edit
        </Button>
        <Button color='red' className="button" name={_id} onClick={handleDelete}>
            delete
        </Button>
    </div>
</List.Item>
    )
}

export function ShowTodoList(data) {
    const [todo, setTodo] = useState([]);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState("");
    const [update, setUpdate] = useState(false);


    // console.log("toso",completedItems)
    useEffect(
        function () {
            axios
                .get("http://localhost:8000/api/todo")
                .then((res) => {
                    console.log(res.data[0].title);
                    setTodo(res.data);
                })
                .catch((err) => {
                    console.log(err.message);
                });
                // const completedItems = res.data.filter((t)=> t.data.title==="Cook")
        },
        [update]
    );

    function handleEdit(e) {
        setId(e.target.name);
        setOpen(true);
    }

    function handleUpdate() {
        console.log("update:", update, !update);
        setUpdate(!update);
    }

    function handleDelete(e) {
        axios.delete(`http://localhost:8000/api/todo/${e.target.name}`);

        setTodo((data) => {
            return data.filter((todo) => todo._id !== e.target.name);
        });
    }

    function handleClose() {
        setId("");
        setOpen(false);
    }

    return (
        <Card centered>
              <section className="container">
            {/* <Link to="/create-todo" className="button-new">
                <button className="button">New</button>
            </Link> */}
           
            <section className="contents">
                <h1>TODO LIST</h1>
                <List className="list-container">
                    {todo.map((data) => (
                        <TodoCard
                            data={data}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    ))}
                </List>
            </section>
            {/* <h2>Completed Todos</h2>
            <List className="list-container">
                    {todo.map((data) => (
                        <CompletedTodos
                            data={data}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    ))}
                </List> */}
            {open ? (
                <section className="update-container">
                    <div className="update-contents">
                        <p onClick={handleClose} className="close">
                            <Icon name='chevron down'>
                            &times;
</Icon>
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
        
    );
}