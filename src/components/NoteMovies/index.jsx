import { Container } from "./styles"
import { Tag } from "../Tag"
import { Ratings } from "../Ratings"

export function NoteMovies({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      <Ratings rating={data.rating} />

      <p>{data.description}</p>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  )
}
