import Image from "next/image";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Home() {

    const tratamiento = [
        "Emulsión desmaquillante",
        "Tónico hidrocalmante",
        "Exfoliación",
        "Loción ablandante de comedones",
        "Vapor ozono (bactericida)",
        "Peeling ultrasónico",
        "Alta frecuencia",
        "Microdermoabrasión",
        "Mascarilla facial",
        "Fototerapia (máscara LED)",
        "Electroporación",
        "Nutrición (sérum con principios activos)",
        "Masaje facial",
        "Protector solar 50"
    ];

    return (
        <>
            <div className="mt-7 p-5  from-pink-50 to-pink-100 trata-detalle mx-auto">
                <div className="border-4 border-pink-300 pl-6 flex flex-col md:text-lg bg-dark rounded-lg shadow-lg p-5 slide-in md:flex-row gap-6 mb-10">
                    <div className="relative">
                        <Image
                            src="/face2.webp"
                            width={500}
                            height={500}
                            alt="Centro Estética"
                            className="rounded-lg shadow-lg transition-transform transform hover:scale-105 fade-in"
                        />
                        <div className="absolute bottom-4 right-4 p-4 bg-opacity-50 rounded-lg">
                            <p className=" text-xl font-bold">
                                Precio: 35.000
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-pink-500 text-xl text-center md:text-3xl font-semibold mb-4 slide-in">INCLUYE</h2>
                        <ul className="space-y-4 text-left ">
                            {tratamiento.map((item) => (
                                <li key={item} className="flex items-center space-x-3 rtl:space-x-reverse fade-in">
                                    <svg className="flex-shrink-0 w-4 h-4 text-pink-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span className=" text-base md:text-xl">{item}</span>
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
