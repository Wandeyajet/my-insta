import React from 'react'
import Modal from './components/Modal'
import { Nav, Bio, Gallery } from './components' 
import './App.css'

const App = ( ) => { 
  return (
   <>
      <Nav  />
      <div className="container">
          <Bio />
          <Gallery/>
        </div>
        <button>Show Modal</button>
        <Modal />
    </>
  );
}
export default App;


  
