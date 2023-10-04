import React from "react";
import { Link } from "react-router-dom";
import Fish from "../components/mapping/Fish";
import FishMaker from "../components/mapping/FishMaker";
import Interaction from "../components/Interaction";

function Home() {
  return (
    <>
    <div style={{margin: '2rem'}}>
      <Link className='button' to='/ctc2009/indeterminacy'>indeterminacy</Link>
      <Link className='button' to='/ctc2009/repetition'>repetition</Link>
    </div>
    <FishMaker />
    <Interaction />
    </>
  )
}

export default Home;