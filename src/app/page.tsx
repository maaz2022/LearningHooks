'use client'
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
   <button className="relative left-[50%] top-52 border border-blue-700 px-9 py-4 bg-black text-white rounded-full" onClick={()=> {
    setCounter(counter+1);
   }}>
    {counter}
   </button>
  );
}
