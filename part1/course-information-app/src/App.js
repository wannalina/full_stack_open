
const Header = (course) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Content = (course) => { 

  return ( 
    <div>
      <Part content={course.part1_content}/>
      <Part content={course.part2_content}/>
      <Part content={course.part3_content}/>
    </div>
  )
}

const Total = (course) => {
  const total_number = course.exercises1 + course.exercises2 + course.exercises3
  
  return (
    <p>Number of exercises {total_number}</p>
  )
}

const Part = (course) => {
    return (
      <p>
        {course.content}
        <br />
      </p>
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
      <Content 
        part1_content={`${part1} ${exercises1}`}  
        part2_content={`${part2} ${exercises2}`}
        part3_content={`${part3} ${exercises3}`}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App
