import './App.css';
import Navbar from './Components/Navbar';
import Works from './Components/Works';
import { useState } from 'react'
import WorkItemModal from './Components/WorkItemModal';
import Contact from './Components/Contact';
import BackgroundChanger from './Components/BackgroundChanger';
import Name from './Components/Name';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [workCategory, setWorkCategory] = useState()

  return (
    <div className="App">
      <Name/>
      {workCategory && (<WorkItemModal workCategory={workCategory} showModal={showModal} setShowModal={setShowModal} />)}
      
      <Navbar />
      <BackgroundChanger />
      <Works id="section0" setWorkCategory={setWorkCategory} setShowModal={setShowModal} />
      <Contact id="section1"/>
    </div>
  );
}

export default App;
