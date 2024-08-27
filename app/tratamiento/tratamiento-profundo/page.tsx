import Image from "next/image";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Home() {
    return (
        <div className="mt-7 p-5 bg-dark from-pink-50 to-pink-100">
            <div className="title-container">
                <h1 className="facial-title"><span className="facial-icon">🧼</span>Limpieza<span className="highlight">Facial Profunda</span></h1>
            </div>            <div className="">


                <div className="border-4 border-pink-300 pl-6 flex flex-col  md:text-lg bg-dark rounded-lg shadow-lg p-5 slide-in   md:flex-row gap-6 mb-10 ">

                    <div className="">
                        <Image


                            src="/derma.jpg"
                            width={600}
                            height={500}
                            alt="Centro Estética"
                            className="rounded-lg shadow-lg transition-transform transform hover:scale-105 fade-in" />

                    </div>


                    <div>
                        <h2 className="text-pink-500 text-xl text-center md:text-2xl font-semibold mb-4 slide-in">INCLUYE</h2>
                        <ul className="space-y-4 text-left text-white">
                            {["Emulsión desmaquillante", "Locion hidrotonica", "Locion hablandante o macedona", "Vapor ozono", "Peeling ultrasonico(Desincrustacion de comedones)", "Dermoabrasion alta frecuencia", "Serum con principios activos", "Electroporacion", "Masaje facial", "Crema sellante", "Protector solar 50"].map((item) => (
                                <li key={item} className="flex items-center space-x-3 rtl:space-x-reverse fade-in">
                                    <svg className="flex-shrink-0 w-4 h-4 text-pink-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 text-center slide-in">
                            <p className="text-pink-500 text-xl">Reserva a través de nuestras redes</p>
                            <div className="flex flex-col mt-4 md:flex-row gap-4 justify-center items-center">
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
        </div>
    );
}



