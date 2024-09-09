import React, { useState } from "react";
import InputMask from 'react-input-mask'; // Certifique-se de que está importado

const Header = () => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState(500);
  const [months, setMonths] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cef: "",
    whatsapp: "",
  });

  const handleRangeChange = (e) => {
    setAmount(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleContinue = () => {
    if (step === 2 && months === "") {
      alert("Por favor, selecione a quantidade de meses.");
      return;
    }
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const formatCurrency = (value) => {
    return parseFloat(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
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
              min="500"
              max="60000"
              step="250"
              value={amount}
              onChange={handleRangeChange}
              className="w-full mb-4"
            />
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>500</span>
              <span>60.000</span>
            </div>
            <button
              className="w-[150px] right-6 mt-4 absolute bg-green-500 font-mono text-gray-600 font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-200"
              onClick={handleContinue}
            >
              Continuar →
            </button>
          </div>
        )}

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
              placeholder="+55 11 964872716"
              className="border p-2 rounded-md w-full mb-2"
            />
            <div className="flex  justify-between">
              <button
                className="mt-4 bg-red-200 font-mono text-gray-600 font-bold py-2 px-4 rounded-full hover:bg-gray-500 transition duration-200"
                onClick={handleBack}
              >
                ← Voltar
              </button>
              <button
                className="mt-4 bg-green-500 font-mono text-gray-600 font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-200"
              >
                Enviar →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;