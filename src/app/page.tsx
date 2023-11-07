// Libs
import Link from "next/link"
import Footer from "./components/footer"
export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center text-center w-screen bg-zinc-900 py-60 img1 ">
        <h2 className="text-[60px] leading-[60px] text-zinc-200 font-semibold nobg blur-0">MUSEU<br />Moysés Israel</h2>
        <p className="text-zinc-200 py-5 px-32 max-sm:px-10 nobg font-medium shadow-md text-lg">A contribuição excepcional para a compreensão do processo de desenvolvimento do Estado do Amazonas e a Amazônia como um todo, passa obrigatoriamente pela ação do homem Moysés Israel.</p>
      </div>
      <div className="flex py-32 px-20 justify-evenly leading-10 flex-wrap">
        <div className="bg-zinc-700 w-[400px] h-[600px] rounded-2xl max-sm:h-[400px] img2"></div>
        <div className="w-[600px] text-black">
            <p className="text-[60px] text-center font-semibold mt-4 max-md:text-[45px]">Em tempos sem<br />esperança?</p>
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
      <div className="bg-zinc-900 w-screen flex justify-around text-zinc-50 py-36 flex-wrap img3">
        <div className="flex gap-[10%] justify-center p-10 text-[28px] font-light text-center border rounded-md self-center max-sm:border-none max-sm:p-0">
          <p className="leading-10"><span className="font-bold text-[42px] max-sm:text-[32px] ">1924</span><br />Nascimento</p>
          <p className="leading-10"><span className="font-bold text-[42px] max-sm:text-[32px]">2016</span><br />Falecimento</p>
        </div>
        <div className="">
          <p className="uppercase text-xl font-semibold text-center sm:mt-4 md:mt-4">Principais Realizações</p>
          <div className="flex flex-col border p-4 rounded-md mt-4 w-[600px]  max-sm:w-[80%] max-sm:mx-auto">
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
      <Footer/>
    </main>
  )
}
