import React, { useState, useEffect } from 'react'
import Card from '../Components/Card'
import axios from "axios"
export const endpoint = "https://jsonplaceholder.typicode.com/users"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [values, setValues] = useState([])

  useEffect(() => {
    axios.get(endpoint)
      .then(({ data }) => {
        setValues(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {
          values.map((value) => {
            return (
              <Card key={value.id} name={value.name} username={value.username} id={value.id} value={value}/>
            )
          })
        }
      </div>
    </main>
  )
}

export default Home