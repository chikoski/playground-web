'use client'

import { useState, useEffect } from "react"

export default function Home() {
  const [count, setCount] = useState(0);

  const actionSignIn = () => {
    postMessage(`hello, world!: ${count}`);
    setCount(count + 1);
  };

  const closeWindow = () => {
    window.close()
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.close()
    });
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>{count}</h1>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" 
          onClick={actionSignIn}
          >
          Sign-in
        </button>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" 
          onClick={closeWindow}
          >
          Close window
        </button>
      </div>
    </main>
  );
}
