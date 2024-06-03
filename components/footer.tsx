import React from 'react'

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
        <small className="mb-2 block text-sx">
            &copy; 2030 Cheryl. All rights reserved
        </small>
        <p>
            <span className="font-semibold">About this website:</span> built with React & Next.js, 
            TypeScript, Tailwind CSS, Framer motion, Vercel hosting.
        </p>
    </footer>
  )
}
