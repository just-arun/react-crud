import React from 'react';
import { Todo } from './todo';

export const Todos = ({
    items,
    deleteFun,
    updateEdit
}) => {
    const result = () => {
        return items.map((itm) => {
                return(
                <Todo
                deleteFun={deleteFun}
                updateEdit={updateEdit}
                key={itm.id}
                id={itm.id}
                name={itm.name}
                age={itm.age} />
            )})
    }
    return (
        <div className="todos">
            {result()}
        </div>
    )
}
