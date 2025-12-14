import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about the author and this blog.',
}

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-900 mb-8">
        About
      </h1>
      
      <div className="prose prose-lg">
        <p className="text-lg text-neutral-700 leading-relaxed mb-6">
        Selamat datang di blog minimalis saya. Ini adalah ruang tempat saya berbagi pemikiran, ide, dan cerita dalam format yang bersih dan sederhana.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
        Saya percaya pada kekuatan kesederhanaan dan kejelasan. Blog ini mencerminkan filosofi tersebut—berfokus pada konten daripada kerumitan, makna daripada hiasan.
        </p>
        
        <p className="text-neutral-700 leading-relaxed">
        Silakan menjelajahi artikel-artikel yang ada, dan jika Anda ingin terhubung, Anda dapat menemukan saya di media sosial atau menghubungi saya melalui email.
        </p>

        <p className="text-neutral-700 leading-relaxed">
          Email: <a href="mailto:college.satriafm@gmail.com" className="text-soft-blue hover:text-soft-green transition-colors duration-200">college.satriafm@gmail.com</a><br />
          Instagram: <a href="https://www.instagram.com/satriafm__" className="text-soft-blue hover:text-soft-green transition-colors duration-200">satriafm__</a><br />
          Github: <a href="https://www.github.com/vadchil" className="text-soft-blue hover:text-soft-green transition-colors duration-200">vadchil</a>
        </p>
      </div>
    </div>
  )
}

