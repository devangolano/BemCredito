import React, { useState } from 'react';

const FaqComponent = () => {
    const faqItems = [
        "Como funciona o Empréstimo Pessoal?",
        "Quem pode fazer o Empréstimo Pessoal?",
        "Qual a diferença de Empréstimo Pessoal e Financiamento?",
        "O Bom Pra Crédito cobra pelo serviço prestado?",
        "Tenho restrições em meu nome, posso fazer um empréstimo?",
        "Eu posso fazer um empréstimo pessoal se não tiver comprovante de renda?",
        "Quais são os documentos necessários para obter um empréstimo pessoal?",
        "Qual o prazo de aprovação da proposta?",
        "Posso escolher a data de vencimento das parcelas do meu empréstimo?",
        "Como vou receber o Empréstimo Pessoal do BPC?",
        "Quais as formas de pagamento do Empréstimo Pessoal BPC?"
    ];

    // State para controlar qual item está expandido
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleAccordion = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    return (
        <div className="w-full mx-auto px-4 md:px-24 absolute z-6 md:mt-[2270px] mt-[3300px]">
            <h2 className="text-4xl font-bold mb-6">Dúvidas frequentes sobre nosso empréstimo Pessoal</h2>
            <div className="divide-y divide-gray-300">
                {faqItems.map((item, index) => (
                    <div key={index} className="py-3">
                        <button
                            className="w-full text-left flex justify-between items-center py-2 text-gray-800 font-medium"
                            onClick={() => toggleAccordion(index)}
                        >
                            {item}
                            <span className={`transform ${expandedIndex === index ? 'rotate-180' : 'rotate-0'} transition-transform duration-200`}>
                                ⌄
                            </span>
                        </button>
                        {expandedIndex === index && (
                            <div className="mt-2 text-gray-600">
                                {/* Substitua o conteúdo abaixo com as respostas correspondentes */}
                                {index === 0 && (
                                    <div className='border-green-500 border-l-4 pl-2 text-start'>
                                        {/* Resposta para a primeira pergunta */}
                                        Solicitar empréstimo pessoal online no Bom Pra Crédito é fácil! Basta preencher um cadastro, que leva só alguns minutinhos, conhecer e comparar as ofertas de crédito disponíveis e então escolher a opção de empréstimo online com as parcelas que cabem no seu bolso.
                                        <br /><br />
                                        Após a análise das financeiras, se você for aprovado, é só aguardar o depósito do crédito na sua conta e usá-lo como desejar!
                                    </div>
                                )}
                                {index === 1 && (
                                    <div className='border-green-500 border-l-4 pl-2 text-start'>
                                        {/* Resposta para a primeira pergunta */}
                                        Para fazer a solicitação é bem simples: basta você preencher um cadastro com seus dados pessoais e aguardar a avaliação de um ou mais parceiros do Bom Pra Crédito.

                                        <br /><br /> Sendo aprovado(a), você poderá contratar o empréstimo e receber o valor em até 2 dias úteis na conta bancária cadastrada.

                                        <br /><br />Após a contratação, você deverá pagar o valor em parcelas mensais acrescidas de juros à instituição financeira que te concedeu o crédito.

                                        Geralmente, os valores dos empréstimos pessoais são a partir de R$ 1.000,00 até R$ 50.000,00.
                                    </div>
                                )}
                                {index === 2 && (
                                     <div className='border-green-500 border-l-4 pl-2 text-start'>
                                        {/* Resposta para a terceira pergunta */}
                                        {/* Cole aqui o conteúdo da resposta */}
                                    </div>
                                )}
                                {index === 3 && (
                                   <div className='border-green-500 border-l-4 pl-2 text-start'>
                                   {/* Resposta para a terceira pergunta */}
                                   {/* Cole aqui o conteúdo da resposta */}
                                    </div>
                                )}
                                {index === 4 && (
                                    <div className='border-green-500 border-l-4 pl-2 text-start'>
                                    {/* Resposta para a terceira pergunta */}
                                    {/* Cole aqui o conteúdo da resposta */}
                                    </div>
                                )}
                                {index === 5 && (
                                   <div className='border-green-500 border-l-4 pl-2 text-start'>
                                   {/* Resposta para a terceira pergunta */}
                                   {/* Cole aqui o conteúdo da resposta */}
                                    </div>
                                )}
                                {index === 6 && (
                                    <div className='border-green-500 border-l-4 pl-2 text-start'>
                                    {/* Resposta para a terceira pergunta */}
                                    {/* Cole aqui o conteúdo da resposta */}
                                </div>
                                )}
                                {index === 7 && (
                                   <div className='border-green-500 border-l-4 pl-2 text-start'>
                                   {/* Resposta para a terceira pergunta */}
                                   {/* Cole aqui o conteúdo da resposta */}
                               </div>
                                )}
                                {index === 8 && (
                                    <div className='border-green-500 border-l-4 pl-2 text-start'>
                                    {/* Resposta para a terceira pergunta */}
                                    {/* Cole aqui o conteúdo da resposta */}
                                </div>
                                )}
                                {index === 9 && (
                                   <div className='border-green-500 border-l-4 pl-2 text-start'>
                                   {/* Resposta para a terceira pergunta */}
                                   {/* Cole aqui o conteúdo da resposta */}
                               </div>
                                )}
                                {index === 10 && (
                                    <div className='border-green-500 border-l-4 pl-2 text-start'>
                                    {/* Resposta para a terceira pergunta */}
                                    {/* Cole aqui o conteúdo da resposta */}
                                </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="mt-8 text-center">
                <a
                    href="#"
                    className="inline-block px-6 py-2 mb-10 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
                >
                    Acesse nossa Central de Ajuda!
                </a>
            </div>
        </div>
    );
};

export default FaqComponent;
