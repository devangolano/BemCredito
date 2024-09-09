import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';

const Footer = () => {
  const [open, setOpen] = useState({});

  const toggleOpen = (section) => {
    setOpen((prevState) => ({ ...prevState, [section]: !prevState[section] }));
  };

  const sections = [
    'O Bom Pra Crédito',
    'Empréstimos',
    'FGTS',
    'Consórcio',
    'Transparência'
  ];

  return (
    <footer className="bg-black absolute text-white">
      {/* Upper Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 py-4 px-6">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <img src="logo.png" alt="Logo" className="h-8" />
          <span className="text-sm text-gray-300">Site confiável 100% seguro</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="google-reviews.png" alt="Google Reviews" className="h-6" />
          <span className="text-sm">4.7/5</span>
          <div className="flex space-x-4 ml-4">
            <a href="#" className="text-white"><FaFacebookF size={20} /></a>
            <a href="#" className="text-white"><FaInstagram size={20} /></a>
            <a href="#" className="text-white"><FaLinkedinIn size={20} /></a>
            <a href="#" className="text-white"><FaYoutube size={20} /></a>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 px-6 py-4 border-b border-gray-700">
        {sections.map((section) => (
          <div key={section} className="border-b border-gray-700">
            <button
              onClick={() => toggleOpen(section)}
              className="flex justify-between items-center w-full text-left font-semibold text-white py-2"
            >
              {section}
              <AiOutlineDown
                className={`text-gray-400 transform transition-transform ${
                  open[section] ? 'rotate-180' : ''
                }`}
              />
            </button>
            {open[section] && (
              <div className="text-sm text-gray-400 mt-2">
                {/* Subitems can be added here */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lower Section */}
      <div className="text-xs text-gray-400 leading-relaxed p-6">
        <p className="mb-2">
          O BOM PRA CRÉDITO, registrado sob a razão social: PP Promotora de Vendas S.A., inscrita no CNPJ/ME sob o nº 18.249.116/0001-24 com sede em São Paulo, no Estado de São Paulo é um prestador de serviços atuante como correspondente bancário, nos termos da Resolução CMN nº 4.935 de 2021 ("Correspondente no país"), cadastrado em diversas instituições financeiras que poderão ser confirmadas e consultadas através dos canais de Atendimento (WhatsApp: +55 11 98925-5012 e Email:atendimento@bompracredito.com.br).
        </p>
        <p className="mt-2 font-semibold text-white">
          O BOM PRA CRÉDITO NÃO EXERCE ATIVIDADE PRIVATIVA DE INSTITUIÇÃO FINANCEIRA, NOS TERMOS DA LEI 4.595/64, E POR ISSO NÃO CONCEDE CRÉDITO E APENAS DIVULGA EM SUA PLATAFORMA DIGITAL E APLICATIVO, PROPOSTAS DE OPERAÇÕES DE CRÉDITO REALIZADAS POR INSTITUIÇÕES FINANCEIRAS DEVIDAMENTE AUTORIZADAS A FUNCIONAR PELO BANCO CENTRAL DO BRASIL.
        </p>
        <p className="mt-2">
          As ofertas divulgadas no site e aplicativo do BOM PRA CRÉDITO são formuladas pelas Instituições Financeiras e correspondem a simulações de crédito, cujas condições são variáveis conforme Política de Crédito da Instituição Financeira proponente. Nas simulações de crédito apresentadas aos interessados, o prazo de pagamento poderá variar entre 3 e 38 meses, a depender da Instituição Financeira escolhida, assim como o Custo Efetivo Total (Resolução CMN nº 4.881/2020 - CET) poderá variar de acordo com a Instituição Financeira escolhida, entre as taxas 8.7% a.a. e 605,84% a.a.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
