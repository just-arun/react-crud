import React from 'react';

export const Add = ({
    name,
    age,
    updateItem,
    submit
}) => {
    return (
        <form className="add" onSubmit={(e) => {
            e.preventDefault();
            return submit();
        }}>
            <input
            placeholder="name..."
            value={name}
            onChange={(e) => updateItem("name", e.target.value)}
            type="text" />
            <input
            placeholder="age..."
            value={age}
            onChange={(e) => updateItem("age", e.target.value)}
            type="number" />
            <br/>
            <button type="submit">SUBMIT</button>
        </form>
    )
}

