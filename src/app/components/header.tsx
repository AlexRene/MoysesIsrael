import Link from "next/link";

export default function Header(){
    return(
        <header className="flex justify-between p-2 px-12 items-center  ">
        <Link href='/' className="text-center leading-3 hover:text-red-950 ease-in-out duration-200 hover:font-semibold">Moyses<br/>Israel</Link>
        <div className="flex item-center justify-center max-sm:hidden">
          <Link href='/' className="px-5 text-slate-800 text-slate-400 self-center drop-shadow-lg"><p className="">Inicio</p></Link>
          <Link href='/memorial' className="px-5 text-slate-800 hover:text-slate-400 hover:underline self-center">Memorial</Link>
          <Link href='/biografia' className="px-5 text-slate-800 hover:text-slate-400 hover:underline self-center">Biografia</Link>
          <Link href='/' className="px-5 text-slate-800 hover:text-slate-400 hover:underline self-center">Contato</Link>
          <Link href='/' ><button className="border-yellow-500 border-2 text-zinc-900 px-5 py-1.5 rounded-md hover:text-zinc-50 hover:bg-yellow-500 transition-all ease-in-out duration-300">Podcast</button></Link>
        </div>
      </header>
    )
}