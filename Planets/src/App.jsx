import './App.css'
import { Route, Routes } from 'react-router-dom'
import Mercury from './pages/Mercury'
import Venus from './pages/Venus'
import Earth from './pages/Earth'
import Mars from './pages/Mars'
import Jupiter from './pages/Jupiter'
import Saturn from './pages/Saturn'
import Uranus from './pages/Uranus'
import Neptune from './pages/Neptune'

const res = await fetch(`./src/pages/data.json`)
const planets = await res.json(); 

export default function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Mercury prop={planets[0]} />} />
        <Route path='/venus' element={<Venus prop={planets[1]} />} />
        <Route path='/earth' element={<Earth prop={planets[2]} />} />
        <Route path='/mars' element={<Mars prop={planets[3]} />} />
        <Route path='/jupiter' element={<Jupiter prop={planets[4]} />} />
        <Route path='/saturn' element={<Saturn prop={planets[5]} />} />
        <Route path='/uranus' element={<Uranus prop={planets[6]} />} />
        <Route path='/neptune' element={<Neptune prop={planets[7]} />} />
      </Routes>
    </div>
  )
}