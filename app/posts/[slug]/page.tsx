import { notFound } from 'next/navigation'
import { getAllPostSlugs, getPostData } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const postData = getPostData(params.slug)

  if (!postData) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: postData.title,
    description: postData.description,
    openGraph: {
      title: postData.title,
      description: postData.description,
      type: 'article',
      publishedTime: postData.date,
    },
  }
}

export default function Post({ params }: Props) {
  const postData = getPostData(params.slug)

  if (!postData) {
    notFound()
  }

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <header className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-4">
          {postData.title}
        </h1>
        <p className="text-sm sm:text-base text-neutral-500">
          {formatDate(postData.date)}
        </p>
      </header>

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
      />
    </article>
  )
}

