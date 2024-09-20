import { useState } from 'react'
import './App.css'
import ImageTake from './components/ImageTake'
import TopNav from './components/TopNav'
import Home from './Pages/Home'

function App() {
  const [modal, setModal] = useState(false)
  const handleModal = () => {
    setModal(!modal)
  }

  return (
    <>
    <TopNav toggleModal={handleModal}/>
    <Home />
    {modal && <ImageTake closeModal={handleModal}/>}
    </>
  )
}

export default App
