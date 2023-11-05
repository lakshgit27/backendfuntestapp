import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios';
import { response } from 'express';

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    // Make a get request with axios 
    axios.get('http://localhost:3000/jokes').then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })


  return (
    <>
    <h1>Full Stack App </h1>
    <p>JOKES :{jokes.length}</p>

    {/* looping the jokes  */}
    {
      jokes.map((joke,index)=>(
        // jokes is itself an object which contains id, title and content toh indexing se key-values access hogi
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>

        </div>


      ))
    }
    
    </>
  )
}

export default App
