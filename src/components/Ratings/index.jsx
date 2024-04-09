import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { Container } from "./styles"

export function Ratings({ rating, ...rest }) {
  return (
    <Container {...rest}>
      {rating >= 1 ? <AiFillStar /> : <AiOutlineStar />}
      {rating >= 2 ? <AiFillStar /> : <AiOutlineStar />}
      {rating >= 3 ? <AiFillStar /> : <AiOutlineStar />}
      {rating >= 4 ? <AiFillStar /> : <AiOutlineStar />}
      {rating >= 5 ? <AiFillStar /> : <AiOutlineStar />}
    </Container>
  )
}
