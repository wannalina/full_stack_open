
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header name = {'Half Stack application development'}/>
      <Content 
        part1_content={`${part1.name} ${part1.exercises}`}  
        part2_content={`${part2.name} ${part2.exercises}`}
        part3_content={`${part3.name} ${part3.exercises}`}/>
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
    </div>
  )
}

export default App
