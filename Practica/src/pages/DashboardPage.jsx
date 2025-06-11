import { useEffect, useState } from 'react'
import useEvents from '../hooks/useEvents'
import Title from '../components/Title'
import Card from '../components/Card'
import EventForm from '../components/EventForm'
import Button from '../components/Button'

export default function DashboardPage() {
  const { events, loading, error, fetchEvents, createEvent, updateEvent, deleteEvent } = useEvents()
  const [editing, setEditing] = useState(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => { fetchEvents() }, [fetchEvents])

  if (loading) return <p>Cargando…</p>
  if (error)   return <p>Error al cargar eventos</p>

  return (
    <div>
      <Title>Administrador de Eventos</Title>
      <Button onClick={() => { setEditing(null); setShowForm(true) }}>
        + Nuevo Evento
      </Button>

      {showForm && (
        <EventForm
          initialData={editing}
          onSubmit={editing ? (data) => updateEvent(editing.id, data) : createEvent}
          onCancel={() => setShowForm(false)}
        />
      )}

      {events.map(ev => (
        <Card
          key={ev.id}
          event={ev}
          onEdit={(e) => { setEditing(e); setShowForm(true) }}
          onDelete={deleteEvent}
        />
      ))}
    </div>
  )
}

