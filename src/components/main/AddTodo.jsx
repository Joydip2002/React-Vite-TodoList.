import React, { useState } from 'react';
import '../style/style.css';

const AddTodo = ({addTask}) => {
    const [getData, setData] = useState('')
    const [getError,setError] = useState('');

    const handleTask = (e) => {
        e.preventDefault();
        if (!getData.trim()) {
            setError('Please enter a task...');
            return;
        }
        setError('');
        addTask(getData.trim());
        setData('');
    }
    const handleChange = (e) => {
        setData(e.target.value);
    }

    return (
        <div>
           
            <form action="" onSubmit={handleTask}>
                <div className='container inputdiv'>
                    <input
                        type="text"
                        placeholder='Add Your Todo'
                        value={getData} 
                        onChange={handleChange} 
                        required
                    />
                    <button>Add Todo <span></span></button>
                </div>
                {getError && <div className='text-center text-danger'>{getError}</div>}
            </form>
        </div>
    )
}

export default AddTodo;
