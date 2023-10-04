import React from "react";
import Fin from "./fishparts/Fin";
import Body from "./fishparts/Body";
import Head from "./fishparts/Head";
import Tail from "./fishparts/Tail";

function Fish(props) {
  const {color, length, eyePos, eyeSize, pattern } = props
  // borderRadius='40px 0 0 25px'
  return (
    <div style={{display: 'flex', gap: '0', alignItems: 'center'}}>
      {/* HEAD */}
      <Head pattern={pattern} borderRadius='40px 0 0 24px' width='40px' color={color} eyePos={eyePos} eyeSize={eyeSize}/>

      {/* BODY */}
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Fin borderRadius='15px 5px 5px 0' color={color} width='10px' />
        <Body pattern={pattern} borderRadius='0 30px 30px 0' color={color} width={length} />
        <div style={{display: 'flex', width: '100%', justifyContent: 'space-evenly'}}>
          <Fin borderRadius='0 0 5px 15px' color={color} width='10px' />
          <Fin borderRadius='0 5px 5px 10px' color={color} width='24px' />
        </div>
      </div>

      {/* TAIL */}
      <Tail width={16} height={24} color={color} />
    </div>
  )
}

export default Fish;