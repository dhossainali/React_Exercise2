import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome (){
    const [inputValue, setInputValue]=useState('')
    function inputChangeHandler(e){
        setInputValue(e.target.value)
    }
    
    return (
        <div>
            <input value={inputValue} onChange={inputChangeHandler} />
            <Welcome name={inputValue}/>
        </div>
    )
}