import './App.css';
import Navbar from './Components/Navbar';
import Works from './Components/Works';
import {useState} from 'react'
import WorkItemModal from './Components/WorkItemModal';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [workCategory, setWorkCategory] = useState()

  return (
    <div className="App">
      <WorkItemModal workCategory={workCategory} showModal={showModal} setShowModal={setShowModal}/>
      <Navbar/>
      <Works setWorkCategory={setWorkCategory} setShowModal={setShowModal} />
    </div>
  );
}

export default App;
