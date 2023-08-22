import { useState } from 'react'


const Statistics = ({statistics}) => {
  // function to calculate total number of evaluations given
  const total = () => {
    let count = 0
    statistics.forEach(element => {
      count += element.count
    });
    return (count)
  }

  // function to calculate average score
  const average = () => {
    let number = 0
    statistics.forEach(element => {
      number += element.count
    });

    const sum = (statistics[0].count * statistics[0].score)
               + (statistics[1].count * statistics[1].score) 
               + (statistics[2].count * statistics[2].score)
    const avg = sum / number 
    return (avg)
  }

  // function to calculate the percentage of positive evaluations
  const positive = () => {
    const all = total()
    const positive = statistics[0].count / all
    return (positive + '%')
  }

  if (total() !== 0) {
    return (
      <div>
        <Statistic name={statistics[0].name} count={statistics[0].count}/>
        <Statistic name={statistics[1].name} count={statistics[1].count}/>
        <Statistic name={statistics[2].name} count={statistics[2].count}/>
        <Statistic name='all' count={total()} />
        <Statistic name='average' count={average()} />
        <Statistic name='positive' count={positive()} />
      </div>
    )
  }
  return (
    <div>
      <p>No feedbck given</p>
    </div>
  )

}

const Statistic = ({name, count}) => {
  return (
    <div> 
      <p>{name} {count}</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const statistics = [
    {
      name:'good',
      count: good,
      score: 1
    }, 
    {
      name: 'neutral',
      count: neutral, 
      score: 0
    },
    {
      name: 'bad',
      count: bad, 
      score: -1
    }
  ]

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good+1)}>good</button>
      <button onClick={() => setNeutral(neutral+1)}>neutral</button>
      <button onClick={() => setBad(bad+1)}>bad</button>

      <h1>statistics</h1>
      <Statistics statistics={statistics} />
    </div>
  )
}

export default App