import Link from 'next/link'

function Navbar() {
  return (
    <nav className="bg-slate-800">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href={'/'}>
          <h1 className="text-3xl font-bold">NextTask</h1>
        </Link>
        <ul className="flex gap-x-4 text-lg font-bold">
          <li>
            <Link href={'/new'} className="text-slate-300 hover:text-slate-200">
              New Task
            </Link>
          </li>
          <li>
            <Link href={'/about'} className="text-slate-300 hover:text-slate-200">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export { Navbar }
