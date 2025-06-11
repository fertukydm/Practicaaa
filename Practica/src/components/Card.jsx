import Button from './Button'

export default function Card({ event, onEdit, onDelete }) {
  return (
    <div className="card p-4 border rounded mb-4">
      <h2 className="font-semibold">{event.evento}</h2>
      <p>{event.direccion}</p>
      <p>Tipo: {event.tipoEvento}</p>
      <p>{event.descripcion}</p>
      <div className="mt-2 space-x-2">
        <Button onClick={() => onEdit(event)}>Editar</Button>
        <Button onClick={() => onDelete(event.id)}>Eliminar</Button>
      </div>
    </div>
  )
}
