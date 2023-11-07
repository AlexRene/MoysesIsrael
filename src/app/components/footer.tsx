import Image from "next/image";

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
        <p className="mt-4 text-slate-100 font-semibold">UFAM</p>
      </footer>
        </div>
    )
}