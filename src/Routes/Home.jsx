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
        console.log(data)
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
        {/* Aqui deberias renderizar las cards */}
        {
          values.map((value) => {
            return (
              <Card key={value.id} name={value.name} username={value.username} id={value.id} />
            )
          })
        }
      </div>
    </main>
  )
}

export default Home