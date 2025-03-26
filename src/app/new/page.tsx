'use client'
import { Button, Input, Label, TextArea } from '@/components'
import { TaskEdit } from '@/libs/definitions'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

function NewTaskPage() {
  const [task, setTask] = useState<TaskEdit>({ title: '', description: '' })
  const router = useRouter()
  const { id: idTask } = useParams()

  useEffect(() => {
    if (idTask) {
      async function fetchTask() {
        const res = await fetch(`/api/v1/tasks/${idTask}`)
        const data = await res.json()
        setTask(data.message)
      }
      fetchTask()
    }
  }, [idTask])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (idTask) {
      const res = await fetch(`/api/v1/tasks/${idTask}`, {
        method: 'PUT',
        body: JSON.stringify(task),
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await res.json()
      console.log(data)
    } else {
      const res = await fetch('/api/v1/tasks', {
        method: 'POST',
        body: JSON.stringify(task),
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await res.json()
      console.log(data)
    }
    router.push('/')
  }

  const handleDeleteTask = async () => {
    const res = await fetch(`/api/v1/tasks/${idTask}`, { method: 'DELETE' })
    const data = await res.json()
    console.log(data)
    router.push('/')
  }
  return (
    <div className="flex h-screen items-center justify-center">
      <form className="bg-slate-800 p-10 md:w-1/2 lg:w-1/4" onSubmit={handleSubmit}>
        <Label htmlFor="title" className="text-sm font-bold">
          Titulo de la Tarea
        </Label>
        <Input
          id="title"
          name="title"
          value={task.title}
          type="text"
          className="mb-4 w-full border border-gray-400 bg-white p-2 text-black"
          placeholder="Titulo"
          required
          onChange={e => setTask({ ...task, title: e.target.value })}
        />
        <Label htmlFor="desc" className="text-sm font-bold">
          Descripcion de la tarea
        </Label>
        <TextArea
          id="desc"
          name="description"
          value={task.description}
          rows={10}
          className="mb-4 w-full border border-gray-400 bg-white p-2 text-black"
          placeholder="Describe tu tarea"
          required
          onChange={e => setTask({ ...task, description: e.target.value })}
        />
        <div className="flex justify-between">
          <Button variant="primary">{idTask ? 'Actualizar' : 'Crear'}</Button>
          {idTask && (
            <Button variant="danger" type="button" onClick={handleDeleteTask}>
              Eliminar
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}

export default NewTaskPage
