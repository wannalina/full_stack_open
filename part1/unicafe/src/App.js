import { useState } from 'react'


const StatisticCount = ({statistics}) => {
  return (
    <div>
      <Statistic statistics={statistics.good}/>
      <Statistic statistics={statistics.neutral}/>
      <Statistic statistics={statistics.bad}/>
    </div>
  )
}

const Statistic = ({statistics}) => {
  return (
    <div> 
      <p>{statistics.name} {statistics.count}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const statistics = {
    good: {
      name:'good',
      count: good
    }, 
    neutral: {
      name: 'neutral',
      count: neutral
    },
    bad: {
      name: 'bad',
      count: bad
    }
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good+1)}>good</button>
      <button onClick={() => setNeutral(neutral+1)}>neutral</button>
      <button onClick={() => setBad(bad+1)}>bad</button>

      <h1>statistics</h1>
      <StatisticCount statistics={statistics} />
    </div>
  )
}

export default App