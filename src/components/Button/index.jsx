import { Container } from "./styles"

export function Button({ isNew, title, loading = false, ...rest }) {
  return (
    <Container type="button" $isnew={isNew} disabled={loading} {...rest}>
      {loading ? "Cargando..." : title}
    </Container>
  )
}
