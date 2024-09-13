// import Image from "next/image";
"use client"
import { useState} from "react"

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center p-24 gap-4">
          <h1>React Counter Button</h1>
          <Button />
      </main>
  );
}

function Button (){
  const [count, setCount] = useState(0);

  function handldeClickButton(){
    setCount(count + 1);
  }
  return (

  <button className="bg-blue-500 hover:bg-blue-700 rounded tex-white font-bold px-4 py-2 " onClick={handldeClickButton}>
    I have been clicked {count} times 
  </button>

  );
}