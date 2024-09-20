import React, { useState } from "react";
import InputMask from 'react-input-mask';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate(); 
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState(5000);
  const [months, setMonths] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cef: "",
    whatsapp: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para controlar o envio

  const validateCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g, ""); 
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
  };

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

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSubmitting) return; // Impede múltiplos envios

    setIsSubmitting(true); // Bloqueia novos cliques no botão de envio

    const lastSubmitTime = localStorage.getItem('lastSubmitTime');
    const now = Date.now();

    if (lastSubmitTime && now - lastSubmitTime < 10 * 60 * 1000) {
      const minutesLeft = Math.ceil((10 * 60 * 1000 - (now - lastSubmitTime)) / 60000);
      alert(`Você precisa esperar ${minutesLeft} minutos antes de reenviar o formulário.`);
      setIsSubmitting(false); // Libera o botão de envio
      return;
    }

    if (!formData.name || !formData.cef || !formData.email || !formData.whatsapp || !months) {
      alert("Por favor, preencha todos os campos...");
      setIsSubmitting(false); // Libera o botão de envio
      return;
    }

    if (!validateCPF(formData.cef)) {
      alert("Por favor, insira um CPF válido.");
      setIsSubmitting(false); // Libera o botão de envio
      return;
    }

    const htmlTemplate = `
      <p>Nome: ${formData.name}</p>
      <p>CPF: ${formData.cef}</p>
      <p>Email: ${formData.email}</p>
      <p>Whatsapp: ${formData.whatsapp}</p>
      <p>Meses de pagamento: ${months}</p>
      <p>Valor do Empréstimo: ${formatCurrency(amount)}</p>
    `;

    try {
      await axios.post("https://meuback-xqw0.onrender.com/api/send", {
        from: "bempracredito@gmail.com",
        to: "fichasmarcuscarioca@gmail.com",
        subject: "Nova Ficha | Bem Pra Crédito",
        message: htmlTemplate,
      });

      setFormData({
        name: '',
        cef: '',
        email: '',
        whatsapp: ''
      });
      setMonths('');
      setAmount('');

      setShowModal(true);

      localStorage.setItem('lastSubmitTime', Date.now());

      setTimeout(() => {
        setShowModal(false);
        window.location.href = "https://www.bompracredito.com.br/emprestimo-pessoal";
      }, 1000);
    } catch (error) {
      console.error("Erro ao enviar o email:", error);
    } finally {
      setIsSubmitting(false); // Libera o botão de envio
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
              min="5000"
              max="500000"
              step="1000"
              value={amount}
              onChange={handleRangeChange}
              className="w-full mb-4"
            />
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>5.000,00</span>
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
          <div className="bg-white bg-opacity-90 border-t-4 border-green-500 p-6 mx-auto">
            <h2 className="text-lg font-semibold text-gray-800 md:mb-4">
              Preencha seus dados:
            </h2>
            <form onSubmit={sendEmail}>
            <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nome Completo"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <InputMask
                  mask="999.999.999-99"
                  value={formData.cef}
                  onChange={handleInputChange}
                  name="cef"
                  placeholder="CPF"
                  className="border p-2 rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <InputMask
                  mask="(99) 99999-9999"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  name="whatsapp"
                  placeholder="WhatsApp"
                  className="border p-2 rounded-md w-full"
                  required
                />
              </div>
              <button
                type="submit"
                className={`w-full bg-green-500 text-white py-2 px-4 rounded-md font-bold ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'}`}
                disabled={isSubmitting} 
              >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
          </div>
        )}
        {showModal && (
          <div className="fixed p-4 inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Sua solicitação foi enviada com sucesso!</h2>
              <p className="text-sm">Em breve um de nossos consultores irá entrar em contato.</p>
            </div>
          </div>
        )}
      </div>
    </div>
    
  );
};

export default Header;
