'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Hamburger from '../assets/hamburger.png'
import Closed from '../assets/excluir.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [link, setLink] = useState(Hamburger);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setLink(isOpen ? Hamburger : Closed);
  }

  return (
    <nav className="bg-white w-screen">
      <div className="w-screen px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <Link href='/' className="text-center text-black leading-3 hover:text-red-950 ease-in-out duration-200 hover:font-semibold">Moyses<br/>Israel</Link>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/">
                  <p className="px-5 text-slate-800 hover:text-slate-400 hover:underline self-center">Início</p>
                </Link>
                <Link href="/memorial">
                  <p className="px-5 text-slate-800 hover:text-slate-400 hover:underline self-center">Memorial</p>
                </Link>
                <Link href="/biografia">
                  <p className="px-5 text-slate-800 hover:text-slate-400 hover:underline self-center">Biografia</p>
                </Link>
                <Link href="/contato">
                  <p className="px-5 text-slate-800 hover:text-slate-400 hover:underline self-center">Contato</p>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="border-yellow-500 border-2 text-zinc-900 px-5 py-1.5 rounded-md hover:text-zinc-50 hover:bg-yellow-500 transition-all ease-in-out duration-300">
                <span className="sr-only">Podcast</span>
                <Link href="/podcast">
                  <p className="px-1 rounded-md text-sm font-medium">Podcast</p>
                </Link>
              </button>
            </div>
          </div>
          
          </div>
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="bg-yellow-400 items-center justify-center p-2 rounded-full text-gray-400 hover:text-white flex ">
              <span className="sr-only">Open main menu</span>
              <Image src={link} alt='hamburger' width={25} height={25} className='invert-0'/>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <p className="px-5 text-slate-800 hover:text-slate-400 hover:underline self-center">Início</p>
            </Link>
            <Link href="/memorial">
              <p className="px-5 text-slate-800 hover:text-slate-400 hover:underline self-center">Memorial</p>
            </Link>
            <Link href="/biografia">
              <p className="px-5 text-slate-800 hover:text-slate-400 hover:underline self-center">Biografia</p>
            </Link>
            <Link href="/contato">
              <p className="px-5 text-slate-800 hover:text-slate-400 hover:underline self-center">Contato</p>
            </Link>
            <Link href="/podcast">
              <p className="px-5 text-slate-800 hover:text-slate-400 hover:underline self-center">Podcast</p>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
