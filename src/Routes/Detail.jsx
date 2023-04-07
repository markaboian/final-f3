import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { endpoint } from './Home'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const {id} = useParams()
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const [values, setValues] = useState([])

  useEffect(() => {
    axios.get(`${endpoint}/${id}`)
      .then(({ data }) => {
        console.log(data)
        setValues(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <h1>Detail Dentist id {id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div>
        <h1>{values.name}</h1>
        <p>{values.email}</p>
        <p>{values.phone}</p>
        <p>{values.website}</p>
      </div>

    </>
  )
}

export default Detail