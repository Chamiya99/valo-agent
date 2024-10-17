import { useState } from 'react';
import './App.css'
import Corosel from './Pages/Corosel';
import Heros from './Pages/Heros/Heros';
import BackVId from './components/BackgroundVid/BackVId';



function App() {
 
  return (
    <>
    <BackVId/>
    <Heros/>
    </>
  );

}

export default App;
