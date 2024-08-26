'use client'
import Image from "next/image";
import Link from "next/link";
import { FaWater, FaLeaf, FaBroom, FaSun } from "react-icons/fa6";

export default function Home() {
    return (
        <div className="bg-black text-white">
            <div className="title-container">
    <h1 className="facial-title">
        <span className="facial-icon">🧼</span>
        Tratamientos de <span className="highlight">Limpieza Facial</span>
    </h1>
</div>
            <div className="mt-10 px-4 md:px-8">
                <h2 className="text-pink-400 text-center text-2xl md:text-3xl font-bold mb-4 fade-in">
                    Conoce Los Beneficios De Nuestros Tratamientos Faciales
                </h2>

                <div className="mx-auto">
                    <div className="flex flex-wrap justify-between gap-8">
                        <div className="flex-1 min-w-[400px] max-w-[550px]  p-6 rounded-lg shadow-lg hover:shadow-pink-400 hover:scale-105 transition-all border border-pink-400">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-400 text-white">
                                    <FaWater className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-white text-base md:text-lg">
                                        Permite eliminar impurezas y células muertas que resisten la limpieza diaria.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 min-w-[400px] max-w-[550px] p-6 rounded-lg shadow-lg hover:shadow-pink-400 hover:scale-105 transition-all border border-pink-400">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-400 text-white">
                                    <FaLeaf className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-white text-base md:text-lg">
                                        Ayuda a rejuvenecer la piel evitando la aparición de arrugas prematuras.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between gap-8 mt-12">
                        <div className="flex-1 min-w-[400px] max-w-[550px]  p-6 rounded-lg shadow-lg hover:shadow-pink-400 hover:scale-105 transition-all border border-pink-400">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-400 text-white">
                                    <FaBroom className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-white text-base md:text-lg">
                                        Elimina puntos negros, espinillas, milia y acné.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 min-w-[400px] max-w-[550px]  p-6 rounded-lg shadow-lg hover:shadow-pink-400 hover:scale-105 transition-all border border-pink-400">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-400 text-white">
                                    <FaSun className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-white text-base md:text-lg">
                                        Recupera el aspecto saludable, suave y luminoso de la piel.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between gap-8 mt-12">
                        <div className="flex-1 min-w-[400px] max-w-[550px] p-6 rounded-lg shadow-lg hover:shadow-pink-400 hover:scale-105 transition-all border border-pink-400">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-400 text-white">
                                </div>
                                <div>
                                    <p className="text-white text-base md:text-lg">
                                        Contribuye a la regulación de producción de sebo y restablece el pH natural de la piel.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 min-w-[400px] max-w-[550px]  p-6 rounded-lg shadow-lg hover:shadow-pink-400 hover:scale-105 transition-all border border-pink-400">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-400 text-white">
                                </div>
                                <div>
                                    <p className="text-white text-base md:text-lg">
                                        Favorece la mejor absorción de productos de cuidado facial.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-pink-400 text-xl text-center md:text-4xl font-semibold mb-8 mt-20 fade-in">
                    Selecciona Un Tratamiento
                </h2>

                <div className="flex flex-col md:flex-row gap-6 md:gap-8 px-4 md:px-8 mt-8">
                    <div className="max-w-sm  border border-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <Link href="/tratamiento/tratamiento-profundo">
                            <Image
                                src="/face1.png"
                                width={500}
                                height={500}
                                alt="Limpieza Facial Profunda"
                                className="w-full rounded-t-lg"
                            />
                        </Link>
                        <div className="p-5">
                            <Link href="/tratamiento/tratamiento-profundo">
                                <h5 className="text-pink-400 text-xl text-center md:text-2xl font-semibold mb-2">
                                    Limpieza Facial Profunda
                                </h5>
                            </Link>
                        </div>
                    </div>

                    <div className="max-w-sm border border-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <Link href="/tratamiento/tratamiento-premium">
                            <Image
                                src="/face2.webp"
                                width={500}
                                height={500}
                                alt="Limpieza Facial Profunda Premium"
                                className="w-full rounded-t-lg"
                            />
                        </Link>
                        <div className="p-5">
                            <Link href="/tratamiento/tratamiento-premium">
                                <h5 className="text-pink-400 text-xl text-center md:text-2xl font-semibold mb-2">
                                    Limpieza Facial Profunda Premium
                                </h5>
                            </Link>
                        </div>
                    </div>

                    <div className="max-w-sm  border border-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <Link href="/tratamiento/dermaplaning">
                            <Image
                                src="/face3.webp"
                                width={500}
                                height={500}
                                alt="Dermaplaning"
                                className="w-full rounded-t-lg"
                            />
                        </Link>
                        <div className="p-5">
                            <Link href="/tratamiento/dermaplaning">
                                <h5 className="text-pink-400 text-xl text-center md:text-2xl font-semibold mb-2">
                                    Dermaplaning
                                </h5>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
