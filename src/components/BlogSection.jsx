import React from "react";
import { GoArrowRight  } from "react-icons/go";


const BlogSection = () => {
  const articles = [
    {
      title: "Antecipação Salarial Empréstimo: O Que É e Como Funciona?",
      description:
        "A antecipação salarial do empréstimo é uma forma de conseguir ter o controle das finanças no momento em há alguma despes...",
      image: "./calculo-de-emprestimo-com-juros.webp",
    },
    {
      title: "Empréstimo para Negativado Assalariado: Como Conseguir?",
      description:
        "Será que é possível conseguir um empréstimo para negativado assalariado? Essa é uma dúvida bastante comum. Apesar de ser uma...",
      image: "./emprestimo-para-MEI.webp",
    },
    {
      title: "Empréstimo para MEI Online: Como Solicitar",
      description:
        "Você precisa de um empréstimo para MEI online para dar aquele impulso no seu negócio? Já se perguntou como essa opção...",
      image: "./emprestimo-para-negativado-liberado-na-hora-whatsapp.webp",
    },
  ];

  return (
    <section className="px-4 md:px-24 absolute z-6 md:mt-[3270px] mt-[4560px] w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">
          Quer saber mais sobre o empréstimo pessoal Bom Pra Crédito?
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Em nosso blog, explicamos com mais detalhes como ele funciona, trazemos
          detalhes importantes para quem o solicitou, além de dicas com as melhores
          formas de utilizar seu empréstimo pessoal:
        </p>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <div
              key={index}
              className="rounded-t-2xl overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 border-2 px-3 py-2 rounded-full border-green-500 text-green-500 hover:text-green-700 font-medium"
                >
                  Leia a matéria <span><GoArrowRight  /> </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
