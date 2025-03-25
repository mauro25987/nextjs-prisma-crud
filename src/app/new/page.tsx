'use client'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Label from '@/components/Label'
import TextArea from '@/components/TextArea'
import { useRouter } from 'next/navigation'

function FormPage() {
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { elements } = event.currentTarget
    const input = elements.namedItem('title')
    const textarea = elements.namedItem('description')
    const isValid = input instanceof HTMLInputElement && textarea instanceof HTMLTextAreaElement
    if (!isValid || input === null || textarea === null) return
    const res = await fetch('/api/v1/tasks', {
      method: 'POST',
      body: JSON.stringify({ title: input.value, description: textarea.value }),
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await res.json()
    console.log(data)
    router.push('/')
  }
  return (
    <div className="flex h-screen items-center justify-center">
      <form className="w-full bg-slate-800 p-10 md:w-1/4 lg:w-1/2" onSubmit={handleSubmit}>
        <Label htmlFor="title" className="text-sm font-bold">
          Titulo de la Tarea
        </Label>
        <Input
          id="title"
          name="title"
          type="text"
          className="mb-4 w-full border border-gray-400 bg-white p-2 text-black"
          placeholder="Titulo"
          required
        />
        <Label htmlFor="desc" className="text-sm font-bold">
          Descripcion de la tarea
        </Label>
        <TextArea
          id="desc"
          name="description"
          rows={10}
          className="mb-4 w-full border border-gray-400 bg-white p-2 text-black"
          placeholder="Describe tu tarea"
          required
        />
        <Button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Crear
        </Button>
      </form>
    </div>
  )
}

export default FormPage
