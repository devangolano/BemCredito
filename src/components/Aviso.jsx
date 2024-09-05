import { IoMdAlert } from "react-icons/io";

function Aviso() {
    return (
        <div className="bg-black/70 border-b-2 border-green-500 md:py-3 py-1 shadow-md">
            <div className="container mx-auto px-4 flex gap-1">
                <IoMdAlert 
                    className="text-green-500" 
                    size={25} // Tamanho padrão, mas ajustável conforme necessário
                    aria-label="Ícone de alerta"
                />
                <p className="text-white text-sm md:text-base lg:text-lg">
                    <span className="font-semibold">IMPORTANTE:</span> Nunca solicitamos depósitos antecipados. Prestamos serviço GRATUITO.
                </p>
            </div>
        </div>
    );
}

export default Aviso;
