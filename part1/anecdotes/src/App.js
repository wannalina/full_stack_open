import { useState } from "react"

const Button = ({func, text}) => {
  return(
    <div>
      <button onClick={func}>{text}</button>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const votes = new Array (anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(votes);

  const generateAnecdote = () => {
    let random_number = Math.floor(Math.random() * 7)
    console.log(selected, random_number)
    setSelected(random_number)
    return (random_number)
  }

  const addVotes = () => {
    let votesUpdate = [...votes]
    votesUpdate[selected] += 1

    const result = [];
    for (let i = 0; i < votesUpdate.length; i++) {
      result.push(votesUpdate[i] + voted[i]);
    }
    
    setVoted(result)
  }

  return (
    <div>
      <h1>{anecdotes[selected]}</h1>
      <h2>has {voted[selected]} votes</h2>
      <br />
      <Button func={() => generateAnecdote()} text={'next anecdote'} />
      <Button func={() => addVotes()} text={'vote'} />
    </div>
  )
}

export default App;
