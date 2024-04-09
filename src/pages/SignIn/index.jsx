import { Background } from "./styles"
import { FiMail, FiLock } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { useNavigate } from "react-router-dom"
import { Container, Form } from "./styles"

import { useAuth } from "../../hooks/auth"
import { useState } from "react"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signIn } = useAuth()

  const navigate = useNavigate()

  function handleBack() {
    navigate("/register")
  }

  function handleSigIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicación para guardar tus pelis favoritas.</p>

        <h2>Iniciar sesión </h2>
        <Input
          placeholder="Correo electrónico"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Contraseña"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Entrar" $isnew onClick={handleSigIn} />

        <div className="register">
          <p>¿No tienes cuenta?</p>
          <ButtonText title="Regístrate" onClick={handleBack} />
        </div>
      </Form>

      <Background />
    </Container>
  )
}
