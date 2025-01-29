import '../styles/FormPersonalData.css'
import { useState } from 'react'

function FormPersonalData({addPersonalData}) {

    const [sended, setSended] = useState(false)

    const [FormData, setFormData] = useState({
        name: '',
        surname: '',
        age: '',
        email: '',
        phone: '',
        description: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...FormData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSended(true)
        addPersonalData(FormData)
        setFormData({
            name: '',
            surname: '',
            age: '',
            email: '',
            phone: '',  
            description: ''
        })
    }

    return (
        <div className='form'>
        <form onSubmit={handleSubmit}>
            <h2>Personal Data</h2>
            <label htmlFor="name"></label>
            <input type="text" name="name" id="name" required placeholder="Name" value={FormData.name} onChange={handleChange} />
            <label htmlFor="surname"></label>
            <input type="text" name="surname" id="surname" required placeholder="Surname" value={FormData.surname} onChange={handleChange}/>
            <label htmlFor="age"></label>
            <input type="number" name="age" id="age" required placeholder="Age" value={FormData.age} onChange={handleChange}/>
            <label htmlFor="email"></label>
            <input type="email" name="email" id="email" required placeholder="Email" value={FormData.email} onChange={handleChange}/>
            <label htmlFor="phone"></label>
            <input type="tel" name="phone" id="phone" required placeholder="Phone" value={FormData.phone} onChange={handleChange}/>
            <label htmlFor="description"></label>
            <input type="text" name="description" id="description" required placeholder="Description" value={FormData.description} onChange={handleChange}/>
            <button>{sended ? 'Edit' : 'Add'}</button>
        </form>
        </div>
    )
}

export default FormPersonalData