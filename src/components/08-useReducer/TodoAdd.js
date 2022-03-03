import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ description },handleInputChange, reset] = useForm({
        description:""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if(description.trim().length <= 1) return;
        const newTodo = {
            id:new Date().getTime(),
            desc:description,
            done:false
        };
        handleAddTodo(newTodo);
        reset();
    }

    return (
        <>
            <h4>Agregar Todo</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input className='form-control'
                    onChange={handleInputChange}
                    value={description}
                    type="text" name='description'
                    placeholder='Aprender...'
                    autoComplete='off' />
                <div className="d-grid gap-2">
                    <button className="btn btn-outline-primary mt-2 btn-block">Agregar</button>
                </div>
            </form>
        </>
    )
}
