import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './paginas/Home/Home'
import Navbar from './components/layout/Navbar/Navbar'
import Equipe from './paginas/Equipe/Equipe'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projetos' element={<></>} />
          <Route path='/equipe' element={<Equipe />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App