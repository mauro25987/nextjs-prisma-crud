import type { Task } from '@/libs/definitions'
import Link from 'next/link'

function TaskCard({ task }: { task: Task }) {
  return (
    <Link href={`/task/edit/${task.id}`}>
      <div className="bg-slate-900 p-3 hover:cursor-pointer hover:bg-slate-800">
        <h3 className="mb-2 text-2xl font-bold">{task.title}</h3>
        <p>{task.description}</p>
        <p>{new Date(task.createdAt).toLocaleDateString()}</p>
      </div>
    </Link>
  )
}

export { TaskCard }
