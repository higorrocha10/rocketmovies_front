import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { FiArrowLeft, FiStar, FiClock } from "react-icons/fi"
import { Header } from "../../components/Header"
import { Tag } from "../../components/Tag"
import { useParams, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Ratings } from "../../components/Ratings"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { Container, Content } from "./styles"

export function Details() {
  const [data, setData] = useState(null)

  const { user } = useAuth()
  const params = useParams()

  const navigate = useNavigate()

  // Buscando avatar del usuario.
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  function handleBack() {
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm("¿Seguro que quieres eliminar la película?")

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchMovies()
  }, [])

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <header>
              <ButtonText
                title="Volver"
                icon={FiArrowLeft}
                onClick={handleBack}
              />

              <div className="title">
                <h1>{data.title}</h1>
                <Ratings rating={data.rating} />
              </div>

              <div className="datos">
                <span>
                  <img src={avatarUrl} alt={user.name} />
                  Por {user.name}
                </span>

                <span>
                  <FiClock />
                  {data.created_at}
                </span>
              </div>
            </header>

            {data.tags &&
              data.tags.map((tag) => (
                <Tag key={String(tag.id)} title={tag.name} />
              ))}

            <p>{data.description}</p>

            <Button title="Eliminar película" onClick={handleRemove} $isnew />
          </Content>
        </main>
      )}
    </Container>
  )
}

// Solo muestra el main si hay contenido. Sino hay no muestr NADA. "data &&."
