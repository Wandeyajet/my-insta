import React from 'react'
import Modal from './components/Modal'
import { Nav, Bio, Gallery } from './components' 
import './App.css'
import {useState} from 'react'

const App = ( ) => { 
  const [show, setShow] =useState (false)
  return (
   <>
      <Nav  />
      <div className="container">
          <Bio />
          <Gallery/>
        </div>
        <button onClick ={() => setShow(true)} > Show Modal</button>
        <Modal show ={show} />
    </>
  );
}
export default App;


  
