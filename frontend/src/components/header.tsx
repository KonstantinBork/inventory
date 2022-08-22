import Link from "next/link"

const Header = () => {
  return (
    <nav className="lg:col-span-6 flex flex-row border border-solid border-black text-center">
      <span className="flex-auto border border-solid border-black"><Link href="/">Home</Link></span>
      <span className="flex-auto border border-solid border-black"><Link href="/">Videospiele</Link></span>
      <span className="flex-auto border border-solid border-black"><Link href="/">Bücher</Link></span>
      <span className="flex-auto border border-solid border-black"><Link href="/">Musik</Link></span>
      <span className="flex-auto border border-solid border-black"><Link href="/">Anmelden</Link></span>
    </nav>
  )
}

export default Header