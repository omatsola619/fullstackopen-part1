import React, { useState } from "react";

function App() {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({});

  const vote = (anecdote) => {
    const voted = { ...votes };
    voted[anecdote] = voted[anecdote] + 1 || 1;
    setVotes(voted);
  };

  return (
    <div className="app">
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[anecdotes[selected]] || 0} votes</p>
      <button onClick={() => vote(anecdotes[selected])}>Vote</button>
      <button
        onClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
      >
        Next anecdote
      </button>

      <h3>Anecdotes with most votes</h3>
      {/*anecdote with highest vote */}
      <p>
        {Object.keys(votes)
          .sort((a, b) => votes[b] - votes[a])
          .map((anecdote) => (
            <p key={anecdote}>
              {anecdote} has {votes[anecdote]} votes
            </p>
          ))}
      </p>
    </div>
  );
}

export default App;
