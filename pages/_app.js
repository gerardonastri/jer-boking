import '../styles/globals.css'
import React from 'react'
import { AuthContextProvider } from "../context/authContext/AuthContext"

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
     <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
