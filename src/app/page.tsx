'use client'
import { createContext, useContext, useEffect, useState } from "react";

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

  const moods = {
    happy: '😀',
    sad: '😔',
    angry: '👿',
  }

const moodContext = createContext(moods);
function MoodEmoji(){
const mood = useContext(moodContext);
  return  <p className="relative left-[50%] text-xl">{mood.angry}</p>
}
  return (
    <>
    <button className="relative left-[50%] top-52 border border-blue-700 px-9 py-4 bg-black text-white rounded-full" onClick={() => {
      setCounter(counter + 1);
    } }>
      {counter}
    </button>
    <moodContext.Provider value={moods}>
       <MoodEmoji/>
      </moodContext.Provider>
      </>
  );
}
