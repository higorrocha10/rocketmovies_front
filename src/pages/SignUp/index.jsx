import { Background } from "./styles"
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Link, useNavigate } from "react-router-dom"

import { api } from "../../services/api" // Para conectarnos con el BACK-END.

import { useState } from "react"

import { Container, Form } from "./styles"

export function SignUp() {
  // Estados y funcion para actualizar dichos estados.
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  //Llevando al usuario a la pantalla de SignIn/iniciar sesión.
  const navigate = useNavigate()

  function handleBack() {
    navigate("/")
  }

  // Función para validar el correo electrónico
  function validateEmail(email) {
    // Expresión regular para validar el formato del correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email) // Si le paso correo true sino false
  }

  // Funciones
  //email validation e sanitize string
  function handleSignUp() {
    // Verificamos si los campos han sido rellenados por el usuario. ()
    if (!name || !email || !password) {
      return alert("Rellene todos los campos!")
    }

    // Validamos el correo electrónico
    if (!validateEmail(email)) {
      return alert("Correo electrónico no válido")
    }

    // Enviando datos del usuario al back-end.
    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuario registrado correctamente!")
        navigate("/")
      })
      .catch((error) => {
        if (error.response) {
          //Capturando el mensaje de error que hemos creado en el back-end.
          alert(error.response.data.message)
        } else {
          alert("No fue posible registrar al usuario.")
        }
      })
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicación para guardar tus pelis favoritas.</p>

        <h2>Crear tu cuenta</h2>
        <Input
          placeholder="Nombre"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="Correo electrónico"
          type="email"
          value={email}
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Contraseña"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Registrarse" $isnew onClick={handleSignUp} />

        <ButtonText
          title="Iniciar sesión"
          icon={FiArrowLeft}
          onClick={handleBack}
        />
      </Form>

      <Background />
    </Container>
  )
}
