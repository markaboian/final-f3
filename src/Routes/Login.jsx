import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Container, Input } from '../Styles/StyledComponent'

const Login = () => {

  const [values, setValues] = useState({email: "", password: ""})
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
    navigate("/home")
  }

  return (
    <Container>
      <form action="" onSubmit={handleSubmit}>
        <label>Email:</label>
        <Input type="email" name="email" id="email" placeholder='Ingrese su email' value={values.email} onChange={(e) => setValues({...values, email: e.target.value})} />

        <label>Contraseña</label>
        <Input type="password" name="password" id="password" placeholder='Ingrese su contraseña' value={values.password} onChange={(e) => setValues({...values, password: e.target.value})} />

        <Button type="submit">Submit</Button>
      </form>
    </Container>
  )
}

export default Login