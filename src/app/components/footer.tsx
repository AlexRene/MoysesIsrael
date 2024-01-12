import Image from "next/image";
import Link from "next/link";
export default function Footer(){
    return(
        <div className="">
            <div className="flex justify-center items-center py-20 flex-col px-44 bg-zinc-200 max-sm:px-20">
        <div className="h-64 w-64 rounded-full bg-slate-500 shadow-xl shadow-slate-950 mb-12 img-etelvina"></div>
        <p className="mb-2 text-slate-800">“O exemplo de vida, luta, trabalho, perseverança, determinação e amor ao próximo sem distinção de raça, cor ou credo, deve ser o mais importante legado ás gerações e pósteras de um homem por inteiro, que é Moysés Benarrós Israel.”</p>
        <p className="text-zinc-500 font-extrabold text-center">ETELVINA GARCIA</p>
      </div>
      <footer className="flex flex-col justify-center items-center py-20 bg-zinc-900 img4">
        <div className="w-[200px] h-[200px] bg-slate-50 rounded-full shadow-md shadow-black ufam "></div>
        <p className="mt-4 text-slate-900 font-black">UFAM</p>
      </footer>
      <nav className="bg-zinc-900 w-screen">
      <div className="w-screen px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center   h-16">
        <Link href='/' className="text-center text-white leading-3 hover:text-red-500 ease-in-out duration-200 hover:font-semibold">Moyses<br/>Israel</Link>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/">
                  <p className="px-5 text-zinc-100 hover:text-slate-400 hover:underline self-center">Início</p>
                </Link>
                <Link href="/memorial">
                  <p className="px-5 text-zinc-100 hover:text-slate-400 hover:underline self-center">Memorial</p>
                </Link>
                <Link href="/biografia">
                  <p className="px-5 text-zinc-100 hover:text-slate-400 hover:underline self-center">Biografia</p>
                </Link>
                <Link href="/contato">
                  <p className="px-5 text-zinc-100 hover:text-slate-400 hover:underline self-center">Contato</p>
                </Link>
              </div>
            </div>
        </div>
      </div>
      </div>
    </nav>
        </div>
    )
}