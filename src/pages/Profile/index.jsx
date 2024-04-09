import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { Container, Form, Avatar } from "./styles"

import { useState } from "react"
import { useAuth } from "../../hooks/auth"

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const navigate = useNavigate()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  function handleBack() {
    navigate(-1)
  }

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header>
        <ButtonText title="Volver" icon={FiArrowLeft} onClick={handleBack} />
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto del usuario" />

          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <Input
          placeholder="Nombre"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="Correo electrónico"
          type="text"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Contraseña actual"
          type="password"
          icon={FiLock}
          onChange={(e) => setPasswordOld(e.target.value)}
        />

        <Input
          placeholder="Nueva contraseña"
          type="password"
          icon={FiLock}
          onChange={(e) => setPasswordNew(e.target.value)}
        />

        <Button title="Guardar cambios" $isnew onClick={handleUpdate} />
      </Form>
    </Container>
  )
}
