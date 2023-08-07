import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <h1>home page</h1>
      <Link href='/about'>Go to About Page</Link>
    </main>
  )
}