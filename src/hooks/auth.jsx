import { createContext, useContext, useState, useEffect } from "react"
import { api } from "../services/api"

export const AuthContext = createContext({}) // Creando nuestro contexto.

// {children} Será las rutas de la aplicación en este caso.
function AuthProvider({ children }) {
  const [data, setData] = useState({}) //Estado para almacenar datos de usuario y token.

  async function signIn({ email, password }) {
    // console.log(user, token)
    try {
      const response = await api.post("/sessions", { email, password })
      // console.log(response)
      const { user, token } = response.data

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user)) //user a texto.
      localStorage.setItem("@rocketmovies:token", token)

      // Insertando el token de usuario en el encabezado de autenticación para todas las peticiones.
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`
      // Almacenando en la función de actualización del estado user y token.
      //Actualizando el contenido de user y token.
      setData({ user, token })
    } catch (error) {
      //Si nuestro "error" tiene un response.
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("No es posible iniciar sesión!")
      }
    }
  }

  //Función para salir de la aplicación.
  function signOut() {
    //Obteniendo token y user del LocalStorage.
    const token = localStorage.removeItem("@rocketmovies:token")
    const user = localStorage.removeItem("@rocketmovies:user")

    setData({}) //Volviendo el estado a un objeto vacío.
  }

  //Función para actualizar datos del ussuario
  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)

        const response = await api.patch("/users/avatar", fileUploadForm)
        // console.log(response)
        user.avatar = response.data.avatar
      }

      await api.put("/users", user)
      localStorage.setItem("@rocketmovies:user", JSON.stringify(user))

      setData({ user, token: data.token })
      alert("Perfil actualizado con éxito!")
    } catch (error) {
      //Si nuestro "error" tiene un response.
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("No fue posible actualizar el perfil!")
      }
    }
  }

  useEffect(() => {
    //Obteniendo token y user del LocalStorage.
    const token = localStorage.getItem("@rocketmovies:token")
    const user = localStorage.getItem("@rocketmovies:user")

    //Asegurar que token y user han sido informados.
    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user),
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateProfile,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// Usando nuestro contexto.
function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }

// user: data.user: Estrategia para compartir estados a través de contextos con toda la aplicación
