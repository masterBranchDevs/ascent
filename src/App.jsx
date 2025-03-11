import { Routes, Route } from "react-router"
import HomePage from './pages/home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
