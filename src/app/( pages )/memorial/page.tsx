import Link from "next/link"
import Image from "next/image"
import Image1 from "../../assets/images/DJI_0534.jpg"
import Image2 from "../../assets/images/DJI_0536.jpg"
import Image3 from "../../assets/images/DJI_0645.jpg"
import Image4 from "../../assets/images/DJI_0655.jpg"
import Image5 from "../../assets/images/DJI_0692.jpg"
import Image6 from "../../assets/images/DJI_0657.jpg"
import Image7 from "../../assets/images/DJI_0660.jpg"
import Image8 from "../../assets/images/DJI_0675.jpg"
import Image9 from "../../assets/images/DJI_0674.jpg"
import Image10 from "../../assets/images/DJI_0690.jpg"

export default function Memorial(){
    return(
        <main>
            <div className="text-center py-10 justify-center flex flex-col">
                <h2 className="text-[60px] font-semibold text-zinc-900">Homenagem da UFAM - Memorial Moysés Israel</h2>
            </div>
            <div className="grid grid-cols-2 grid-rows-1 px-20 pb-10">
            <p className="text-zinc-900 text-justify px-20 text-[20px]">A cerimônia de reconhecimento, que contará com alunos, 
                docentes e técnicos, além da reitora, professora Márcia Perales Mendes Silva, 
                será realizada para o empresário com a entrega oficial de uma memorália, espaço em que
                são mantidas as memórias, condecorações e objetos do homenageado. Empreendedor e defensor
                da educação e do desenvolvimento social, o empresário Moysés Benarrós Israel doou, ainda 
                na década de 1990, um terreno de 18.145,62 metros quadrados, onde hoje estão abrigados nove
                cursos de graduação e um de pós-graduação em nível de mestrado.</p>
                <Image src={Image10} alt="Foto do Memorial" className="fill"/>
            </div>

            <div className="flex justify-center items-center py-20 flex-col px-44 bg-zinc-200 max-sm:px-20 text-zinc-900">
                <h2 className="font-semibold text-[40px] pb-6">Moysés Benarrós Israel</h2>
                <p className="text-[20px]">“Trago doses de ajuda, principalmente aos jovens estudantes. Acho importante contribuir
                    para um mundo melhor e vejo a educação como um caminho sólido e certeiro.”</p>
            </div>
            <div className="flex flex-col justify-center text-center pt-10">
                <h2 className="font-semibold text-[40px] text-zinc-900 pb-10">Imagens do Memorial</h2>
            </div>
            <div className="grid gap-4 grid-cols-3 grid-rols-2 px-10">
            <Image src={Image1} alt="Foto do Memorial" className="w-full h-full"/>
            <Image src={Image2} alt="Foto do Memorial" className="w-full h-full"/>
            <Image src={Image3} alt="Foto do Memorial" className="w-full h-full"/>
            <Image src={Image4} alt="Foto do Memorial" className="w-full h-full"/>
            <Image src={Image5} alt="Foto do Memorial" className="w-full h-full"/>
            <Image src={Image6} alt="Foto do Memorial" className="w-full h-full"/>
            <Image src={Image7} alt="Foto do Memorial" className="w-full h-full"/>
            <Image src={Image8} alt="Foto do Memorial" className="w-full h-full"/>
            <Image src={Image9} alt="Foto do Memorial" className="w-full h-full"/>
            </div>

            <div className="flex justify-center items-center py-20 flex-col px-44 bg-zinc-200 max-sm:px-20">
                <div className="h-64 w-64 rounded-full bg-slate-500 shadow-xl shadow-slate-950 mb-12"></div>
                <p className="mb-2 text-slate-800">“O exemplo de vida, luta, trabalho, perseverança, determinação e amor ao próximo sem distinção de raça, cor ou credo, deve ser o mais importante legado ás gerações e pósteras de um homem por inteiro, que é Moysés Benarrós Israel.”</p>
                <p className="text-zinc-500 font-extrabold text-center">ETELVINA GARCIA</p>
            </div>
        </main>
    )
}