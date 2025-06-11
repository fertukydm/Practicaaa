import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'
import Button from '../components/Button'

export default function WelcomePage() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/dashboard'), 3000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="welcome-container">
      <Title>¡Bienvenida, Olga!</Title>
      <p>Te redirigiremos al panel en 3 segundos…</p>
      <Button onClick={() => navigate('/dashboard')}>Ir ahora</Button>
    </div>
  )
}
