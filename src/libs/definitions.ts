export type Task = {
  id: number
  title: string
  description: string
  createdAt: Date
}

export type TaskEdit = Omit<Task, 'id' | 'createdAt'>
