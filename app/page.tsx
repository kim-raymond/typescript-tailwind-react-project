// import Image from "next/image";
"use client"
import IndependentButtons from "@/components/independent";
import Button from "@/components/button";
import { useState} from "react"

export default function Home() {
    const [count, setCount] = useState(0);

      function handldeClickButton(){
      setCount(count + 1);
    }
  return (
      <main className="flex min-h-screen flex-col items-center p-24 gap-4">
          <h1 className="text-3xl font-bold">React Counter Button</h1>
          <h2 className="text-xl">Buttons with shared states</h2>
          <Button count={count} onClick={handldeClickButton}/>
          <Button count={count} onClick={handldeClickButton}/>
          <h2 className="text-xl">Buttons with independent state</h2>
          <IndependentButtons/>
          <IndependentButtons/>
      </main>
  );
}
