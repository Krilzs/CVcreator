import { useState } from 'react'
import '../styles/App.css'
import FormPersonalData from './FormPersonalData'
import FormStudies from './FormStudies'
import Curriculum from './Curriculum'
import FormWork from './FormWork'
import { useReactToPrint } from "react-to-print";
import { useRef } from 'react';     



function App() {
  

  const [studiesArray, setStudiesArray] = useState([])
  const [personalData, setPersonalData] = useState({})
  const [workArray, setWorkArray] = useState([])

  const handleAddPersonalData = (newPersonalData) => {
    setPersonalData(newPersonalData)
  }

  const handleRemoveStudies = (index) => {
    debugger;
    setStudiesArray((prevstudies) => prevstudies.filter((_, i) => i !== index))
  }

  const handleRemoveWork = (index) => {
    setWorkArray((prevWork) => prevWork.filter((_, i) => i !== index))
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
      <main className='main'>
        <div className='forms'>
          <div className='title'>
            <h1>Curriculum Vitae Generator</h1>
            <p>Complete the form to generate your CV</p>
          </div>
          <FormPersonalData addPersonalData={handleAddPersonalData} />
          <FormStudies addStudy={handleAddStudies}  /> 
          <FormWork addWork={handleAddWork} />
        </div>
        <div className='how-to-use'>
            <Curriculum studies={studiesArray} personalData={personalData} work={workArray} removeStudies={handleRemoveStudies} removeWork={handleRemoveWork}/>   
        </div>
      </main>
      
    </>
  )
}

export default App
