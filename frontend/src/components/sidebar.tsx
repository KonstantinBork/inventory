import Link from "next/link"
import Image from "next/image"

const Sidebar = () => {
  return (
    <nav className="flex flex-col col-start-1 bg-slate-800 text-slate-100 text-lg font-bold md:relative">
      <Link href="/">
        <a className="p-4">
          <Image
            src="https://i.stack.imgur.com/mo8ak.jpg"
            alt=""
            height={50}
            width={50}
          />
        </a>
      </Link>
      <div className="pl-4 w-full">
        <Link href="/user">
          <a className="flex gap-3 w-full items-center">
            <i className="gg-album"></i>
            <span>Inventar</span>
          </a>
        </Link>
        <Link href="/user">
          <a className="flex gap-5 mt-4 pl-2 w-full items-center">
            <i className="gg-log-out"></i>
            <span>Abmelden</span>
          </a>
        </Link>
      </div>
      <Link href="/user">
        <a className="flex items-center block md:absolute bottom-0 p-4 bg-slate-600 w-full">
          <Image
            src="https://i.stack.imgur.com/mo8ak.jpg"
            alt=""
            className="rounded-full"
            width={50}
            height={50}
          />
          <div className="ml-4">
            <span className="block">Profilname</span>
            <span className="block text-sm font-normal">Profil anschauen</span>
          </div>
        </a>
      </Link>
    </nav>
  )
}

export default Sidebar