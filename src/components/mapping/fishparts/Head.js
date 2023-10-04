import React from "react";
import ModifyColor from "../../ModifyColor";

function Head(props) {
  const {eyePos, color, pattern} = props;
  const patternColor = ModifyColor(color, -40);

  return (
    <div style={{position: 'relative'}}>
      <div style={{marginRight: '-8px', height: '60px', overflow: 'hidden', display: 'flex', alignItems: 'center', zIndex: '-1'}}>
        <div style={{
          width: '0',
          height: '0',
          borderTop: `19px solid transparent`,
          borderRight: `16px solid ${color}`,
          borderBottom: `19px solid transparent`,
          marginRight: '-6px'
          }} />
        <div style={{width:'36px', height: `63px`, marginRight: '', borderRadius: '60px 0px 0 60px', backgroundColor: color, overflow: 'hidden'}}>
         {pattern === 'half' ? (
           <div style={{backgroundColor: patternColor, height: '45%'}}></div>
         ): null}
        </div>
      </div>
      <div style={{outline: `${props.eyeSize/5}px solid black`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', width: `${props.eyeSize}px`, height: `${props.eyeSize}px`, borderRadius: `${props.eyeSize/2}px`, backgroundColor: 'white', top: eyePos==='1' ? '18px' : '12px', right: '3px'}}>
        <div style={{width: `${props.eyeSize/1.4}px`, height: `${props.eyeSize/1.4}px`, borderRadius: '50%', backgroundColor: 'black'}}></div>
      </div>
    </div>
  )
}

export default Head;