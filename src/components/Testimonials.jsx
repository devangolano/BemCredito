import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Nossa! Essa é, sem dúvidas, uma excelente empresa. Profissionais rápidos, prestativos e atenciosos. Minha solicitação foi bem tranquila, e eles sempre me ajudando quando preciso. Nota que eu dou em geral é 10. Estão de parabéns!",
      author: "Daiane da Silva",
      location: "Sorriso/MT",
    },
    {
      text: "Bom Pra Crédito tem feito jus ao seu nome. Na hora que não sabia mais o que fazer para resolver as questões imprevistas, o Bom Pra Crédito aparece com a solução de forma online e segura.",
      author: "Maria Mendes",
      location: "São Paulo/SP",
    },
    {
      text: "O empréstimo veio na hora certa para eu poder controlar minha situação financeira. Gostei do Bom Pra Crédito porque o atendimento é rápido e tem pouca burocracia. Os juros também são bem acessíveis.",
      author: "Roberto Dias",
      location: "Cel. Fabriciano/MG",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval); // Limpeza do intervalo ao desmontar o componente
  }, [testimonials.length]);

  return (
    <section className="px-4 absolute z-9 md:mt-[1800px] mt-[2850px] w-full py-6 md:py-12 bg-white">
      <h2 className="text-center text-2xl font-bold mb-8 md:mb-14">
        Nada melhor do que a satisfação dos nossos clientes #BomPraVc
      </h2>
      <div className="max-w-6xl mx-auto">
        {/* Mobile Version: Show one card at a time as a gallery */}
        <div className="block md:hidden relative">
          <div
            className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-all duration-700 ease-in-out border-t-4 border-green-500"
            key={currentIndex}
          >
            <p className="text-gray-700 mb-4">"{testimonials[currentIndex].text}"</p>
            <div className="font-semibold">{testimonials[currentIndex].author}</div>
            <div className="text-sm text-gray-500">{testimonials[currentIndex].location}</div>
          </div>
          {/* Gallery Dots */}
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`mx-1 h-2 w-2 rounded-full cursor-pointer ${index === currentIndex ? 'bg-green-500' : 'bg-gray-300'}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Desktop Version: Show all cards */}
        <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-green-500"
            >
              <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-sm text-gray-500">{testimonial.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
