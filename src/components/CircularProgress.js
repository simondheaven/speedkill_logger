import React from 'react';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = ({label, value, title, classSpec}) => {

  return(
    <div style={{background: "linear-gradient(90deg, transparent,"+classSpec.secondColour+",transparent)"}}>
      <h4 style={{color:"white", textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>{title}</h4>
      <div style={{height: 75, width: 75, margin: "auto"}}>
        <CircularProgressbar value={value} text={label} styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',


    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: classSpec.colour,
    trailColor: 'transparent',
    textColor:"white", textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"
  })} />
      </div>
    </div>
  )
}

export default CircularProgress;
