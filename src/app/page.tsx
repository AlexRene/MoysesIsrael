// Libs
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <header className="flex justify-between p-2 px-12 items-center  ">
        <Link href='/' className="text-center leading-3 hover:text-red-950 ease-in-out duration-200 hover:font-semibold">Moyses<br/>Israel</Link>
        <div className="flex item-center justify-center max-sm:hidden">
          <Link href='/' className="px-5 text-slate-800 hover:text-slate-400 hover:underline self-center"><p className="">Inicio</p></Link>
          <Link href='/' className="px-5 text-slate-800 hover:text-slate-400 hover:underline self-center">Memorial</Link>
          <Link href='/' className="px-5 text-slate-800 hover:text-slate-400 hover:underline self-center">Biografia</Link>
          <Link href='/' className="px-5 text-slate-800 hover:text-slate-400 hover:underline self-center">Contato</Link>
          <Link href='/' ><button className="border-yellow-500 border-2 text-zinc-900 px-5 py-1.5 rounded-md hover:text-zinc-50 hover:bg-yellow-500 transition-all ease-in-out duration-300">Podcast</button></Link>
        </div>
      </header>
      <div className="flex flex-col justify-center text-center w-screen bg-zinc-900 py-60">
        <h2 className="text-[60px] leading-[60px] text-zinc-200 font-semibold">MUSEU<br />Moysés Israel</h2>
        <p className="text-zinc-200 py-5 px-32 max-sm:px-10">A contribuição excepcional para a compreensão do processo de desenvolvimento do Estado do Amazonas e a Amazônia como um todo, passa obrigatoriamente pela ação do homem Moysés Israel.</p>
      </div>
      <div className="flex py-32 px-20 justify-evenly leading-10 flex-wrap ">
        <div className="bg-zinc-700 w-[400px] h-[600px] rounded-2xl max-sm:h-[400px]"></div>
        <div className="w-[600px]">
            <p className="text-[60px] text-center font-semibold mt-4">Em tempos sem<br />esperança?</p>
            <p className="font-bold text-center">Moysés Israel</p>
            <p className="leading-7 mt-2">Nasceu em 10 de fevereiro de 1924 na cidade de Manaus sob os cuidados da parteira D. Lidia.
            Filho de Salomão Benarrós Israel e Carlota Benaion Sabbá.
            O sr. Moysés Israel, o primogênito da família Israel, logo se revelou um líder nato, com todo o vigor para o trabalho incomum. Aos 18 anos foi emancipado por sua mãe, dona Cotinha, condição op legis, para se tornar sócio da firma I. B. Sabbá & Cia.
            No trato leve e maneiroso com as pessoas, dono de irradiadora simpatia, de sorriso constante e aberto, desde cedo foi capaz de dialogar com pessoas de diversos níveis culturais e obter resultados sinérgicos.
            Começou aí a consolidação de um elo importantíssimo de uma equipe que fez prosperar múltiplas atividades e produziu significativos avanços, cujas marcas se encontram estampadas no cotidiano de toda a sociedade que descendeu dessa época.
            Este pioneiro pode ser conceituado como uma estrela de primeira
            grandeza a irradiar luz para todos aqueles que
            se permitem aprender com este exemplo viva de compromisso, dedicação e amor à sua terra querida – O Amazonas.</p>
        </div>
      </div>
      <div className="bg-zinc-900 w-screen flex justify-around text-zinc-50 py-36 flex-wrap flex-grow-0 flex-shrink-0">
        <div className="flex gap-10 p-10 text-[28px] font-light text-center border rounded-md self-center max-sm:border-none max-sm:p-0">
          <p className="leading-10"><span className="font-bold text-[42px] max-sm:text-[32px] ">1924</span><br />Nascimento</p>
          <p className="leading-10"><span className="font-bold text-[42px] max-sm:text-[32px]">2016</span><br />Falecimento</p>
        </div>
        <div className="">
          <p className="uppercase text-xl font-semibold text-center sm:mt-4 md:mt-4">Principais Realizações</p>
          <div className="flex flex-col border p-4 rounded-md mt-4 w-[600px]  max-sm:w-[400px]">
            <ul className="text-zinc-50 gap-5 flex flex-col">
              <li className="border-b-2 border-zinc-50"><span className="font-semibold">1945:</span><p>Moyses Benarros Israel ao 21 anos é premiado pela Rubber Development Corporation - Reconhecimento à sua contribuição ao acordo da borracha na Amazônia;</p></li>
              <li className="border-b-2 border-zinc-50"><span className="font-semibold">1953:</span><p>Participou da construção e operação da Refinaria de Petróleo de Manaus;
              </p></li>
              <li className="border-b-2 border-zinc-50"><span className="font-semibold">1960:</span><p>Participou da fundação e instalação da Federação das Indústrias do Amazonas (Fieam)
              </p></li>
              <li className="border-b-2 border-zinc-50"><span className="font-semibold">2001:</span><p>Moção de agrececimento da Ufam pela doação do terreno Cacaia Grande;
              </p></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-20 flex-col px-44 bg-zinc-200 max-sm:px-20">
        <div className="h-64 w-64 rounded-full bg-slate-500 shadow-xl shadow-slate-950 mb-12"></div>
        <p className="mb-2 text-slate-800">“O exemplo de vida, luta, trabalho, perseverança, determinação e amor ao próximo sem distinção de raça, cor ou credo, deve ser o mais importante legado ás gerações e pósteras de um homem por inteiro, que é Moysés Benarrós Israel.”</p>
        <p className="text-zinc-500 font-extrabold text-center">ETELVINA GARCIA</p>
      </div>
      <footer className="flex flex-col justify-center items-center py-20 bg-zinc-900">
        <div className="w-[200px] h-[200px] bg-slate-50 rounded-full shadow-md shadow-black"></div>
        <p className="mt-4 text-slate-100 font-semibold">UFAM</p>
      </footer>
    </main>
  )
}
