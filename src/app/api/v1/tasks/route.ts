import { prisma } from '@/libs/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const tasks = await prisma.task.findMany()
  return NextResponse.json({ message: tasks })
}

export async function POST(req: NextRequest) {
  const { title, description } = await req.json()
  const newTask = await prisma.task.create({
    data: {
      title,
      description,
    },
  })
  return NextResponse.json({ message: newTask })
}
