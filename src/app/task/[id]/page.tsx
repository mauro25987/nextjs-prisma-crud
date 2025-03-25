import TaskCard from '@/components/TaskCard'
import { API_URL } from '@/libs/config'
import { Task } from '@/libs/definitions'

async function getTask({ id }: { id: string }): Promise<Task> {
  const res = await fetch(`${API_URL}api/v1/tasks/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  const data = await res.json()
  return data.message
}

export default async function TaskPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const task = await getTask({ id })
  return (
    <section className="container mx-auto">
      <div className="mt-10 flex items-center justify-center p-20">
        <TaskCard task={task} />
      </div>
    </section>
  )
}
