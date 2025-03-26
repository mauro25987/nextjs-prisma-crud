import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex h-[calc(100vh-20rem)] items-center justify-center">
      <div className="text-center">
        <h3 className="text-4xl font-bold">Pagina no encontrada</h3>
        <Link href={'/'} className="mt-100 text-2xl text-slate-400 hover:text-slate-200">
          Back
        </Link>
      </div>
    </section>
  )
}
