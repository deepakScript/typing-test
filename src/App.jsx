import React, { useState } from 'react'
import './App.css'

const sentences = [
  "Hello World",
  "This is the greates things ever",
  "React is a good library",
  "Typing fast is a useful skill",
  "Hello World I'm Deepak Chhantal"
]

const App = () => {
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [result, setResult] = useState(null);
  const [resultHistory, setResultHistory] = useState([]);
  return (
    <div>
      
    </div>
  )
}

export default App
