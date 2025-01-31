
import '../styles/FormStudies.css'
import { useState } from 'react'

function Formstudies( {addStudy} ) {   


    

    const [FormData, setFormData] = useState({
        level: '',
        institution: '',
        degree: '',
        description: '',
        iniciate_date: '',
        end_date: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...FormData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(FormData)
        addStudy(FormData)
        setFormData({
            level: '',
            institution: '',
            degree: '',
            description: '',
            iniciate_date: '',
            end_date: ''
        })
    }
    
    
    
return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
            <h2>Studies</h2>
            <label htmlFor="level"></label>
            <select name="level" id="level" onChange={handleChange} value={FormData.level}>
                <option value="school">School</option>
                <option value="university">University</option>
            </select>
            <label htmlFor="institution" ></label>
            <input type="text" name="institution" id="institution" required placeholder="Institution" value={FormData.institution} onChange={handleChange}/>
            <label htmlFor="degree"></label>
            <input type="text" name="degree" id="degree" required placeholder="Degree" value={FormData.degree} onChange={handleChange}/>
            <label htmlFor="description"></label>
            <textarea name="description" id="description" required placeholder="Description" value={FormData.description} onChange={handleChange}></textarea>
            <div>
                <span>
                    <label htmlFor="iniciate-date">Iniciate Date</label>
                    <input type="date" name="iniciate_date" required value={FormData.iniciate_date} id="iniciate-date" onChange={handleChange}/>
                </span>
                <span>
                    <label htmlFor="end-date">End Date</label>
                    <input type="date" name="end_date" required value={FormData.end_date} id="end-date" onChange={handleChange}/>
                </span>    
            </div>
            <button>Add</button>
        </form>
        <div className="line"></div>
    </div>
    )
}

export default Formstudies