import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-neutral-200 sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-xl font-semibold text-neutral-900 hover:text-soft-blue transition-colors duration-200"
          >
            Mas Satria
          </Link>
          
          <div className="flex space-x-6 sm:space-x-8">
            <Link
              href="/"
              className="text-neutral-700 hover:text-soft-blue transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-neutral-700 hover:text-soft-blue transition-colors duration-200 font-medium"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

