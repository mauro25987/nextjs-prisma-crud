import type { Task } from '@/libs/definitions'

export default function TaskCard({ task }: { task: Task }) {
  return (
    <div className="bg-slate-900 p-3 hover:cursor-pointer hover:bg-slate-800">
      <h3 className="mb-2 text-2xl font-bold">{task.title}</h3>
      <p>{task.description}</p>
      <p>{new Date(task.createdAt).toLocaleDateString()}</p>
    </div>
  )
}
