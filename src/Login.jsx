import { useState } from "react"
import classes from './Login.module.css'

function getData() {
    return(
    {
        userName: '',
        password: '',
        remember: false
    })
}
export function Login({onLogin}) {

    const [data, setData] = useState(getData());

    function handleChange(event) {
        const {value,name, type, checked}=event.target
        setData((d) => {
            return { ...d, [name]: type === 'checkbox' ? checked : value, }
        });

    }
    function handleReset(){
        setData(getData());
    }

    function handleLogin(event) {
        event.preventDefault()
        onLogin(data)
    }

    return (
        <form onSubmit={handleLogin}>
            <label htmlFor="idUserName"> User Name:</label> 
            <input id='idUserName' name="userName" type="text" value={data.userName} onChange={handleChange} />
            <label htmlFor="idPassword"> Passowrd:</label> 
            <input id='idPassword' 
                 name="password" type="password" value={data.password} onChange={handleChange} />
            <label htmlFor="idRemember"> Remember:</label> 
            <input id='idRemember' name="remember" type="checkbox" checked={data.remember} onChange={handleChange} />
            <button className={(data.password).length>=8? classes.greenOK: classes.redNotOK }
            type="submit" disabled={!data.userName || !data.password}>Login</button>
            <button  type="button" onClick={handleReset}>Reset</button>
            <pre>{JSON.stringify(data)}</pre>
            
        </form>
    )
}

// We prevent the deafult behaviour of the form element by using event.preventDefault() method