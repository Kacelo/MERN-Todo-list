import React from "react";
import { Button } from "semantic-ui-react";

const ControlButtons=(props)=>{
    // const StartButton =(
    //     <>
    //     <Button onClick={props.handleStart}>
    //         Start
    //     </Button>
    //     </>
    // )
    const ActiveButtons = (
        <div className="btn-grp">
          <Button className="btn btn-two" 
               onClick={props.handleReset}>
            Reset
          </Button>
          <Button className="btn btn-one" 
               onClick={props.handlePauseResume}>
            {props.isPaused ? "Resume" : "Pause"}
          </Button>
        </div>
      );

      return (
        <div className="Control-Buttons">
          <div>{props.active ? ActiveButtons : ""}</div>
        </div>
      );
}

export default ControlButtons;