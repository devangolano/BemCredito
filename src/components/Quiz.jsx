import React from 'react';

// Substitua pelos caminhos corretos dos seus ícones
import IconPartner from '../assets/icon-financeiras.svg';
import IconFastCredit from '../assets/icon-credito-rapido.svg';
import IconLowRate from '../assets/icon-emprestimos-online.svg';
import IconQuickOffer from '../assets/icon-11-milhoes.svg';
import IconMillionPeople from '../assets/icon-5-minutos.svg';
import IconRegulated from '../assets/icon-banco-central.svg';

const Quiz = () => {
  return (
    <div className="flex flex-col absolute z-10 md:mt-[1350px] mt-[2080px] w-full px-6 sm:px-12 md:px-24 py-12 items-start justify-center bg-slate-50">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-start sm:text-start mb-4">
        Por que empréstimo online no #BPC?
      </h2>
      <p className="text-start text-gray-600 mb-8 max-w-md">
        Te ajudamos a concretizar seus objetivos: quitar uma dívida, reformar sua casa, abrir seu negócio ou resolver uma emergência. Como?
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Primeiro Item */}
        <div className="flex items-start space-x-4">
          <img src={IconPartner} alt="Ícone Parceiros" className="w-8 h-8 sm:w-10 sm:h-10" />
          <h3 className="text-base sm:text-lg font-semibold">Temos mais de 50 financeiras parceiras</h3>
        </div>

        {/* Segundo Item */}
        <div className="flex items-start space-x-4">
          <img src={IconFastCredit} alt="Ícone Crédito Rápido" className="w-8 h-8 sm:w-10 sm:h-10" />
          <h3 className="text-base sm:text-lg font-semibold">Crédito rápido na sua conta!</h3>
        </div>

        {/* Terceiro Item */}
        <div className="flex items-start space-x-4">
          <img src={IconLowRate} alt="Ícone Taxas Baixas" className="w-8 h-8 sm:w-10 sm:h-10" />
          <h3 className="text-base sm:text-lg font-semibold">Empréstimos online com taxas a partir de 1,15% ao mês</h3>
        </div>

        {/* Quarto Item */}
        <div className="flex items-start space-x-4">
          <img src={IconQuickOffer} alt="Ícone Ofertas Rápidas" className="w-8 h-8 sm:w-10 sm:h-10" />
          <h3 className="text-base sm:text-lg font-semibold">Ofertas de crédito em 5 minutos</h3>
        </div>

        {/* Quinto Item */}
        <div className="flex items-start space-x-4">
          <img src={IconMillionPeople} alt="Ícone Milhões de Pessoas" className="w-8 h-8 sm:w-10 sm:h-10" />
          <h3 className="text-base sm:text-lg font-semibold">Mais de 11 milhões de pessoas já solicitaram um empréstimo online</h3>
        </div>

        {/* Sexto Item */}
        <div className="flex items-start space-x-4">
          <img src={IconRegulated} alt="Ícone Regulamentação" className="w-8 h-8 sm:w-10 sm:h-10" />
          <h3 className="text-base sm:text-lg font-semibold">Somos regulamentados pelo Banco Central (Bacen) como correspondentes bancários</h3>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
