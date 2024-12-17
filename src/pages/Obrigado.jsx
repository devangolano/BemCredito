import React from "react";
import { Gift, Star } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80')] bg-cover bg-center">
      <div className="min-h-screen bg-black/30 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Gift className="w-16 h-16 text-green-500" />
                <Star className="w-6 h-6 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Obrigado pela sua solicitação!
            </h1>

            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                Sua solicitação de empréstimo foi recebida com sucesso.
              </p>
              <p>
                Em breve, um de nossos consultores entrará em contato para dar
                continuidade ao seu processo.
              </p>
            </div>

            <button
              onClick={() =>
                (window.location.href = "https://wa.me/551151785087")
              }
              className="mt-8 bg-green-500 text-white py-3 px-8 rounded-lg font-semibold hover:bg-green-600 transition duration-200 inline-flex items-center gap-2"
            >
              Fale conosco
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
