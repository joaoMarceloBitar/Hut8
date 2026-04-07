import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer/Footer'
import Home from './paginas/Home/Home'
import Navbar from './components/layout/Navbar/Navbar'
import Equipe from './paginas/Equipe/Equipe'
import Projetos from './paginas/Projetos/Projetos'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projetos' element={<Projetos />} />
          <Route path='/equipe' element={<Equipe />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App