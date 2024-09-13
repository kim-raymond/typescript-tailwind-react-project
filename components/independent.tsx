"use clint"
import { useState } from "react"

export default function IndependentButtons(){
    const [count,setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }

    return(
        <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 rounded text-white font-bold py-2 px-4">
            I have clicked button {count} times
        </button>
    )
}