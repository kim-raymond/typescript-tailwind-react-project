// import Image from "next/image";
"use client"
import Button from "@/components/button";
import { useState} from "react"

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center p-24 gap-4">
          <h1>React Counter Button</h1>
          <Button />
          <Button />
      </main>
  );
}
