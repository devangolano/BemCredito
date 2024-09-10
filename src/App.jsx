import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importa o ícone do WhatsApp
import Navbar from './components/Navbar';
import Aviso from './components/Aviso';
import Header from './components/Header';
import CreditSteps from './components/CreditSteps';
import StepDesk from './components/StepDesk';
import Quiz from './components/Quiz';
import Testimonials from './components/Testimonials';
import FaqComponent from './components/FaqComponent';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
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
            <h2 className='mb-6 text-3xl font-bold'>O que é empréstimo pessoal Bem Pra Crédito?</h2>
            <p>O empréstimo pessoal do Bem Pra Crédito é uma solução segura para pessoas físicas obterem crédito de forma rápida. Nele, não há necessidade de ofertar algum bem como garantia, nem o motivo para solicitar o dinheiro emprestado.</p>
            <p className='mt-5 '>Assim, você pode realizar o empréstimo para qualquer finalidade, seja para pagar dívidas, reformar sua casa, viajar, abrir um negócio ou investir em estudos.</p>
            <button className="w-36  mt-8 absolute bg-green-500 font-mono text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-200">
             <a href="#"> Simular →</a>
            </button>
          </div>
        </div>
        <StepDesk />
        <Quiz />
        <Testimonials />
        <FaqComponent />
        <BlogSection />

        <div className="flex md:hidden -z-10 bg-white flex-col mt-80 pt-12 md:flex-row items-center md:items-start md:left-28 absolute">     
          <div className='md:w-1/2 p-4'>
            <h2 className='mb-10 text-3xl font-bold'>O que é empréstimo pessoal Bem Pra Crédito?</h2>
            <p>O empréstimo pessoal do Bem Pra Crédito é uma solução segura para pessoas físicas obterem crédito de forma rápida. Nele, não há necessidade de ofertar algum bem como garantia, nem o motivo para solicitar o dinheiro emprestado.</p>
            <p className='mt-5 '>Assim, você pode realizar o empréstimo para qualquer finalidade, seja para pagar dívidas, reformar sua casa, viajar, abrir um negócio ou investir em estudos.</p>
            <button className="w-36 mt-6 absolute bg-green-500 font-mono text-gray-600 font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-200">
              <a href="#">Simular →</a>
            </button>
          </div>
          <div className='mt-28 md:w-1/2'>
            <img src='/image-section-desk.webp' className='' alt='imagem da mulher sorrindo' />
          </div>
          <CreditSteps />
        </div>
      </section>
      <Footer />

      {/* Ícone do WhatsApp flutuante */}
      <a 
        href="https://wa.me/5511964872716?text=Prezados,%0A%0AGostaria%20de%20solicitar%20informações%20sobre%20as%20opções%20de%20empréstimo%20pessoal%20oferecidas%20pela%20*BEM%20PRA%20CRÉDITO*%20para%20clientes%20com%20restrições%20de%20crédito.%20Agradeço%20antecipadamente%20pela%20atenção%20e%20aguardo%20suas%20orientações%20sobre%20os%20procedimentos%20necessários." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-200"
      >
        <FaWhatsapp size={28} />
      </a>


    </div>
  );
}

export default App;
