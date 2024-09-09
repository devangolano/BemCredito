import React, { useState } from 'react';
import { GoArrowDown } from "react-icons/go";

const FaqComponent = () => {
    const faqItems = [
        "Dúvidas frequentes sobre nosso empréstimo pessoal",
        "como funciona o empréstimo pessoal",
        "Quem pode fazer o Empréstimo Pessoal?",
        "Qual a diferença de Empréstimo Pessoal e Financiamento?",
        "O Bem Pra Crédito cobra pelo serviço prestado?",
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
                               <GoArrowDown />
                            </span>
                        </button>
                        {expandedIndex === index && (
                            <div className="mt-2 text-gray-600">
                                {/* Substitua o conteúdo abaixo com as respostas correspondentes */}
                                {index === 0 && (
                                    <div className='border-green-500 border-l-4 pl-2 text-start bg-green-50 py-1'>
                                        {/* Resposta para a primeira pergunta */}
                                        Solicitar empréstimo pessoal online no Bem Pra Crédito é fácil! Basta preencher um cadastro, que leva só alguns minutinhos, conhecer e comparar as ofertas de crédito disponíveis e então escolher a opção de empréstimo online com as parcelas que cabem no seu bolso.
                                        <br /><br />
                                        Após a análise das financeiras, se você for aprovado, é só aguardar o depósito do crédito na sua conta e usá-lo como desejar!
                                    </div>
                                )}
                                {index === 1 && (
                                    <div className='border-green-500 border-l-4 pl-2 text-start bg-green-50 py-1'>
                                        {/* Resposta para a primeira pergunta */}
                                        Para fazer a solicitação é bem simples: basta você preencher um cadastro com seus dados pessoais e aguardar a avaliação de um ou mais parceiros do Bem Pra Crédito.

                                        <br /><br /> Sendo aprovado(a), você poderá contratar o empréstimo e receber o valor em até 2 dias úteis na conta bancária cadastrada.

                                        <br /><br />Após a contratação, você deverá pagar o valor em parcelas mensais acrescidas de juros à instituição financeira que te concedeu o crédito.

                                        Geralmente, os valores dos empréstimos pessoais são a partir de R$ 1.000,00 até R$ 50.000,00.
                                    </div>
                                )}
                                {index === 2 && (
                                     <div className='border-green-500 border-l-4 pl-2 text-start bg-green-50 py-1'>
                                       O empréstimo pessoal é um tipo de crédito destinado a pessoas físicas. Todos nós podemos solicitar um, basta termos um documento de identidade e comprovantes de renda e residência.
                                    </div>
                                )}
                                {index === 3 && (
                                   <div className='border-green-500 border-l-4 pl-2 text-start bg-green-50 py-1'>
                                   No empréstimo pessoal, o crédito aprovado não tem um destino específico, ou seja, pode ser utilizado para qualquer objetivo, como: pagamento de contas, educação, quitação de outras dívidas ou mesmo para realizar uma compra ou viagem desejada.
                                    <br /><br /> Já o financiamento, também é um contrato entre o cliente e a instituição financeira, mas neste caso existe uma destinação específica, como, por exemplo, a aquisição de veículo ou de um imóvel.
                                    </div>
                                )}
                                {index === 4 && (
                                    <div className='border-green-500 border-l-4 pl-2 text-start bg-green-50 py-1'>
                                    O Bem Pra Crédito é uma plataforma 100% gratuita. <br /> <br /> Não cobramos nada do cliente que está contratando o crédito. Somos remunerados pela instituição financeira escolhida pelo cliente com uma comissão sobre a efetivação do contrato de crédito. A prática de solicitar depósito antecipado é ILEGAL. Nunca faça depósitos antecipados para conseguir crédito!
                                    </div>
                                )}
                                {index === 5 && (
                                   <div className='border-green-500 border-l-4 pl-2 text-start bg-green-50 py-1'>
                                  A solicitação de empréstimo poderá ser feita sim, visto que alguns parceiros do Bem Pra Crédito realizam uma análise de crédito menos restritiva, disponibilizando empréstimos para pessoas negativadas. Porém, destacamos que isso não garante a aprovação de seu empréstimo. Ela, dependerá da análise de seu perfil financeiro.
                                    </div>
                                )}
                                {index === 6 && (
                                    <div className='border-green-500 border-l-4 pl-2 text-start bg-green-50 py-1'>
                                   Sim. É possível conseguir um empréstimo sem comprovação de renda. Mas, nesta modalidade de crédito, o credor tem o risco de concessão ampliado, pois trabalha com uma margem de inadimplência. Assim, esse risco é direcionado para as taxas de juros. Ou seja, é possível tomar um empréstimo pessoal sem comprovação de renda, mas os juros podem ser maiores.
                                </div>
                                )}
                                {index === 7 && (
                                   <div className='border-green-500 border-l-4 pl-2 text-start bg-green-50 py-1'>
                                  O Empréstimo Pessoal é uma das modalidades de crédito que necessitam de menos documentação do cliente para serem efetivadas. Aqui, no Bem Pra Crédito, os documentos para realizar a solicitação podem variar de acordo com o parceiro financeiro, mas normalmente são: documento de identidade (RG ou CNH) e comprovantes de renda e residência, preferencialmente dos últimos 90 dias.
                               </div>
                                )}
                                {index === 8 && (
                                    <div className='border-green-500 border-l-4 pl-2 text-start bg-green-50 py-1'>
                                  Após o envio dos documentos e a assinatura do contrato a proposta do empréstimo é enviada para a análise da financeira e o prazo para retorno é de até 2 dias úteis, via SMS ou e-mail.
                                </div>
                                )}
                                {index === 9 && (
                                   <div className='border-green-500 border-l-4 pl-2 text-start bg-green-50 py-1'>
                                 Todas as condições da oferta de crédito são inseridas pela própria financeira. Atualmente alguns dos nossos parceiros já permitem esta escolha. Mas, nós do Bem Pra Crédito não conseguimos alterá-las, apenas repassamos aos clientes.
                                   </div>
                                )}
                                {index === 10 && (
                                    <div className='border-green-500 border-l-4 pl-2 text-start bg-green-50 py-1'>
                                   O empréstimo pessoal do Bem Pra Crédito é depositado em até 48 horas na conta bancária que você cadastrou.
                                    </div>
                                )}
                                {index === 11 && (
                                    <div className='border-green-500 border-l-4 pl-2 text-start bg-green-50 py-1'>
                                        O boleto bancário é a principal forma de pagamento das parcelas do empréstimo pessoal solicitado aqui no Bem Pra Crédito.
                                </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="mt-8 text-center">
                <a
                    href="https://wa.me/5511964872716?text=Prezados,%0A%0AGostaria%20de%20solicitar%20informações%20sobre%20as%20opções%20de%20empréstimo%20pessoal%20oferecidas%20pela%20*BEM%20PRA%20CRÉDITO*%20para%20clientes%20com%20restrições%20de%20crédito.%20Agradeço%20antecipadamente%20pela%20atenção%20e%20aguardo%20suas%20orientações%20sobre%20os%20procedimentos%20necessários."
                    target="_blank" 
                    className="inline-block px-6 py-2 mb-10 bg-white text-gray-500 font-semibold border-2 border-green-500 rounded-full hover:bg-green-500 hover:text-white  transition"
                >
                    Acesse nossa Central de Ajuda!
                </a>
            </div>
        </div>
    );
};

export default FaqComponent;
