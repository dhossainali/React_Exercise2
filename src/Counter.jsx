import { CounterDisplay } from "./CounterDisplay";
import { useEffect, useState } from "react"


export function Counter ({initialValue, countNumber}) {
    const [count, setCount]=useState(initialValue)
    

    useEffect(()=>{
        console.log(count);
    },[count])

    function increment() {
        setCount((c)=>c+countNumber);
    }
    function decrement() {
        setCount((c)=>c-countNumber);
    }

    function reset() {
        setCount(initialValue);
    }

    return (
        <div>
            <CounterDisplay count={count}/>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
    }