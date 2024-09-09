import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Nossa! Essa é, sem dúvidas, uma excelente empresa. Profissionais rápidos, prestativos e atenciosos. Minha solicitação foi bem tranquila, e eles sempre me ajudando quando precisei. Nota que eu dou em geral é 10. Estão de parabéns!",
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

  return (
    <section className="px-4 absolute z-9 md:mt-[1800px] mt-[2850px] w-full py-6 md:py-12 bg-white">
      <h2 className="text-center text-2xl font-bold mb-8 md:mb-14">
        Nada melhor do que a satisfação dos nossos clientes #BomPraVc
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
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
    </section>
  );
};

export default Testimonials;
