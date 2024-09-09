import { useState } from 'react'
import Navbar from './components/Navbar'
import Aviso from './components/Aviso'
import Header from './components/Header'
import CreditSteps from './components/CreditSteps'
import StepDesk from './components/StepDesk'
import Quiz from './components/Quiz'

function App() {

  return (
    <>
      <Navbar />
      <Aviso />
      <Header />
      <section className='mt-[-330px] mb-36'>
      <img src="/hero-bg-mob.webp" className="-z-10 absolute bottom-[-170px] w-screen md:hidden" alt="imagem de mulher sorrindo" srcset="" />
     
      <div className="flex bg-slate-50 flex-col pt-96 -z-10 md:flex-row items-center md:items-start md:left-28 absolute">
        <div className='hidden md:block md:w-1/2'>
          <img src='/image-section-desk.webp' className='' alt='imagem da mulher sorrindo' />
        </div>
        <div className='hidden md:block md:w-1/2 p-4'>
          <h2 className='mb-6 text-3xl font-bold'>O que é empréstimo pessoal Bom Pra Crédito?</h2>
          <p>O empréstimo pessoal do Bom Pra Crédito é uma solução segura para pessoas físicas obterem crédito de forma rápida. Nele, não há necessidade de ofertar algum bem como garantia, nem o motivo para solicitar o dinheiro emprestado.</p>
          <p className='mt-5 '>Assim, você pode realizar o empréstimo para qualquer finalidade, seja para pagar dívidas, reformar sua casa, viajar, abrir um negócio ou investir em estudos.</p>
          <button className="w-36  mt-8 absolute bg-green-500 font-mono text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-200">
            Simular →
          </button>
        </div>
      </div>
      <StepDesk />
      <Quiz />


      <div className="flex md:hidden bg-white flex-col mt-80 pt-12 md:flex-row items-center md:items-start md:left-28 absolute">
     
        
        <div className='md:w-1/2 p-4'>
          <h2 className='mb-10 text-3xl font-bold'>O que é empréstimo pessoal Bom Pra Crédito?</h2>
          <p>O empréstimo pessoal do Bom Pra Crédito é uma solução segura para pessoas físicas obterem crédito de forma rápida. Nele, não há necessidade de ofertar algum bem como garantia, nem o motivo para solicitar o dinheiro emprestado.</p>
          <p className='mt-5 '>Assim, você pode realizar o empréstimo para qualquer finalidade, seja para pagar dívidas, reformar sua casa, viajar, abrir um negócio ou investir em estudos.</p>
          <button className="w-36 mt-6 absolute bg-green-500 font-mono text-gray-600 font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-200">
            Simular →
          </button>
        </div>
        <div className='mt-24 md:w-1/2'>
          <img src='/image-section-desk.webp' className='' alt='imagem da mulher sorrindo' />
        </div>
      <CreditSteps />
      </div>
      </section>
    </>
  )
}

export default App
