import { useState, useCallback } from 'react'

const API_URL = 'https://retoolapi.dev/JWtbTo/eventos'

export default function useEvents() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchEvents = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(API_URL)
      const data = await res.json()
      setEvents(data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [])

  const createEvent = async (event) => {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event)
    })
    await fetchEvents()
  }

  const updateEvent = async (id, event) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event)
    })
    await fetchEvents()
  }

  const deleteEvent = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
    await fetchEvents()
  }

  return { events, loading, error, fetchEvents, createEvent, updateEvent, deleteEvent }
}


