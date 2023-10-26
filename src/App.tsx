import { useState } from 'react'
import './App.css'
import { Route} from 'react-router'
import Router from 'src/routes/sections'
import ThemeProvider from './themes'
import { MotionLazy } from 'src/components/animate/motion-lazy';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <MotionLazy>
        <Router />
      </MotionLazy>
    </ThemeProvider>
  )
}

export default App
