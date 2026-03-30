import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './paginas/Home/Home'
import Equipe from './paginas/Equipe/Equipe'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projetos' element={<></>}/>
            <Route path='/equipe' element={<></>}/>
        </Routes>
      </BrowserRouter>
   </>
  )
}

export default App
