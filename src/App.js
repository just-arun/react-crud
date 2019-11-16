import React, { useState } from 'react';
import { Todos } from './components/todos';
import './App.css';
import './styles/main.css';
import { Add } from './components/add';

function App() {
  let [items, setItems] = useState([{
      id: "idGen",
      name: 'len',
      age: 3
  }]);
  let [item, setItem] = useState({
      id: "",
      name: '',
      age: 0
  });
  let [len, setLen] = useState(1);
  let [edit, setEdit] = useState(false);
  const updateItem = (key, e) => {
      setItem({...item, [key]: e})
  }
  const submitFun = (i) => {
    if (!!edit) {
      let itm = items;
      item[i] = item;
      edit=false;
    } else {
      let itm = items;
      let its = item;
      let id = idGen();
      its.id = id;
      itm.push(its);
      setItems(itm);
      setLen(items.length);
    }
    setItem({name: '',age:''})
  }
  const deleteFun = (id) => {
    setItems(items.filter(itm => itm.id !== id))
  }
  const updateEdit = (itm) => {
    let itms = items;
    for (let i = 0; i < itms.length; i++) {
      if (itms[i].id === itm.id) {
        itms[i] = itm;
      }
    }
    setItems(itms);
  }
  const idGen = () => {
    let char = "abcdefghijklmnopqrstuvwxyz1234567890";
    let result='';
    for (let i = 0; i < 20; i++) {
      result +=char.charAt(Math.random() * char.length)
    }
    console.log(result);
    return result;
  }
  return (
    <div className="app">
      <div className="div">
        <Add
        name={item.name}
        age={item.age}
        updateItem={updateItem}
        submit={submitFun}
        />
        <div>
          total: 
          {len}
        </div>
        <Todos
        items={items}
        deleteFun={deleteFun}
        updateEdit={updateEdit}
        />
      </div>
    </div>
  );
}

export default App;
