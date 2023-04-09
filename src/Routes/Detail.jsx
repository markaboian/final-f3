import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { endpoint } from './Home'


const Detail = () => {

  const {id} = useParams()

  const [values, setValues] = useState([])

  useEffect(() => {
    axios.get(`${endpoint}/${id}`)
      .then(({ data }) => {
        setValues(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", border: "1px solid black", backgroundColor: "grey"}}>
        <h1 style={{textTransform: "uppercase"}}>{values.name}</h1>
        <p>Email: {values.email}</p>
        <p>Cellphone: {values.phone}</p>
        <p>Website: {values.website}</p>
      </div>
    </>
  )
}

export default Detail