import Image from "next/image"
import "css.gg/icons/css/album.css"
import "css.gg/icons/css/log-out.css"
import Sidebar from "../../components/sidebar"

const User = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 h-screen bg-slate-100">
      <Sidebar />
      <main className="flex flex-col px-8 md:col-span-5">
        <h1 className="text-2xl font-bold py-4">Profil</h1>
        <form className="flex flex-col gap-y-4 items-start">
          <label className="flex flex-row gap-4">
            <Image
              src="https://i.stack.imgur.com/mo8ak.jpg"
              alt=""
              className="rounded-full"
              width={50}
              height={50}
            />
            <div>
              <span className="block font-medium">Neues Bild hochladen</span>
              <input type="file" className="mt-2"/>
            </div>
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-medium">Name</span>
            <input type="text" className="rounded-md" placeholder="Name"/>
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-medium">E-Mail</span>
            <input type="email" className="rounded-md" placeholder="E-Mail"/>
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-medium">Passwort</span>
            <input type="password" className="rounded-md" placeholder="Passwort"/>
          </label>
          <button type="submit" className="rounded-lg bg-slate-800 text-slate-100 px-4 py-2">Speichern</button>
        </form>
      </main>
    </div>
  )
}

export default User