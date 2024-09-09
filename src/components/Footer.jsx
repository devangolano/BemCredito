import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black absolute w-full mt-[6400px] md:mt-[3900px] text-white">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <img width={163} height={42} src="./logo.png" alt="Logo" />    
        <div>
            <p className="text-sm">Site confiável 100% seguro</p>
            <p className="flex items-center space-x-1 text-sm">
              <img src="https://imagepng.org/wp-content/uploads/2019/08/google-icon.png" alt="Google" className="h-5" />
              <span>4,7/5</span>
            </p>
          </div>
        </div>

        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-400">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaLinkedinIn />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="bg-gray-800">
        <div className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            {["O Bem Pra Crédito", "Empréstimos", "FGTS", "Consórcio", "Transparência"].map((item) => (
              <li key={item} className="flex justify-between items-center border-b border-gray-700 py-2">
                <span>{item}</span>
                <span>↓</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-black text-xs py-4">
        <div className="container mx-auto px-4">
          <p className="text-start leading-relaxed">
            O BEM PRA CRÉDITO, registrado sob a razão social: PP Promotora de
            Vendas S.A, inscrita no CNPJ/ME sob o nº 18.249.116/0001-24 com sede
            em São Paulo, no Estado de São Paulo é um prestador de serviços
            atuante como correspondente bancário, nos termos da Resolução CMN nº
            4.935 de 2021 (“Correspondente no país”), cadastrado em diversas
            instituições financeiras que poderão ser confirmadas e consultadas
            através dos canais de Atendimento (WhatsApp: +55 11 964872716 e
            Email:atendimento@bempracredito.com.br).
          </p>
          <p className="text-start font-bold mt-2 leading-relaxed">
            O BEM PRA CRÉDITO NÃO EXERCE ATIVIDADE PRIVATIVA DE INSTITUIÇÃO
            FINANCEIRA, NOS TERMOS DA LEI 4.595/64, E POR ISSO NÃO CONCEDE
            CRÉDITO E APENAS DIVULGA EM SUA PLATAFORMA DIGITAL E APLICATIVO,
            PROPOSTAS DE OPERAÇÕES DE CRÉDITO REALIZADAS POR INSTITUIÇÕES
            FINANCEIRAS DEVIDAMENTE AUTORIZADAS A FUNCIONAR PELO BANCO CENTRAL
            DO BRASIL.
          </p>
          <p className="text-start mt-2 leading-relaxed">
            As ofertas divulgadas no site e aplicativo do BEM PRA CRÉDITO são
            fornecidas pelas Instituições Financeiras e correspondem a simulações
            de crédito, cujas condições são variáveis conforme Política de
            Crédito da Instituição Financeira proponente. Nas simulações de
            crédito apresentadas aos interessados, o prazo de pagamento poderá
            variar entre 3 e 36 meses, a depender da Instituição Financeira
            escolhida, assim como o Custo Efetivo Total (Resolução CMN nº
            4.881/2020 - CET) poderá variar de acordo com a Instituição
            Financeira escolhida, entre as taxas 7,67% a.a. e 605,84% a.a.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;