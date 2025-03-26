export type Task = {
  id: number
  title: string
  description: string
  createdAt: string
}

export type TaskEdit = Omit<Task, 'id' | 'createdAt'>
