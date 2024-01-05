import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full min-h-screen bg-red-300 flex items-center justify-center text-9xl text-red-500'>
      Hello
    </div>
  )
}
