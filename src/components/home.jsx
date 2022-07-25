import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { getCurrentdate } from "../helpers/current-day";
import { greetUser } from "../helpers/greeting";

const Home = () => {
  return (
    <>
      <h4>{getCurrentdate()}</h4>
      <h2>{greetUser()}</h2>
      <h3>What would you like to do today?</h3>
      <div>
        <Button>Focus</Button>
        <Button>Todo</Button>
        <Button>Note</Button>
        <Button>Timer</Button>
      </div>
    </>
  );
};

export default Home;
