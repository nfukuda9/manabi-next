import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="page-header wrapper">
      <h1 className="align-center">
        <Link href="/">
          <Image 
            className="logo" 
            src="/logo_book_manasupe.png" 
            alt="Manabi Space ホーム"
            width={200}
            height={50}
          />
        </Link>
      </h1>
      <nav>
        <ul className="main-nav font-english">
          <li><Link href="/question">Practice</Link></li>
          <li><Link href="/menu">Login</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}