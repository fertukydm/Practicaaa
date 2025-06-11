import { Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import DashboardPage from './pages/DashboardPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  )
}
