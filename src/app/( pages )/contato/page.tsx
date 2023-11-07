import Link from "next/link"
import Image from "next/image"

import Instagram from '../../assets/instagram.png'
import Youtube from '../../assets/youtube.png'
import Facebook from '../../assets/facebook.png'
export default function Contato(){
    return(
        <main className="text-black ">
            <h2 className="text-center mt-24 text-2xl font-semibold"><span className="uppercase">Museu Moysés Israel</span> <br/>Memorial localizado no Icet-UFAM, aberto ao público para visitas.</h2>
            <div className="w-screen mt-24 flex flex-wrap justify-center items-center gap-32">
                <div className=" justify-center self-center">
                    <p className="font-semibold text-xl self-center">Localização:</p>
                    <div className="flex w-[500px] gap-5 items-center flex-wrap ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924.8152849854955!2d-58.43221698422541!3d-3.1430092993255103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926f544670d3fc23%3A0x8bde91222107db8d!2sUFAM%2FICET-%20Campus%20I!5e0!3m2!1spt-BR!2sbr!4v1699375858883!5m2!1spt-BR!2sbr" width="300" height="225"  loading="lazy"></iframe>
                    <p>Rua Nossa Senhora do Rosário, 3863, Tiradentes, Itacoatiara, AM – Brasil. CEP.: 69103-128</p>
                    </div>
                </div>
                <div className="">
                    <p className="font-semibold text-xl">Contatos:</p>
                    <p>+55 92 99143-7780<br/>
                    +55 92 99103-7395</p>
                </div>
                <div className="flex flex-col gap-5">
                    <Link href='https://www.facebook.com/profile.php?id=100083586041500' className="w-[50px]"><Image alt="instagram" src={Instagram}/></Link>
                    <Link href='https://www.instagram.com/museumoysesisrael/' className="w-[50px]"><Image alt="facebook" src={Facebook}/></Link>
                    <Link href='https://www.youtube.com/watch?v=YTW7iOZYYoo&t=7s&ab_channel=MANDAL' className="w-[50px]"><Image alt="youtube" src={Youtube}/></Link>
                    
                    
                </div>
            </div>
            <p className="text-center mt-20  font-medium">
museuvirtualmoysesisrael@gmail.com</p>
        </main>
    )
}