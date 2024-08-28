import Image from "next/image";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Home() {
    return (
                <>


        <div className="mt-7 p-5  from-pink-50 to-pink-100 trata-detalle mx-auto ">
   


            <div className=" border-4 border-pink-300 pl-6 flex flex-col rounded-lg shadow-lg p-5 slide-in   md:flex-row gap-6 mb-10  ">
                <div className="relative">
                    <Image
                        src="/derma.jpeg"
                        width={500}
                        height={500}
                        alt="Centro Estética"
                        className="rounded-lg shadow-lg transition-transform transform hover:scale-105 fade-in"
                    />
                    <div className="absolute bottom-0 right-0 p-4">
                        <p className=" text-xl font-bold  bg-opacity-50 p-2 rounded">
                            Precio: 25.000
                        </p>
                    </div>
                </div>





                <div>
                    <h2 className="text-pink-500 text-xl text-center md:text-3xl font-semibold mb-4 slide-in">INCLUYE</h2>
                    <ul className="space-y-4 text-left ">
                        {["Tratamiento con exfoliación manual (bisturí)", "Remueve piel y células muertas", "Disminuye líneas de expresión", "Disminuye manchas", "Estimula la síntesis de colágeno", "Piel más sana y luminosa"].map((item) => (
                            <li key={item} className="flex items-center space-x-3 rtl:space-x-reverse fade-in">
                                <svg className="flex-shrink-0 w-4 h-4 text-pink-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                                <span className=" text-dark text-base md:text-xl " >{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 text-center slide-in">
                        <p className="text-pink-500 text-xl">Reserva a través de nuestras redes</p>
                        <div className="flex flex-row mt-4 md:flex-row gap-4 justify-center items-center">
                            <a
                                href="https://www.instagram.com/anaisjaramaulen/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-center items-center text-pink-500 text-xl gap-2 transition-transform transform hover:scale-105 fade-in"
                            >
                                <FaInstagram className="text-3xl" />
                                Instagram
                            </a>
                            <a
                                href="https://wa.me/tuNumero"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-center items-center text-pink-500 text-xl gap-2 transition-transform transform hover:scale-105 fade-in"
                            >
                                <FaWhatsapp className="text-3xl" />
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
                </>


    );
}



