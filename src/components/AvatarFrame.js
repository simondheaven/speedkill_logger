import React from 'react';

const AvatarFrame = ({character, classSpec}) => {

  const audio = new Audio(classSpec.greetingSound);


  return (
    <div onClick={() => audio.play()} style={{
      //backgroundImage: "url("+classSpec.specImage+")",
      //backgroundSize: "cover",
      width: 315,
      height: 150,
      justifyContent: "flex-start",
      overflow: "hidden",
      marginBottom: 8,
      cursor: "pointer"
    }}>
      <img  height={74} style={{position:"relative",left:-107, top: 31, borderRadius: 360}} width={74} src={classSpec.classImage}></img>
      <img height={150} style={{position:"absolute",left:0}} src={"/img/playerframe.png"}></img>
      <div style={{position:"relative", height:24, width: 24, borderRadius: 360, top:-17, left: 17, background: "radial-gradient(white,gold,red)"}}>
        <h5 style={{color: "red",paddingTop: 3,}}>{classSpec.overallClass.split(" ").map(word => word[0])}</h5>
      </div>
      <div style={{position:"relative",top: -16, background: "linear-gradient(45deg,transparent,"+classSpec.colour+","+classSpec.secondColour+",transparent)", opacity: 0.8}}>
        <h4 style={{color:"white", textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>{classSpec.name}</h4>
      </div>
      <div style={{position:"relative",top: -188, background: "linear-gradient(45deg,transparent,"+classSpec.colour+","+classSpec.secondColour+",transparent)", opacity: 0.8}}>
        <h3 style={{color:"white", textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>{character.name}</h3>
      </div>
    </div>
  );
}

export default AvatarFrame
