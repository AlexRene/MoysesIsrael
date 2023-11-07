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
import Footer from "@/app/components/footer"

export default function Memorial(){
    return(
        <main>
            <div className="flex pb-10 flex-wrap max-md:px-2 justify-center flex-col pt-10">
            
            <div className="flex flex-wrap w-screen justify-center">
                <div className="items-center self-center flex-col flex w-[600px]">
                    <h2 className="text-[40px] font-semibold text-zinc-900 max-md:text-[40px]">Homenagem da UFAM<br/>Memorial Moysés Israel</h2>
                    <p className="text-zinc-900 text-justify text-[16px] w-[90%] self-center max-lg:w-[90%] max-lg:text-[20px]">A cerimônia de reconhecimento, que contará com alunos, 
                    docentes e técnicos, além da reitora, professora Márcia Perales Mendes Silva, 
                    será realizada para o empresário com a entrega oficial de uma memorália, espaço em que
                    são mantidas as memórias, condecorações e objetos do homenageado. Empreendedor e defensor
                    da educação e do desenvolvimento social, o empresário Moysés Benarrós Israel doou, ainda 
                    na década de 1990, um terreno de 18.145,62 metros quadrados, onde hoje estão abrigados nove
                    cursos de graduação e um de pós-graduação em nível de mestrado.</p>
                </div>
                <div className="">
                <Image src={Image10} alt="Foto do Memorial" className="fill w-[37rem] h-[28rem] max-md:h-[18rem]"/>
                </div>
                </div>
                
            </div>

            <div className="flex justify-center items-center py-20 flex-col px-44  max-sm:px-20 text-zinc-200 img5 h-screen">
                <h2 className="font-semibold text-[40px] pb-6">Moysés Benarrós Israel</h2>
                <p className="text-[20px]">“Trago doses de ajuda, principalmente aos jovens estudantes. Acho importante contribuir
                    para um mundo melhor e vejo a educação como um caminho sólido e certeiro.”</p>
            </div>
            <div className="flex flex-col justify-center text-center pt-10">
                <h2 className="font-semibold text-[40px] text-zinc-900 pb-10">Imagens do Memorial</h2>
            </div>
            <div className="flex flex-wrap px-2 mb-10 justify-center gap-4">
            <Image src={Image1} alt="Foto do Memorial" className="w-[400px] h-[400px] max-md:w-[250px] max-md:h-[250px] "/>
            <Image src={Image2} alt="Foto do Memorial" className="w-[400px] h-[400px] max-md:w-[250px] max-md:h-[250px]"/>
            <Image src={Image3} alt="Foto do Memorial" className="w-[400px] h-[400px] max-md:w-[250px] max-md:h-[250px]"/>
            <Image src={Image4} alt="Foto do Memorial" className="w-[400px] h-[400px] max-md:w-[250px] max-md:h-[250px]"/>
            <Image src={Image5} alt="Foto do Memorial" className="w-[400px] h-[400px] max-md:w-[250px] max-md:h-[250px]"/>
            <Image src={Image6} alt="Foto do Memorial" className="w-[400px] h-[400px] max-md:w-[250px] max-md:h-[250px]"/>
            <Image src={Image7} alt="Foto do Memorial" className="w-[400px] h-[400px] max-md:w-[250px] max-md:h-[250px]"/>
            <Image src={Image8} alt="Foto do Memorial" className="w-[400px] h-[400px] max-md:w-[250px] max-md:h-[250px]"/>
            <Image src={Image9} alt="Foto do Memorial" className="w-[400px] h-[400px] max-md:w-[250px] max-md:h-[250px]"/>            
            </div>
        <Footer/>
            
        </main>
    )
}