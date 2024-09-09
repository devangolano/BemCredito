import React from "react";

const Header = () => {
  return (
    <div
    className="relative h-screen flex flex-col items-center justify-start bg-cover bg-center md:bg-[url('hero-bg-desk.png')] sm:bg-none"
    >
      {/* Conteúdo do Header */}
      <div className="absolute md:bottom-0 left-4 md:left-28 max-w-xl w-[95%] sm:w-[80%] md:w-[70%] lg:w-[60%] md:mt-8 text-gray-900 py-2 md:p-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-start">
          Empréstimo Pessoal <br /> Rápido e Seguro
        </h1>
        <p className="text-sm sm:text-base mb-2 md:text-lg md:mb-6">
          Simule seu empréstimo agora e saia do sufoco!
        </p>

        {/* Caixa de Simulação de Empréstimo */}
        <div className="bg-white bg-opacity-90 border-t-4 border-green-500 p-6 md:h-96 mx-auto">
          <h2 className="text-lg font-semibold text-gray-800 md:mb-4">
            De quanto você precisa?
          </h2>
            <div className="flex items-center text-center md:space-x-2 my-3 md:mt-14 justify-center md:mb-8">
                <p className="text-green-500 font-semibold text-center">R$</p>
                <input
                    type="text"
                    value="60.500,00"
                    className="border-none w-auto bg-transparent text-gray-800 text-2xl font-mono focus:outline-none"
                />
            </div>

          <input
            type="range"
            min="500"
            max="100000"
            step="500"
            value=""
            className="w-full mb-4"
          />
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>500</span>
            <span>100.000</span>
          </div>
          <button className="w-[150px] right-6 mt-4 absolute bg-green-500 font-mono text-gray-600 font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-200">
            Continuar →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
