'use client'
import { useEffect, useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    alert('hello side effect');
    return () => alert('good bye');
  }, []); // Added an empty dependency array to avoid the alert being triggered continuously

  useEffect(() => {
    fetch('https://example.com')  // Replaced 'foo' with a valid URL
      .then(() => setLoaded(true))
      .catch(error => console.error('Error fetching data:', error));
  }, [counter]); // Added counter to the dependency array

  return (
    <button className="relative left-[50%] top-52 border border-blue-700 px-9 py-4 bg-black text-white rounded-full" onClick={() => {
      setCounter(counter + 1);
    }}>
      {counter}
    </button>
  );
}
