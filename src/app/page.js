import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex ">
      <Link href="/detail">
        Detail Page
      </Link>
    </main>
  )
}
