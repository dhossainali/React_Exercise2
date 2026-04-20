import { useState } from "react"

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
            <p>User Name:</p>
            <input name="userName" type="text" value={data.userName} onChange={handleChange} />
            <p>Passowrd:</p>
            <input name="password" type="password" value={data.password} onChange={handleChange} />
            <p>Remember:</p>
            <input name="remember" type="checkbox" checked={data.remember} onChange={handleChange} />
            <button type="submit" disabled={!data.userName || !data.password}>Login</button>
            <button  type="button" onClick={handleReset}>Reset</button>
            <pre>{JSON.stringify(data)}</pre>
            
        </form>
    )
}

// We prevent the deafult behaviour of the form element by using event.preventDefault() method