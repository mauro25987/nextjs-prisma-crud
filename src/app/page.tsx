import TaskCard from '@/components/TaskCard'
import { API_URL } from '@/libs/config'
import { Task } from '@/libs/definitions'
import Link from 'next/link'

async function getTasks(): Promise<Task[]> {
  const res = await fetch(`${API_URL}api/v1/tasks`)
  const data = await res.json()
  return data.message
}

export default async function Home() {
  const tasks = await getTasks()
  return (
    <section className="container mx-auto">
      <div className="mt-10 grid grid-cols-3 gap-3">
        {tasks.map(task => (
          <Link href={`/task/${task.id}`} key={task.id}>
            <TaskCard task={task} />
          </Link>
        ))}
      </div>
    </section>
  )
}
