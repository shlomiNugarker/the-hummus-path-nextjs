import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white hover:text-gray-300">login</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link className="text-white hover:text-gray-300" href="/about">
                אודות
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-gray-300" href="/currency">
                המרת כסף
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-gray-300" href="/favorite">
                מועדפים
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-gray-300" href="/contact">
                יצירת קשר
              </Link>
            </li>
          </ul>
        </nav>

        <h1 className="text-white text-xl font-bold">
          <Link href="/">שביל החומוס</Link>
        </h1>
      </div>
    </header>
  )
}

export default Header
