import { prisma } from '@/libs/prisma'
import { NextRequest, NextResponse } from 'next/server'

interface PropsParams {
  params: Promise<{ id: string }>
}

export async function GET(req: NextRequest, { params }: PropsParams) {
  const { id } = await params
  const task = await prisma.task.findUnique({
    where: { id: parseInt(id) },
  })
  return NextResponse.json({ message: task })
}

export async function PUT(req: NextRequest, { params }: PropsParams) {
  const { id } = await params
  const data = await req.json()
  const taskUpdate = await prisma.task.update({
    data,
    where: { id: parseInt(id) },
  })
  return NextResponse.json({ message: taskUpdate })
}

export async function DELETE(req: NextRequest, { params }: PropsParams) {
  const { id } = await params
  const taskRemoved = await prisma.task.delete({
    where: { id: parseInt(id) },
  })
  return NextResponse.json({ message: taskRemoved })
}
