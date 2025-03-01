import '../styles/Curriculum.css'
import { jsPDF} from "jspdf";
import html2canvas from 'html2canvas';
import { useRef } from 'react';
import { useState } from 'react';

function Curriculum( {studies, personalData, work, removeStudies, removeWork} ) {

    let hasStudies = false;
    let hasWork = false;
    let hasPersonalData = false;
    
    if (personalData.name && personalData.surname && personalData.age && personalData.email && personalData.phone && personalData.description){
        hasPersonalData = true;
    }

    if (studies.length > 0){
        hasStudies = true;
    }
        
    if (work.length > 0){
        hasWork = true;
    }


    const showTitle = (data) => {
        return(
            <div className='title-curriculum'>
                <p>{data.email} / {data.phone}</p>
                <h3>{data.name}  {data.surname}</h3>
            </div>
            
        )
    }

    const showData = (data) => {
        return(
            <div className='personal-data'>
                <h3>My Profile</h3>
                <p>"{data.description}"</p>
            </div>
        )
    }

    return (
        <>
        <article className='curriculum'>
            {hasPersonalData ? showTitle(personalData) : <h2>Your Curriculum</h2>}
            <section>
                {hasPersonalData ? showData(personalData) : <p>No personal data added</p>}
            </section>
            <section>
                <h3>My Studies</h3>
                {hasStudies ? '' : <p>No studies added</p>}
                {
                    studies.map((study, index) => {

                        const iniciate_date = new Date(study.iniciate_date);
                        const month = iniciate_date.toLocaleString("en-EN", { month: "long" }); 
                        const iniciate_year = iniciate_date.getFullYear();

                        const end_date = new Date(study.end_date);
                        const end_month = end_date.toLocaleString("en-EN", { month: "long" }); 
                        const end_year = end_date.getFullYear();

                        console.log(month, iniciate_year)
                        return (
                            <div className='exp' key={index}>
                                <span><h3>{study.institution}</h3>{month} {iniciate_year} - {end_month} {end_year }</span>
                                <h5>{study.degree}</h5>
                                <p>"{study.description}"</p>
                                <button onClick={()=>{removeStudies(index)}}>Delete</button>
                            </div>
                        )
                    })
                }
            </section>
            <section>
                <h3>Work Experience</h3> 
            {hasWork ? '' : <p>No work experience added</p>}
                {
                work.map((work, index) => {
                    
                    const iniciate_date = new Date(work.iniciate_date);
                    const month = iniciate_date.toLocaleString("en-EN", { month: "long" }); 
                    const iniciate_year = iniciate_date.getFullYear();

                    const end_date = new Date(work.end_date);
                    const end_month = end_date.toLocaleString("en-EN", { month: "long" }); 
                    const end_year = end_date.getFullYear();

                    return (
                        <div className='exp' key={index}>
                            <span><h3>{work.institution}</h3> {month} {iniciate_year} - {end_month} {end_year }</span>
                            <h5>{work.degree}</h5>
                            <p>"{work.description}"</p>
                            <button onClick={() => removeWork(index)}>Delete</button>
                        </div>
                    )

                })
            }
            </section>
        </article>
        </>
    )
}

export default Curriculum