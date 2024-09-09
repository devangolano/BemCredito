import React, { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { GoTriangleDown } from "react-icons/go";
import { FaBars } from "react-icons/fa"; // Importação correta do ícone de menu hambúrguer

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="py-4 bg-white fixed z-10 w-full border-b shadow-md border-gray-200">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex cursor-pointer justify-center pr-32">
                <img width={163} height={42} src="./logo.png" alt="Logo" />    
                </div>
                {/* Menu para telas maiores */}
                <div className="hidden lg:flex items-center space-x-4">
                    {/* Dropdown usando Radix UI */}
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                            <button className="text-gray-700 flex space-x-2 hover:text-green-500 focus:outline-none">
                                Empréstimos
                                <span><GoTriangleDown size={24} /></span>
                            </button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content className="bg-white border border-gray-200 rounded-md shadow-lg p-2">
                            <DropdownMenu.Item className="hover:bg-gray-100 px-4 py-2 text-sm text-gray-700">
                                Empréstimo pessoal
                            </DropdownMenu.Item>
                            <DropdownMenu.Item className="hover:bg-gray-100 px-4 py-2 text-sm text-gray-700">
                                Empréstimo consignado
                            </DropdownMenu.Item>
                            <DropdownMenu.Item className="hover:bg-gray-100 px-4 py-2 text-sm text-gray-700">
                                Empréstimo com Garantia de Imóvel
                            </DropdownMenu.Item>
                            <DropdownMenu.Item className="hover:bg-gray-100 px-4 py-2 text-sm text-gray-700">
                                Empréstimo com Garantia de Veículo
                            </DropdownMenu.Item>
                            <DropdownMenu.Item className="hover:bg-gray-100 px-4 py-2 text-sm text-gray-700">
                                Empréstimo com Garantia de Celular
                            </DropdownMenu.Item>
                            <DropdownMenu.Item className="hover:bg-gray-100 px-4 py-2 text-sm text-gray-700">
                                Empréstimo para MEI
                            </DropdownMenu.Item>
                            <DropdownMenu.Item className="hover:bg-gray-100 px-4 py-2 text-sm text-gray-700">
                                Empréstimo para Negativados
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>

                    {/* Outros Links */}
                    <a href="#" className="text-gray-700 hover:text-green-500">
                        Antecipação FGTS
                    </a>
                    <a href="#" className="text-gray-700 hover:text-green-500">
                        Bom Pra Consórcio
                    </a>
                    <a href="#" className="text-gray-700 hover:text-green-500">
                        Quem somos
                    </a>
                    <a href="#" className="text-gray-700 hover:text-green-500">
                        Blog
                    </a>
                </div>

                {/* Botões */}
                <div className="hidden lg:flex space-x-3">
                    <button className="bg-green-500 py-1 px-4 rounded-full hover:bg-green-400">
                        Meu pedido
                    </button>
                    <button className="bg-green-500 py-1 px-4 rounded-full hover:bg-green-400">
                        Central de ajuda
                    </button>
                </div>

                {/* Botão de Menu Hambúrguer para Telas Menores */}
                <div className="lg:hidden flex items-center">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-green-500 focus:outline-none">
                        <FaBars size={24} />
                    </button>
                </div>
            </div>

            {/* Menu Dropdown para Telas Menores */}
            {isMenuOpen && (
                <div className="lg:hidden h-screen mt-4 space-y-3 text-lg flex flex-col  px-4">
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger asChild>
                                <button className=" flex items-center justify-between gap-x-2 hover:text-green-500 focus:outline-none">
                                    Empréstimos
                                    <span><GoTriangleDown size={20} /></span>
                                </button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content className="bg-white border border-gray-200 rounded-md shadow-lg p-2">
                                <DropdownMenu.Item className="hover:bg-gray-100 px-4 py-2 text-sm text-gray-700">
                                    Empréstimo pessoal
                                </DropdownMenu.Item>
                                <DropdownMenu.Item className="hover:bg-gray-100 px-4 py-2 text-sm text-gray-700">
                                Empréstimo consignado
                            </DropdownMenu.Item>
                            <DropdownMenu.Item className="hover:bg-gray-100 px-4 py-2 text-sm text-gray-700">
                                Empréstimo com Garantia de Imóvel
                            </DropdownMenu.Item>
                            <DropdownMenu.Item className="hover:bg-gray-100 px-4 py-2 text-sm text-gray-700">
                                Empréstimo com Garantia de Veículo
                            </DropdownMenu.Item>
                            <DropdownMenu.Item className="hover:bg-gray-100 px-4 py-2 text-sm text-gray-700">
                                Empréstimo com Garantia de Celular
                            </DropdownMenu.Item>
                            <DropdownMenu.Item className="hover:bg-gray-100 px-4 py-2 text-sm text-gray-700">
                                Empréstimo para MEI
                            </DropdownMenu.Item>
                            <DropdownMenu.Item className="hover:bg-gray-100 px-4 py-2 text-sm text-gray-700">
                                Empréstimo para Negativados
                            </DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    <div className="flex flex-col space-y-3">
                        <a href="#" className="text-gray-700 hover:text-green-500">
                            Antecipação FGTS
                        </a>
                        <a href="#" className="text-gray-700 hover:text-green-500">
                            Bom Pra Consórcio
                        </a>
                        <a href="#" className="text-gray-700 hover:text-green-500">
                            Quem somos
                        </a>
                        <a href="#" className="text-gray-700 hover:text-green-500">
                            Blog
                        </a>
                        <div className="flex flex-col pt-10">
                        <button className="bg-green-500 mb-6 text-lg py-1 px-4 rounded-full hover:bg-green-400">
                            Meu pedido
                        </button>
                        <button className="bg-green-500 py-1 mb-6 text-lg px-4 rounded-full hover:bg-green-400">
                            Central de ajuda
                        </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
