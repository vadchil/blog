import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
      <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-900 mb-4">
        404
      </h1>
      <p className="text-lg text-neutral-600 mb-8">
        The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="inline-block text-soft-blue hover:text-soft-green transition-colors duration-200 font-medium"
      >
        ← Back to home
      </Link>
    </div>
  )
}

