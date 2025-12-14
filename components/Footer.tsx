export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-neutral-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-neutral-500 text-sm">
          <p>© {currentYear} Mas Satria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

