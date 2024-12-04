import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'

function App() {
  const [count, setCount] = useState(0)

  const actors = ['Sakib', 'Shariful Raz', 'Jasim', 'Rubel', 'Salman Shah']

  return (
    <>
      <h1>Vite + React</h1>
      <Actor name="Bappa Raz"></Actor>
      {
        actors.map(actor =><Actor name={actor}></Actor>)
      }
      {/* <Todo 
        task="Learn React" 
        isDone={True}>
      </Todo>
      <Todo 
        task="Explore Core Concepts" 
        isDone={False}>
      </Todo>
      <Todo 
        task="Try JSX" 
        isDone={True}>
      </Todo> */}
      {/* {<Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="17"></Device>
      <Device name="Watch" price="43"></Device>
      <Person></Person>
      <Student grade="12" score="97"></Student>
      <Student grade="11" score="98"></Student>
      <Student grade="7" score="99"></Student>
      <Developer></Developer>} */}
    </>
  )
}

function Device(props){
  return <h2>This device is : {props.name} price: {props.price} </h2>
}

function Person(){
  const age = 25;
  const money = 20;
  const person = {name: 'Sakib', age: 12}
  return 
  <h3>I am a {person} with age: {age + money}</h3>
}

const {grade=0, score=0} = {grade: '7', score:'99'};

function Student (grade, score){
  return (
    <div>
      <h3>This is student</h3>
      <p>Class: {grade}</p>
      <p>Score: {score} </p>
    </div>
  )
}

function Developer(){
  const develperStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px'
  }
  return (
    <div style={develperStyle}>
      <h3>Developer</h3>
      <p>Coding: </p>
    </div>
  )
}

export default App
