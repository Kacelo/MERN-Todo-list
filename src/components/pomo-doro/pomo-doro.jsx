import React, { useState, useEffect } from "react";
import { Grid, Button } from "semantic-ui-react";
import ControlButtons from "./ctrl-buttons";
const Pomo = () => {
  const padTime = (time) => {
    return String(time).length === 1 ? `0${time}` : `${time}`;
  };

  const format = (time) => {
    // Convert seconds into minutes and take the whole part
    const minutes = Math.floor(time / 60);

    // Get the seconds left after converting minutes
    const seconds = time % 60;

    //Return combined values as string in format mm:ss
    return `${minutes}:${padTime(seconds)}`;
  };
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hideButtons, setHideButtons] = useState(false);


  const handlefifteen = (e) => {
    setCounter(900);
    setIsActive(true);
    setHideButtons(true)
  };
  const handleTwentyFive = (e) => {
    setCounter(1500);
    setIsActive(true);
    setHideButtons(true)
  };
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setCounter(0);
    setHideButtons(!hideButtons)
  };

  const handleCountDown = () => {};
  useEffect(() => {
    let timer;
    if (isActive && isPaused === false) {
      timer = setTimeout(() => setCounter((c) => c - 1), 1000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [counter, isActive, isPaused]);

  console.log("is paused",isPaused)

  return (
    <div className="home">
      <Grid>
        <Grid.Row  className="home-container">
         
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <h3>
              {" "}
              {counter === 0 ? (
                ""
              ) : (
                <div>Time Remaining: {format(counter)}</div>
              )}
            </h3>
            {
                hideButtons === false? (<>
                 <Grid.Column>
            <h3>How Long do you want to focus?</h3>
          </Grid.Column>
          <br></br>
                  <Button onClick={handlefifteen}>15 Minutes</Button>
                <Button onClick={handleTwentyFive}>25 Minutes</Button> 
                </>) 
              :  <ControlButtons
              active={isActive}
              isPaused={isPaused}
              handlePauseResume={handlePauseResume}
              handleReset={handleReset}
            />
            }
            
            
          
           
           
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
           
            </Grid.Column>
           
            </Grid.Row>
      </Grid>
    </div>
  );
};

export default Pomo;
