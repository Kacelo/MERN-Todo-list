import React from "react";
import { Button, Grid, Icon } from "semantic-ui-react";
import { getCurrentdate } from "../helpers/current-day";
import { greetUser } from "../helpers/greeting";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <Grid className="home">
      <Grid.Column>
      <h4>{getCurrentdate()}</h4>
      <h2>{greetUser()}</h2>
      <h3>What would you like to do today?</h3>
      <div className="options-container">
        <Button>Focus</Button>
        <Button color="" className="options-button">
        <NavLink className="p-2" to="/todo-home" exact>
          Todo
        </NavLink>
      </Button>
        <Button>Note</Button>
        <Button>Timer</Button>
      </div>
      </Grid.Column>
     
    </Grid>
  );
};

export default Home;
