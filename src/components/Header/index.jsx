import { Input } from "../../components/Input"
import { FiSearch } from "react-icons/fi"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { Container, Brand, Profile, Search } from "./styles"

export function Header({ setSearch }) {
  const { signOut, user } = useAuth()
  const navigation = useNavigate()

  function openProfile() {
    navigation("/profile")
  }

  function handleSignOut() {
    navigation("/")
    signOut()
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  return (
    <Container>
      <Brand to="/">
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <Input
          placeholder="Búsqueda por título"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Profile>
        <div>
          <strong>{user.name}</strong>
          <button onClick={handleSignOut}>Cerrar sesión</button>
        </div>

        <img src={avatarUrl} alt={user.name} onClick={openProfile} />
      </Profile>
    </Container>
  )
}
