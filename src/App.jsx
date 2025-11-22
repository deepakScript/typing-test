import React, { useEffect, useRef, useState } from 'react'
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
  const [timer, setTimer] = useState(60);
  const inputRef = useRef(null);



  const resetTest = () => {
    const random = sentences[Math.floor(Math.random() * sentences.length)];
    setText(random);
    setInput("");
    setStartTime(null);
    setEndTime(null);
    setTimer(60);
    inputRef.current.focus();
  }
  useEffect(() => {
    resetTest();
  }, []);

  useEffect(() => {
    let interval;
    if (startTime && !endTime && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => {
          prev - 1;
        })
      }, 1000);
    }

    if (timer === 0 && !result) {
      calculateResult(startTime, new Date(), true);
    }

    return () => clearInterval(interval);
  }, [startTime, timer, endTime, result]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (!startTime && value.length > 0) {
      const now = new Date();
      setStartTime(now);
    }

    if (value === text) {
      const end = new Date();
      setEndTime(end);
      calculateResult(startTime, end);
    }
  }

  const calculateResult = (start, end, isTimeout = false) => {
    const timeTaken = (end - start) / 1000;
    const words = text.trim().split(" ").length;
    const speed = Math.round((words / timeTaken) * 60);
    const correctChars = input.split("").filter((ch, i) => ch === text[i]).length;
    const accuracy = Math.round((correctChars / text.length) * 100);

    const res = {
      speed: isTimeout ? 0 : speed,
      accuracy,
      time: isTimeout ? 60 : timeTaken.toFixed(2),
    };

    setResult(res);
    setResultHistory((prev) => [res, ...prev]);
  };

  const getHighlightedText = () => {
    return text.split("").map((char, idx) => {
      let typedChar = input[idx];
      let className = "";
      if (typedChar === undefined) className = "";
      else if (typedChar === char) className = "correct";
      else className = "incorrect";

      return (
        <span key={idx} className={className}>{char}</span>
      );
    });
  };


  return (
    <div>

    </div>
  )
}



export default App
