import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import * as AuthSession from 'expo-auth-session'
import * as AppleAuthentication from 'expo-apple-authentication'
import { AsyncStorage } from 'react-native'

const { REDIRECT_URI } = process.env
const { CLIENT_ID } = process.env
interface AuthProviderProps {
  children: ReactNode
}

interface UserProps {
  id: string
  name: string
  email: string
  photo?: string
}

interface IAuthContextData {
  user: UserProps
  signInWithGoogle: () => Promise<void>
  signInWithApple: () => Promise<void>
  signInWithEmail: () => Promise<void>
  signOut(): Promise<void>
  userStorageLoading: boolean
}

interface IAuthorizationResponse {
  params: {
    access_token: string
  }
  type: string
}

const AuthContext = createContext({} as IAuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState({ id: '123' } as UserProps)
  const [userStorageLoading, setUserStorageLoading] = useState(true)

  const userStorageKey = '@boilerplate:user'

  async function signInWithGoogle() {
    try {
      const RESPONSE_TYPE = 'token'
      const SCOPE = encodeURI('profile email')

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

      console.log(authUrl)
      const { type, params } = (await AuthSession.startAsync({
        authUrl
      })) as IAuthorizationResponse

      console.log('params', params)
      console.log('type', type)

      if (type === 'success') {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        )

        const userInfo = await response.json()

        const userLogged = {
          id: userInfo.id,
          email: userInfo.email,
          locale: userInfo.locale,
          name: userInfo.name,
          photo: userInfo.picture
        }

        setUser(userLogged)
        await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged))
        console.log('success', userLogged)
      }
    } catch (error) {
      console.log('error', error)
      throw new Error(error as string)
    }
  }

  async function signInWithApple() {
    try {
      const credentials = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL
        ]
      })
      if (credentials) {
        const userLogged = {
          id: credentials.user,
          name: credentials.fullName!.givenName!,
          email: credentials.email!,
          photo: undefined
        }

        setUser(userLogged)
        await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged))
        console.log('success', userLogged)
      }
    } catch (error) {
      console.log('error', error)
      throw new Error(error as string)
    }
  }

  async function signInWithEmail() {
    try {
      const userLogged = {
        id: 'giba123456789',
        name: 'Giba Dev',
        email: 'gdccomunicacao@gmail.com',
        photo:
          'https://instagram.fbsb12-1.fna.fbcdn.net/v/t51.2885-19/s150x150/245853589_659707935021096_5348148534551612677_n.jpg?_nc_ht=instagram.fbsb12-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Tqhb8pdwtWEAX-nBNGk&edm=AIQHJ4wBAAAA&ccb=7-4&oh=00_AT9xQN92HPjOHIYe8esDnj1UbNhEmRxMqb5p8agsO-ZxNw&oe=61E3F90A&_nc_sid=7b02f1'
      }

      setUser(userLogged)
      await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged))
      console.log('success', userLogged)
    } catch (error) {
      console.log('error', error)
      throw new Error(error as string)
    }
  }

  useEffect(() => {
    async function loadUserStorageDate(): Promise<void> {
      const userStorage = await AsyncStorage.getItem(userStorageKey)

      if (userStorage) {
        const userLogged = JSON.parse(userStorage) as UserProps
        setUser(userLogged)
      }

      setUserStorageLoading(false)
    }

    loadUserStorageDate()
  }, [])

  async function signOut() {
    setUser({} as UserProps)
    console.log('signOut')
    await AsyncStorage.removeItem(userStorageKey)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
        signInWithApple,
        signInWithEmail,
        signOut,
        userStorageLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }

  return context
}

export { AuthProvider, useAuth }
