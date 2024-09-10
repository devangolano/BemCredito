import React, { useState } from "react";
import InputMask from 'react-input-mask';
import axios from "axios";

const Header = () => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState(3000);
  const [months, setMonths] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cef: "",
    whatsapp: "",
  });
  const [showModal, setShowModal] = useState(false);

  // Função para manipular a mudança de valor do range
  const handleRangeChange = (e) => {
    setAmount(e.target.value);
  };

  // Função para manipular a mudança dos inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Função para avançar para o próximo passo
  const handleContinue = () => {
    if (step === 2 && months === "") {
      alert("Por favor, selecione a quantidade de meses.");
      return;
    }
    setStep((prevStep) => prevStep + 1);
  };

  // Função para voltar ao passo anterior
  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  // Função para formatar o valor da moeda
  const formatCurrency = (value) => {
    return parseFloat(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  // Função para enviar o e-mail usando Axios
  const sendEmail = async (e) => {
    e.preventDefault();

    const htmlTemplate = `
      <p>Nome: ${formData.name}</p>
      <p>CPF: ${formData.cef}</p>
      <p>Email: ${formData.email}</p>
      <p>Whatsapp: ${formData.whatsapp}</p>
      <p>Meses de pagamento: ${months}</p>
      <p>Valor do Empréstimo: ${formatCurrency(amount)}</p>
    `;

    try {
      await axios.post(process.env.NEXT_PUBLIC_API_URL + "/api/send", {
        from: process.env.NEXT_PUBLIC_EMAIL_FROM,
        to: process.env.NEXT_PUBLIC_EMAIL_TO,
        subject: "Nova Ficha | Bem Pra Crédito",
        message: htmlTemplate,
      });
      setShowModal(true); // Exibir o modal de agradecimento
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      alert("Houve um problema ao enviar sua solicitação. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-start bg-cover bg-center md:bg-[url('hero-bg-desk.png')] sm:bg-none">
      <div className="absolute md:bottom-0 left-4 md:left-28 max-w-xl w-[95%] sm:w-[80%] md:w-[70%] lg:w-[60%] md:mt-8 text-gray-900 py-2 md:p-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-start">
          Empréstimo Pessoal <br /> Rápido e Seguro
        </h1>
        <p className="text-sm sm:text-base mb-2 md:text-lg md:mb-6">
          Simule seu empréstimo agora e saia do sufoco!
        </p>

        {/* Passo 1: Selecionar o valor do empréstimo */}
        {step === 1 && (
          <div className="bg-white bg-opacity-90 border-t-4 border-green-500 p-6 md:h-96 mx-auto">
            <h2 className="text-lg font-semibold text-gray-800 md:mb-4">
              De quanto você precisa?
            </h2>
            <div className="flex items-center text-center md:space-x-2 my-3 md:mt-14 justify-center md:mb-8">
              <input
                type="text"
                value={formatCurrency(amount)}
                className="border-none w-auto bg-transparent text-gray-800 text-2xl font-mono focus:outline-none"
                readOnly
              />
            </div>
            <input
              type="range"
              min="3000"
              max="500000"
              step="1000"
              value={amount}
              onChange={handleRangeChange}
              className="w-full mb-4"
            />
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>3.000,00</span>
              <span>500.000,00</span>
            </div>
            <button
              className="w-[150px] right-6 mt-4 absolute bg-green-500 font-mono text-gray-600 font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-200"
              onClick={handleContinue}
            >
              Continuar →
            </button>
          </div>
        )}

        {/* Passo 2: Selecionar a quantidade de meses */}
        {step === 2 && (
          <div className="bg-white bg-opacity-90 border-t-4 border-green-500 p-6 md:h-96 mx-auto">
            <h2 className="text-lg font-semibold text-gray-800 md:mb-4">
              Em quantas vezes quer pagar seu empréstimo?
            </h2>
            <select
              className="border p-2 rounded-md w-full mb-4"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
            >
              <option value="">Selecione a quantidade de meses</option>
              <option value="6">6 meses</option>
              <option value="8">8 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
              <option value="36">36 meses</option>
              <option value="48">48 meses</option>
              <option value="60">60 meses</option>
              <option value="120">120 meses</option>
            </select>
            <div className="flex justify-between">
              <button
                className="mt-4 bg-red-200 font-mono text-gray-600 font-bold py-2 px-4 rounded-full hover:bg-gray-500 transition duration-200"
                onClick={handleBack}
              >
                ← Voltar
              </button>
              <button
                className="mt-4 bg-green-500 font-mono text-gray-600 font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-200"
                onClick={handleContinue}
              >
                Continuar →
              </button>
            </div>
          </div>
        )}

        {/* Passo 3: Inserir os dados pessoais */}
        {step === 3 && (
          <div className="bg-white bg-opacity-90 border-t-4 border-green-500 p-6 md:h-96 mx-auto">
            <h2 className="text-lg font-semibold text-gray-800 md:mb-4">
              Insira seus dados:
            </h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Nome"
              className="border p-2 rounded-md w-full mb-2"
            />
            <InputMask
              mask="999.999.999-99"
              type="text"
              name="cef"
              value={formData.cef}
              onChange={handleInputChange}
              placeholder="CPF"
              className="border p-2 rounded-md w-full mb-2"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="border p-2 rounded-md w-full mb-2"
            />
            <InputMask
              mask="(99) 99999-9999"
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              placeholder="WhatsApp"
              className="border p-2 rounded-md w-full mb-2"
            />
            <div className="flex justify-between">
              <button
                className="mt-4 bg-red-200 font-mono text-gray-600 font-bold py-2 px-4 rounded-full hover:bg-gray-500 transition duration-200"
                onClick={handleBack}
              >
                ← Voltar
              </button>
              <button
                className="mt-4 bg-green-500 font-mono text-gray-600 font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-200"
                onClick={sendEmail}
              >
                Enviar →
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal de Agradecimento */}
      {showModal && (
        <div className="fixed inset-0 px-4 z-20 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Obrigado!</h2>
            <p className="text-gray-700 mb-4">Sua solicitação foi enviada com sucesso.</p>
            <p className="text-gray-700 mb-4">Em breve um de nossos consultores irá entrar em contato.</p>
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600"
              onClick={() => setShowModal(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
