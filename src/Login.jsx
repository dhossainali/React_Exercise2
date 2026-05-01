import { useState } from "react"
import classes from './Login.module.css'

const initialFormData=()=> {
    return(
    {
        userName: '',
        password: '',
        remember: false
    })
}
export function Login({onLogin}) {

    const [formData, setFormData] = useState(initialFormData());

    function handleChange(event) {
        const {value,name, type, checked}=event.target
        setFormData((d) => {
            return { ...d, [name]: type === 'checkbox' ? checked : value, }
        });

    }
    function handleReset(){
        setFormData(initialFormData());
    }

    function handleLogin(event) {
        event.preventDefault()
        onLogin(formData)
        setFormData(initialFormData())
    }

    return (
        <form onSubmit={handleLogin}>
            <label htmlFor="idUserName"> User Name:</label> 
            <input id='idUserName' name="userName" type="text" value={formData.userName} onChange={handleChange} />
            <label htmlFor="idPassword"> Passowrd:</label> 
            <input id='idPassword' 
                 name="password" type="password" value={formData.password} onChange={handleChange} />
            <label htmlFor="idRemember"> Remember:</label> 
            <input id='idRemember' name="remember" type="checkbox" checked={formData.remember} onChange={handleChange} />
            <button className={(formData.password).length>=8? classes.greenOK: classes.redNotOK }
            type="submit" disabled={!formData.userName || !formData.password}>Login</button>
            <button  type="button" onClick={handleReset}>Reset</button>
            <pre>{JSON.stringify(formData)}</pre>
            
        </form>
    )
}

// We prevent the deafult behaviour of the form element by using event.preventDefault() method