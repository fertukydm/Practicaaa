import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

export default function EventForm({ initialData = {}, onSubmit, onCancel }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialData
  })

  const submit = async (data) => {
    try {
      await onSubmit(data)
      Swal.fire('Éxito', 'Evento guardado correctamente', 'success')
    } catch {
      Swal.fire('Error', 'Algo salió mal', 'error')
    }
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-2">
      <div>
        <label>Nombre del evento</label>
        <input {...register('evento', { required: true })} />
        {errors.evento && <span>Este campo es obligatorio</span>}
      </div>
      <div>
        <label>Dirección</label>
        <input {...register('direccion', { required: true })} />
        {errors.direccion && <span>Este campo es obligatorio</span>}
      </div>
      <div>
        <label>Tipo de evento</label>
        <select {...register('tipoEvento', { required: true })}>
          <option value="">Selecciona…</option>
          <option value="Virtual">Virtual</option>
          <option value="Presencial">Presencial</option>
        </select>
        {errors.tipoEvento && <span>Este campo es obligatorio</span>}
      </div>
      <div>
        <label>Descripción</label>
        <textarea {...register('descripcion', { required: true })} />
        {errors.descripcion && <span>Este campo es obligatorio</span>}
      </div>
      <div className="space-x-2">
        <button type="submit">Guardar</button>
        <button type="button" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  )
}

