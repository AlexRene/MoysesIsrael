import Link from "next/link"
import React from "react"
import Image from "next/image"
import Image1 from '../../assets/images/IMG_5052.jpg'
import Image2 from "../../assets/images/IMG_5053.jpg"
import Image3 from "../../assets/images/IMG_5054.jpg"
import Image4 from "../../assets/images/IMG_5051.jpg"
import Image5 from "../../assets/images/DJI_0668.jpg"
import Image6 from "../../assets/images/DJI_0678.jpg"
import Footer from "@/app/components/footer"
export default function Biografia(){
    return(
        <main>
            <div className="flex flex-col justify-center items-center text-center bg-zinc-900 py-[5rem]">
                <h2 className="text-[60px] font-semibold text-zinc-200 py-1">Biografia</h2>
                <p className="text-justify w-[70%] text-zinc-200 text-[20px]">Moysés Benarrós Israel nasceu em Manaus, em 1924. Era o primogênito do casal Salomon Benarrós Israel e Carlota Sabbá Israel. 
                    Ainda jovem passou a ajudar o tio, Isaac Sabbá, pioneiro e construtor da Refinaria de Petróleo de Manaus. 
                    O empresário teve a sua vida ligada à história do Estado, principalmente ao setor da economia, onde atuou como empresário nos mais diversos setores.
                    Entre muitos cargos ocupados Moysés Israel foi vice-presidente da Cia Brasileira de Plantações.
                    Diretor da Cia de Petróleo da Amazônia: sócio da l. B. Sabbá & Cia Lida.
                    Como defensor do Ensino Superior no Amazonas, na década de 1990 fez a doação de área para a antiga UA, atual Universidade Federal do Amazonas, 
                    construída em 2007 e para a Universidade do Estado do Amazonas (UEA), onde funciona o Centro de Estudos Superiores da UEA,
                    inaugurado em setembro de 2002. Diante de todos os feitos desse grande homem para a sociedade, a UFAM no ano de 2015,
                    dedicou o espaço da residência do empresário para homenageá-lo com a Memorália, lugar onde são guardados objetos pessoais 
                    e toda a história de vida, trabalho e dedicação ao estado do Amazonas e ao município de Itacoatiara para que todos possam 
                    conhecer quem foi e o que fez Moysés Israel.</p>
            </div>

            <div className="w-screen flex justify-around text-black flex-wrap py-20">
                <div className="">
                    <p className="uppercase text-xl font-semibold text-center sm:mt-4 md:mt-4 text-[40px]">Principais Realizações</p>
                    <div className="flex flex-col border border-black p-4 rounded-md mt-4 w-[600px]  max-sm:w-[80%] max-sm:mx-auto">
                        <ul className="text-black gap-5 flex flex-col">
                            <li className="border-b-2 border-black"><span className="font-semibold">1945:</span><p>Moyses Benarros Israel ao 21 anos é premiado pela Rubber Development Corporation - Reconhecimento à sua contribuição ao acordo da borracha na Amazônia;</p></li>
                            <li className="border-b-2 border-black"><span className="font-semibold">1953:</span><p>Participou da construção e operação da Refinaria de Petróleo de Manaus;
                            </p></li>
                            <li className="border-b-2 border-black"><span className="font-semibold">1960:</span><p>Participou da fundação e instalação da Federação das Indústrias do Amazonas (Fieam)
                            </p></li>
                            <li className="border-b-2 border-black"><span className="font-semibold">2001:</span><p>Moção de agrececimento da Ufam pela doação do terreno Cacaia Grande;
                            </p></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex justify-center text-black text-[40px] font-semibold pb-8">
                <h2>Fotos de Moysés Israel</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-black px-2 pb-8">
            <div className="w-[350px] h-[350px] ma"><Image src={Image1} alt="foto1" className="w-full h-full" /></div>
            <div className="w-[350px] h-[350px]"><Image src={Image2} alt="foto1" className="w-full h-full" /></div>
            <div className="w-[350px] h-[350px]"><Image src={Image3} alt="foto1" className="w-full h-full" /></div>
            <div className="w-[350px] h-[350px]"><Image src={Image4} alt="foto1" className="w-full h-full" /></div>
            <div className="w-[350px] h-[350px]"><Image src={Image5} alt="foto1" className="w-full h-full" /></div>
            <div className="w-[350px] h-[350px]"><Image src={Image6} alt="foto1" className="w-full h-full" /></div>
            </div>

            <Footer/>
        </main>
    )
}