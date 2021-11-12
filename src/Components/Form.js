import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Form({onAddItem}) {
    const initialState = {
        image:'',
        price:'',
        location: '',
    }
    
    const history = useHistory();
        
        
        
    const [formData, setFormData] = useState(initialState)

    function handleChange(e) {
        setFormData( {...formData,
        [e.target.name]:e.target.value})
    }


    function handleSubmit(e) {
        e.preventDefault()

        fetch('http://localhost:3004/listings', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({...formData, favorite: false}),
          })
            .then(r => r.json())
            .then((newItem) => {
                setFormData(initialState)})
                history.push('/listings')
    }
    

    return(
        <div>
            <h1>LIST YOUR HOUSE</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Image:
                    <input
                    type='text'
                    name='image'
                    value={formData.image}
                    onChange={handleChange}/>

                </label>

                <label>
                    Price:
                    <input
                    type='text'
                    name='price'
                    value={formData.price}
                    onChange={handleChange} />
                </label>

                <label>
                    Location:
                    <input
                    type='text'
                    name='location'
                    value={formData.location}
                    onChange={handleChange} />
                </label>

                <button type="submit">Add House</button>
            </form>

        </div>
    )
}

export default Form;