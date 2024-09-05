import { IoMdAlert } from "react-icons/io";

function Aviso() {
    return (
        <div className="py-1 md:py-2 px-4 border-b-2 border-green-500 md:pl-24 bg-black/70">
            <div className="flex items-center space-x-2">
                <IoMdAlert 
                    className="text-green-500" 
                    size={47} // Tamanho para versão mobile
                    style={{ fontSize: '1.75rem' }} // Estilo inline para garantir tamanho responsivo
                    aria-label="Ícone de alerta"
                />
                <p className="text-white">
                    <span className="font-semibold">IMPORTANTE:</span> Nunca solicitamos depósitos antecipados. Prestamos serviço GRATUITO.
                </p>
            </div>
        </div>
    );
}

export default Aviso;
