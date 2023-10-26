import { useState } from 'react'
import './App.css'
import { Route} from 'react-router'
import Router from 'src/routes/sections'
import ThemeProvider from './themes'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  )
}

export default App
