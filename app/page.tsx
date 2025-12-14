import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

export default function Home() {
  const allPostsData = getSortedPostsData()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="text-center mb-16 sm:mb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-neutral-900 mb-4">
          Mas Satria
        </h1>
        <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
          Pengalaman, ide, dan cerita dalam format yang bersih dan sederhana
        </p>
      </div>

      <div className="space-y-8 sm:space-y-12">
        {allPostsData.map((post) => (
          <article
            key={post.slug}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-8"
          >
            <Link href={`/posts/${post.slug}`} className="block group">
              <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-3 group-hover:text-soft-blue transition-colors duration-200">
                {post.title}
              </h2>
              <p className="text-sm text-neutral-500 mb-4">
                {formatDate(post.date)}
              </p>
              <p className="text-neutral-700 leading-relaxed mb-4">
                {post.description}
              </p>
              <span className="text-soft-blue group-hover:text-soft-green transition-colors duration-200 font-medium">
                Read more →
              </span>
            </Link>
          </article>
        ))}
      </div>

      {allPostsData.length === 0 && (
        <div className="text-center py-12">
          <p className="text-neutral-500 text-lg">No posts yet. Check back soon!</p>
        </div>
      )}
    </div>
  )
}

