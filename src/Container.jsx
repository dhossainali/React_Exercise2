import { useState } from "react"


export default function Container ({children}){
    const [colapse, setColapse]= useState(false)
    function handleColapse(){
        setColapse(t=>!t)
    }
    return(
        <div className="container">
            <div> <h1> My Application</h1>
            <button onClick={handleColapse}>toggle</button></div>
            {colapse && <div className="appContainer">{children}</div>}
        </div>
    )
}