// import React, { useContext, useState, useEffect } from "react"
// import { auth } from "../firebase"
// // import { connect } from "react-redux"
// import {setUser} from "../redux/actions"

// const AuthContext = React.createContext()

// export function useAuth() {
//     return useContext(AuthContext)
// }

// const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState()
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//       const unsubscribe = auth.onAuthStateChanged(user => {
//         setCurrentUser(user)
//         setLoading(false)
//       })
//       return unsubscribe
//   }, [])

//   const value = {
//       currentUser
//     }

//   return (
//       <AuthContext.Provider >
//         {!loading && children}
//       </AuthContext.Provider>
//     )
// }

// export default AuthProvider
// export default connect(null, {setUser})(AuthProvider) 
