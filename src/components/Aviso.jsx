import { IoMdAlert } from "react-icons/io";

function Aviso() {
    return (
        <div className="bg-black/70 max-w-full w-full pt-24 border-b-2 border-green-500  py-1 shadow-md">
            <div className="container items-center mx-auto px-4 flex gap-1">
                <IoMdAlert 
                    className="text-green-500" 
                    size={25} // Tamanho padrão, mas ajustável conforme necessário
                    aria-label="Ícone de alerta"
                />
                <p className="text-white text-sm ">
                    <span className="font-semibold">IMPORTANTE:</span> Nunca solicitamos depósitos antecipados. Prestamos serviço GRATUITO.
                </p>
            </div>
        </div>
    );
}

export default Aviso;
