import { TaskCard } from '@/components'
import { Task } from '@/libs/definitions'
import { prisma } from '@/libs/prisma'

async function getTasks(): Promise<Task[]> {
  // const res = await fetch(`${API_URL}api/v1/tasks`)
  // const data = await res.json()
  // return data.message
  return await prisma.task.findMany()
}

export default async function Home() {
  const tasks = await getTasks()
  return (
    <section className="container mx-auto">
      <div className="mt-10 grid grid-cols-3 gap-3">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  )
}
