import React from "react";
import { Button, Grid, Icon } from "semantic-ui-react";
import { getCurrentdate } from "../helpers/current-day";
import { greetUser } from "../helpers/greeting";
import { NavLink } from "react-router-dom";
import Pomo from "./pomo-doro/pomo-doro";
import Weather from "./weather-component/weather-component";
import Motivation from "./motivation";
const Home = () => {
  return (
    <Grid className="home">
    
    
       
      <Grid.Column className="home-container">
        
        <Weather location={'Windhoek'} />
        <h3 className="current-date">{getCurrentdate()}</h3>
        <h2>{greetUser()}</h2>
        <h2>What would you like to do today?</h2>
        
        <div className="options-container">
          <Button className="options-button">
            <NavLink className="p-2" to="/todo-home" exact>
              
              Todo
            </NavLink>
          </Button>
          <Button color="" className="options-button">
            <NavLink className="p-2" to="./pomo-doro/pomo-doro" exact>
            Focus
            </NavLink>
          </Button>
          <Button className="options-button">Note</Button>
          <Button  color='teal' className="options-button"><Icon name="heartbeat" />Track health</Button>
        </div>
        <div className="motivate">motivational message</div>
        <Motivation/>
      </Grid.Column>
      
    </Grid>
  );
};

export default Home;
