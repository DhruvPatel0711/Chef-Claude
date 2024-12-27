import AddIngredients from './AddIngredients.js';
import DisplayIngredients from './DisplayIngredients.js';
import Output from './Output.js';
import './Container.css';

export default function Container(){
    return(
        <div className='Container'>
            <AddIngredients/>
            <DisplayIngredients/>
            <Output/>
        </div>
    )
}