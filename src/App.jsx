
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ROUTES } from './const'
import Homepage from './pages/Homepage.jsx'
import Quizpage from './pages/Quizpage.jsx'
import ResultPage from './pages/ResultPage.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Homepage />} />
        <Route path={ROUTES.QUIZ} element={<Quizpage />} />
        <Route path={ROUTES.RESULT} element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
