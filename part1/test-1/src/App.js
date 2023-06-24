const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

const App = () => {
  const friends = [
    {name:'Peter', age:23},
    {name:'Isla', age:11},
  ];

  return (
    // can either be wrapped in <div></div> or fragment like this
  <> 
    <h1>Greetings</h1>
    <Hello name='George' age='23' />
    <Hello name={friends[0].name} age={friends[0].age} />
    <Hello name={friends[1].name} age={friends[1].age} />
  </>
  )
}

export default App;
