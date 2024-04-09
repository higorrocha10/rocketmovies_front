import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { FiPlus } from "react-icons/fi"
import { Header } from "../../components/Header"
import { NoteMovies } from "../../components/NoteMovies"
import { ButtonText } from "../../components/ButtonText"
import { Container, Content } from "./styles"

export function Home() {
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])

  const navigate = useNavigate()

  function handleDetailsMovies(id) {
    navigate(`/details/${id}`)
  }

  function handleBack() {
    navigate("/create")
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes?title=${search}`)
      setMovies(response.data)
    }

    fetchMovies()
  }, [search])

  return (
    <Container>
      <Header setSearch={setSearch} />
      <main>
        <header>
          <h1>Mis Películas</h1>

          <ButtonText
            title="Agregar película"
            icon={FiPlus}
            onClick={handleBack}
          />
        </header>

        <Content>
          {movies.map((movie) => (
            <NoteMovies
              key={String(movie.id)}
              data={movie}
              onClick={() => handleDetailsMovies(movie.id)}
            />
          ))}
        </Content>
      </main>
    </Container>
  )
}
