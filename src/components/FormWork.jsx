import { useState } from "react"

function FormWork( {addWork} ) {

    const [FormData, setFormData] = useState({
        institution: '',
        degree: '',
        grade: '',
        iniciate_date: '',
        end_date: '',
        description: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...FormData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addWork(FormData)
        setFormData({
            institution: '',
            position: '',
            iniciate_date: '',
            end_date: '',
            description: ''
        })
    }


    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <h2>Works</h2>
                <label htmlFor="institution"></label>
                <input type="text" id="institution" required name="institution" placeholder="Institution" value={FormData.institution} onChange={handleChange} />
                <label htmlFor="position"></label>
                <input type="text" id="position" required name="position" placeholder="Position" value={FormData.position} onChange={handleChange}/>
                <label htmlFor="description"></label>
                <input type="text" id="description" name="description" placeholder="Description" value={FormData.description} onChange={handleChange}/>
                <div>
                    <span>
                        <label htmlFor="iniciate-date">Iniciate Date</label>
                        <input type="date" name="iniciate_date" required id="iniciate-date" value={FormData.iniciate_date} onChange={handleChange}/>
                    </span>
                    <span>
                        <label htmlFor="end-date">End Date</label>
                        <input type="date" name="end_date" required id="end-date" value={FormData.end_date} onChange={handleChange}/>
                    </span>
                    
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}   

export default FormWork