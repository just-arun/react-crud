import React, { useState } from 'react';

export const Todo = ({
    id,
    name,
    age,
    deleteFun,
    updateEdit
}) => {
    const [edits, setEdit] = useState(false);
    const [item, setItem] = useState({
        id,
        name,
        age
    });
    let update = (key, val) => {
        setItem({...item,[key]:val});
        console.log(item.id);
    }
    return (
        <div className="todo">
        {(!edits)?
            <div>
                <div>name: {item.name}</div>
                <div>age: {item.age}</div>
            </div>:
            <div>
            <form>
                <input
                onChange={(e) => update("name",e.target.value)}
                type="text" value={item.name} />
                <input
                onChange={(e) => update("age",e.target.value)}
                type="number" value={item.age} />
            </form>
            </div>
        }
            {(!edits)?
            <div>
                <button
                onClick={() => setEdit(true)}
                className="edit">update</button>
                <button
                onClick={() => deleteFun(id)}
                className="delete">delete</button>
            </div>:
            <div>
                <button
                onClick={() => {updateEdit(item);setEdit(false)}}
                className="edit">save</button>
                <button
                onClick={() => setEdit(false)}
                className="delete">cancel</button>
            </div>}
        </div>
    )
}

