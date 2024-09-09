import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black absolute w-full mt-[6230px] md:mt-[3835px] text-white">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
                              <svg width="110" height="42" viewBox="0 0 163 42" className="text-green-500" xmlns="https://www.w3.org/2000/svg"><path d="M26.0605 26.9216L18.8653 32.7926C17.6791 33.8457 16.1018 34.4883 14.3724 34.4883C10.6838 34.4883 7.69504 31.5699 7.69504 27.9703C7.69504 24.3706 10.6838 21.4522 14.3724 21.4522C17.2195 21.4522 19.6502 23.1925 20.6096 25.6424L26.2231 20.6222C24.4952 17.7901 21.7959 15.6109 18.5818 14.5563C17.2508 14.1562 15.8377 13.9405 14.3724 13.9405C6.43566 13.942 0 20.2235 0 27.9703C0 35.717 6.43566 41.9985 14.3724 41.9985C18.1282 41.9985 21.5467 40.5914 24.1073 38.2873L36.2579 28.3124V17.802L26.0605 26.9201V26.9216Z" fill="currentColor"></path><path d="M31.4981 2.51381C30.4804 2.51381 29.5553 2.9065 28.8659 3.54611C28.2079 2.90799 27.3111 2.51381 26.3188 2.51381C24.185 2.51381 22.4541 4.23927 22.4541 6.36634V11.5249H24.8505V6.15363C24.8505 5.38907 25.4727 4.77029 26.2382 4.77029C27.0037 4.77029 27.6259 5.38907 27.6259 6.15363V11.5249H30.0283V6.15363C30.0283 5.38907 30.649 4.77029 31.416 4.77029C32.183 4.77029 32.8037 5.38907 32.8037 6.15363V11.5249H35.1494V6.15512C35.1494 4.14407 33.514 2.51381 31.4966 2.51381" fill="currentColor"></path><path d="M5.41036 0.699112V2.97196C6.06989 2.58819 6.83536 2.36805 7.65008 2.36805C10.5881 2.36805 12.8711 5.21951 11.9699 8.34913C11.5536 9.79643 10.4359 10.9329 9.01242 11.3568C5.94455 12.2701 3.14974 9.96601 3.13184 6.99257V0.699112H5.41036ZM8.62595 9.20889C9.187 8.98131 9.63465 8.52763 9.85698 7.95644C10.6792 5.85912 8.73637 3.88228 6.67272 4.71824C6.11167 4.94582 5.66402 5.39949 5.44169 5.97068C4.61951 8.068 6.5623 10.0448 8.62595 9.20889Z" fill="currentColor"></path><path d="M17.3134 2.41861C14.7812 2.41861 12.7295 4.46536 12.7295 6.9881C12.7295 9.51083 14.7827 11.5576 17.3134 11.5576C19.8441 11.5576 21.8973 9.51083 21.8973 6.9881C21.8973 4.46536 19.8441 2.41861 17.3134 2.41861ZM17.3134 9.45877C15.9451 9.45877 14.8364 8.35359 14.8364 6.98958C14.8364 5.62558 15.9451 4.52039 17.3134 4.52039C18.6817 4.52039 19.7904 5.62558 19.7904 6.98958C19.7904 8.35359 18.6817 9.45877 17.3134 9.45877Z" fill="currentColor"></path><path d="M53.3269 2.5034C50.6918 2.52869 48.5625 4.66469 48.5625 7.2975V11.5516H50.9619V7.25287C50.9619 5.95134 52.0213 4.89524 53.3269 4.89524V2.5034Z" fill="currentColor"></path><path d="M62.4098 7.01338C62.4098 4.08159 59.6031 1.80429 56.5233 2.70271C55.0983 3.1192 53.9791 4.23331 53.5628 5.65384C52.6601 8.72545 54.9461 11.5219 57.8871 11.5219C58.8167 11.5219 59.6807 11.2422 60.3984 10.7633V11.4996H62.3904V7.41797C62.4024 7.2841 62.4098 7.15023 62.4098 7.01338ZM58.863 9.21631C56.7978 10.0359 54.8535 8.09774 55.6757 6.03909C55.8995 5.47981 56.3472 5.03357 56.9082 4.81045C58.9734 3.99086 60.9177 5.92902 60.0955 7.98767C59.8717 8.54844 59.424 8.99319 58.863 9.21631Z" fill="currentColor"></path><path d="M41.1923 13.1655V10.9343C41.8399 11.3122 42.5904 11.5263 43.3902 11.5263C46.2716 11.5263 48.5113 8.72694 47.6279 5.65533C47.2191 4.2348 46.1224 3.11772 44.7257 2.70271C41.716 1.80577 38.9749 4.0682 38.957 6.98661V13.1655H41.1938H41.1923ZM44.3467 4.81045C44.8973 5.03357 45.336 5.47981 45.5553 6.04058C46.3611 8.10072 44.4556 10.0404 42.4323 9.21929C41.8817 8.99617 41.443 8.54993 41.2236 7.98916C40.4179 5.92902 42.3233 3.98937 44.3467 4.81045Z" fill="currentColor"></path><path d="M66.0906 14.003C58.1702 14.003 51.751 20.1179 51.751 27.6623C51.751 35.2068 58.1717 41.3217 66.0906 41.3217C72.3218 41.3217 77.622 37.5361 79.6006 32.2482H71.5325C70.2045 33.7371 68.2482 34.6802 66.0622 34.6802C62.9168 34.6802 60.2398 32.7286 59.2401 30.0021H71.0505V29.9992H80.2168C80.3541 29.2391 80.4302 28.4596 80.4302 27.6623C80.4302 20.1179 74.0094 14.003 66.0906 14.003ZM59.1804 25.4386C60.1294 22.6213 62.8511 20.5865 66.0622 20.5865C69.2733 20.5865 71.9965 22.6213 72.944 25.4386H59.1804Z" fill="currentColor"></path><path d="M51.7081 13.8572C43.7086 13.9316 37.2461 20.4169 37.2461 28.4091V41.3217H44.5308V28.2737C44.5308 24.3215 47.7449 21.1175 51.7081 21.116V13.8587V13.8572Z" fill="currentColor"></path><path d="M131.117 33.9632C130.275 33.9632 129.592 33.2835 129.592 32.4431V19.8889H135.88V14.0654H129.592V9.06906H122.899V34.6906C122.899 38.3527 125.878 41.3217 129.551 41.3217H133.586L136.121 33.9647H131.117V33.9632Z" fill="currentColor"></path><path d="M102.225 8.87271V15.6645C100.254 14.5176 97.9707 13.8602 95.5385 13.8602C86.7676 13.8602 79.95 22.3789 82.6418 31.7306C83.8863 36.0546 87.2227 39.4505 91.4709 40.7163C100.63 43.4458 108.974 36.5618 109.029 27.6772H109.031V8.87271H102.226H102.225ZM92.6243 34.2994C90.9486 33.6196 89.6147 32.2616 88.9462 30.5569C86.4931 24.2873 92.2931 18.385 98.4527 20.881C100.128 21.5608 101.462 22.9188 102.131 24.6235C104.584 30.8916 98.7839 36.7954 92.6243 34.2979" fill="currentColor"></path><path d="M149.3 14.0104C141.735 14.0104 135.601 20.1239 135.601 27.6653C135.601 35.2068 141.733 41.3202 149.3 41.3202C156.867 41.3202 162.998 35.2068 162.998 27.6653C162.998 20.1239 156.865 14.0104 149.3 14.0104ZM149.3 35.0446C145.213 35.0446 141.899 31.741 141.899 27.6668C141.899 23.5926 145.213 20.289 149.3 20.289C153.387 20.289 156.701 23.5926 156.701 27.6668C156.701 31.741 153.387 35.0446 149.3 35.0446Z" fill="currentColor"></path><path d="M119.376 41.3217V18.1694H112.246V41.3217H119.376Z" fill="currentColor"></path><path d="M119.514 12.5884C119.514 14.6292 117.854 16.2847 115.806 16.2847C113.757 16.2847 112.098 14.6307 112.098 12.5884C112.098 10.5461 113.757 8.89206 115.806 8.89206C117.854 8.89206 119.514 10.5461 119.514 12.5884Z" fill="currentColor"></path><path d="M65.749 6.18338V11.5977C65.7819 11.5695 65.8147 11.5412 65.846 11.5115L72.9323 5.69401V0L65.749 6.18338Z" fill="currentColor"></path></svg>

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
            através dos canais de Atendimento (WhatsApp: +55 11 98925-5012 e
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
            As ofertas divulgadas no site e aplicativo do BOM PRA CRÉDITO são
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