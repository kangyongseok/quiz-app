import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`flex_screen_center ${inter.className}`}>
      <Link href="/quiz">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        퀴즈 풀기
        </button>
      </Link>
    </div>
  )
}
