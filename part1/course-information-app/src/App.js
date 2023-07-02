
const Header = (course) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Content = (course) => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return ( 
    <>
      <p>
        {course.part1} {exercises1}
      </p><p>
        {course.part2} {exercises2}
      </p><p>
        {course.part3} {exercises3}
      </p>
    </>
  )
}

const Total = (course) => {
  const total_number = course.exercises1 + course.exercises2 + course.exercises3
  
  return (
    <p>Number of exercises {total_number}</p>
  )
}

const App = () => {
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'

  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header name = {'Half Stack application development'}/>
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App
