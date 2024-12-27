import React, {useState} from 'react';
import './AddIngredients.css';

export default function Ingredient(){

    let [name, setname] = useState("");
    let [list, setlist] = useState([]);

    const handleInputChange = (e) =>{
        setname(e.target.value);
    };

    const handleOnSubmit = (e) =>{
        e.preventDefault();

        if(name){
        setlist([...list, setname])
        setname("");
        }
    };

    return(
        <>
            <form className="add" onSubmit={handleOnSubmit}>
                <input type="text" placeholder="eg oregano" value={setname}required/>
                <button className="addItem" onChange={handleInputChange}>+ Add Ingredient</button>
            </form>
        </>
    )
}