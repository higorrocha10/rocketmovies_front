import { FiArrowLeft } from "react-icons/fi"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { Section } from "../../components/Section"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { api } from "../../services/api"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Form } from "./styles"

export function Create({}) {
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState(null)
  const [description, setDescription] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }

  function handleBack() {
    navigate(-1)
  }

  async function handleNewMovie() {
    const validateRating = rating >= 0 && rating <= 5

    if (!title) {
      return alert("Introduzca el título de la película por favor!")
    }

    if (!rating) {
      return alert("Por favor introduzca la valoración de la película!")
    }

    if (!validateRating) {
      return alert("La valoración debe estar entre 0 y 5!")
    }

    if (newTag) {
      return alert(
        "Tienes una etiqueta en el campo agregar, pero no la has agregado, haz clic en el botón + para agregarla. "
      )
    }

    await api.post("/notes", {
      title,
      description,
      rating,
      tags,
    })

    alert("Película registrada correctamente!")
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonText
              title="Volver"
              icon={FiArrowLeft}
              onClick={handleBack}
            />

            <h1>Nueva película</h1>
          </header>
          <div>
            <Input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Valoración (0-5)"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <Textarea
            placeholder="Análisis"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Etiquetas">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}

              <NoteItem
                isNew
                placeholder="Nueva etiqueta"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <div>
            <Button title="Guardar cambios" $isnew onClick={handleNewMovie} />
          </div>
        </Form>
      </main>
    </Container>
  )
}
