import React from 'react';

const StepDesk = () => {
  return (
    <div className="flex-col mt-[1000px] absolute hidden md:block items-start justify-center py-12 px-24">
      <h2 className="text-4xl font-bold text-start mb-8">
        Olha como é fácil solicitar o seu crédito
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0 sm:space-x-8">
        {/* Passo 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative flex items-center justify-center w-12 h-12 bg-white border-2 border-green-500 rounded-full mb-4">
            <span className="text-green-500 font-bold text-lg">1</span>
          </div>
          <h3 className="text-lg font-semibold">Um só cadastro online</h3>
          <p className="text-sm text-gray-600">Sem compromisso e que traz as ofertas já pré-aprovadas pelos nossos parceiros</p>
        </div>

        {/* Passo 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative flex items-center justify-center w-12 h-12 bg-white border-2 border-green-500 rounded-full mb-4">
            <span className="text-green-500 font-bold text-lg">2</span>
          </div>
          <h3 className="text-lg font-semibold">Mais de 50 financeiras</h3>
          <p className="text-sm text-gray-600">Buscamos as melhores taxas de acordo com seu perfil</p>
        </div>

        {/* Passo 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative flex items-center justify-center w-12 h-12 bg-white border-2 border-green-500 rounded-full mb-4">
            <span className="text-green-500 font-bold text-lg">3</span>
          </div>
          <h3 className="text-lg font-semibold">Escolha a melhor oferta</h3>
          <p className="text-sm text-gray-600">E siga o passo a passo de envio dos documentos para receber o contrato</p>
        </div>

        {/* Passo 4 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative flex items-center justify-center w-12 h-12 bg-white border-2 border-green-500 rounded-full mb-4">
            <span className="text-green-500 font-bold text-lg">4</span>
          </div>
          <h3 className="text-lg font-semibold">Dinheiro rápido</h3>
          <p className="text-sm text-gray-600">Em pouco tempo, o crédito estará em suas mãos</p>
        </div>
      </div>
    </div>
  );
};

export default StepDesk;
