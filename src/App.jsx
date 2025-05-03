import React from "react";
import { useState } from "react";
import Course from "./Part1/InfoCourse/InfoCourse.jsx";
import Button from "./Part1/Unicafe/paso5/Button.jsx";
import Statistics from "./Part1/Unicafe/paso3/Statistics.jsx";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [selected, setSelected] = useState(0);

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests.",
    "The only way to go fast, is to go well.",
  ];
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };
  const voteAnecdote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };
  const mostVoted = votes.indexOf(Math.max(...votes));
  // Calcular estadísticas
  // const total = good + neutral + bad;
  // const average = (good - bad) / total;
  // const positivePercentage = (good / total) * 100;

  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Course course={course} />
      <hr />
      <h1>Unicafe</h1>
      <Button text="Good" handleClick={() => setGood(good + 1)} />
      <Button text="Neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="Bad" handleClick={() => setBad(bad + 1)} />

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
      <h2>Anecdotes</h2>
      <p>{anecdotes[selected]}</p>
      <p>Votes: {votes[selected]}</p>
      <Button text="Next anecdote" handleClick={randomAnecdote} />
      <Button text="Vote" handleClick={voteAnecdote} />

      <h2>Anecdote with most votes:</h2>
      <p>{anecdotes[mostVoted]}</p>
      <p>Votes: {votes[mostVoted]}</p>
    </>
  );
};

export default App;
