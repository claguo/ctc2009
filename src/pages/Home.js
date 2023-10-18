import React from "react";
import { Link } from "react-router-dom";
import ForMachine from "../components/ForMachine";

function Home() {
  return (
    <>
    <div style={{margin: '2rem'}}>
      <Link className='button' to='/ctc2009/indeterminacy'>indeterminacy</Link>
      <Link className='button' to='/ctc2009/repetition'>repetition</Link>
      <Link className='button' to='/ctc2009/mapping'>mapping</Link>
      <Link className='button' to='/ctc2009/interaction'>interaction</Link>
    </div>
    <ForMachine/>
    </>
  )
}

export default Home;