import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Um só cadastro online',
    description: 'Sem compromisso e que traz as ofertas já pré-aprovadas pelos nossos parceiros',
  },
  {
    number: '2',
    title: 'Mais de 50 financeiras',
    description: 'Buscamos as melhores taxas de acordo com seu perfil',
  },
  {
    number: '3',
    title: 'Escolha a melhor oferta',
    description: 'E siga o passo a passo de envio dos documentos para receber o contrato',
  },
  {
    number: '4',
    title: 'Dinheiro rápido',
    description: 'Em pouco tempo, o crédito estará em suas mãos',
  },
];

const CreditSteps = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">
        Olha como é fácil solicitar o seu crédito
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0 sm:space-x-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="relative flex items-center justify-center w-12 h-12 bg-white border-2 border-green-500 rounded-full mb-4">
              <span className="text-green-500 font-bold text-lg">{step.number}</span>
            </div>
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditSteps;
