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
    const positive = (statistics[0].count / all) * 100
    return (positive + '%')
  }

  if (total() !== 0) {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine name={statistics[0].name} count={statistics[0].count}/>
            <StatisticLine name={statistics[1].name} count={statistics[1].count}/>
            <StatisticLine name={statistics[2].name} count={statistics[2].count}/>
            <StatisticLine name='all' count={total()} />
            <StatisticLine name='average' count={average()} />
            <StatisticLine name='positive' count={positive()} />
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div>
      <p>No feedback given</p>
    </div>
  )

}

const StatisticLine = ({name, count}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{count}</td>
    </tr>
  )
}

const Button = ({func, text}) => {
  return (
    <button onClick={func}>{text}</button>
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
      <Button func = {() => setGood(good+1)} text = {'good'}/>
      <Button func = {() => setNeutral(neutral+1)} text = {'neutral'}/>
      <Button func = {() => setBad(bad+1)} text = {'bad'}/>

      <h1>statistics</h1>
      <Statistics statistics={statistics} />
    </div>
  )
}

export default App