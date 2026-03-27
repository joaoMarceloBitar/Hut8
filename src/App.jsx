import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './paginas/Home/Home'
import Navbar from './components/layout/Navbar/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projetos' element={<></>} />
          <Route path='/equipe' element={<></>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
