import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 bg-white">
      <p className="text-xs text-gray-600">© 2024 Tech Consulting Partners. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs text-gray-600 hover:text-logo-600 hover:underline underline-offset-4" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs text-gray-600 hover:text-logo-600 hover:underline underline-offset-4" href="#">
          Privacy
        </Link>
      </nav>
    </footer>
  )
}

export default Footer