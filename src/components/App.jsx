import { useState } from 'react'
import '../styles/App.css'
import FormPersonalData from './FormPersonalData'
import FormStudies from './FormStudies'
import Curriculum from './Curriculum'
import FormWork from './FormWork'

function App() {
  

  const [studiesArray, setStudiesArray] = useState([])
  const [personalData, setPersonalData] = useState({})
  const [workArray, setWorkArray] = useState([])

  const handleAddPersonalData = (newPersonalData) => {
    setPersonalData(newPersonalData)
  }

  const handleAddStudies = (newStudies) => {
    console.log(studiesArray)
    setStudiesArray((prevstudies) => [...prevstudies, newStudies])
  }

  const handleAddWork = (newWork) => {
    setWorkArray((prevWork) => [...prevWork, newWork])
  }
  return (
    <>
      <header className='header'><h1>CVcreator</h1></header>
      <main className='main'>
        <div className='forms'>
          <FormPersonalData addPersonalData={handleAddPersonalData} />
          <FormStudies addStudy={handleAddStudies} /> 
          <FormWork addWork={handleAddWork}/>
        </div>
        <div className='how-to-use'>
          <Curriculum studies={studiesArray} personalData={personalData} work={workArray}/>   
        </div>
      </main>
      
    </>
  )
}

export default App
