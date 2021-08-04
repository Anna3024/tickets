import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
import { useDispatch } from "react-redux"
import {setUser} from "../redux/actions"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
        dispatch(setUser(user))
        
        setLoading(false)
      })
      return unsubscribe
  }, [dispatch])

  const value = {
      currentUser
    }

  return (
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    )
}

export default AuthProvider
