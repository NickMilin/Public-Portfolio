import { HashRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import {NotFound} from './pages/NotFound'

function App() {

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
