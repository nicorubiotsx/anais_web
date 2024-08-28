import Image from 'next/image';

export default function Home() {
    return (
        <>
            <section className="   fade-in">
                <div className="container mx-auto">
                <div className="title-container">
                        <h1 className="  text-3xl md:text-6xl font-semibold p-2 rounded-lg animate__animated animate__fadeIn animate__delay-1s"><span className="facial-icon">🧼</span>Conoce Un Poco 
                        <span className="highlight">Más De Mi</span></h1>
                    </div>   


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl transition-transform duration-300 transform hover:scale-105 fade-in">
                            <Image
                                src="/profile1.jpg"
                                layout="fill"
                                objectFit="cover"
                                alt="Anais Jara Maulen"
                                className="w-full h-full object-cover bordeimage transition-transform transform hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                        </div>

                        <div className="flex flex-col justify-center fade-in">
                            <h2 className="text-pink-400 text-xl md:text-3xl font-semibold mb-4 fade-in">
                                Un Poco De Mi
                            </h2>
                            <div className="border-2 border-pink-400 rounded-lg shadow-xl  p-6 mb-6 transform transition-transform hover:-translate-y-1 hover:shadow-3xl fade-in">
                                <p className=" text-center text-sm md:text-xl mb-6 md:mb-8">
                                    Mi nombre es Anais Jara Maúlen, enfermera profesional enfocada en otorgar cuidado humanizado y de calidad dedicado a la disciplina del estudio y cuidado de la piel a través de tratamientos y técnicas de reparación, restauración, mantenimiento y prevención del deterioro de la piel. Mi objetivo es entregar un cuidado de calidad a tu piel para que la sientas renovada y fresca, además de proporcionarte los conocimientos para lograr un correcto cuidado de tu piel en tu vida cotidiana, según el biotipo cutáneo.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        <div className="flex flex-col justify-center order-2 md:order-1 fade-in">
                            <div className="flex items-center mb-4 fade-in">
                                <svg className="w-6 h-6 text-pink-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                                </svg>
                                <h2 className="text-pink-400 text-xl md:text-3xl font-semibold fade-in">
                                    Certificaciones
                                </h2>
                            </div>
                            <div className="border-2 border-pink-400 rounded-lg shadow-xl  p-6 mb-6 transform transition-transform hover:-translate-y-1 hover:shadow-3xl fade-in">
                                <p className=" text-center text-sm md:text-xl mb-6 md:mb-8">
                                     Cuento con certificaciones profesionales que respaldan mi enfoque en la limpieza facial profunda. Utilizo técnicas avanzadas y productos de calidad, adaptando el tratamiento a tu tipo de piel para asegurar que luzca saludable y revitalizada. Mi objetivo es ofrecerte un cuidado eficaz y personalizado.
                                </p>
                                <div className=" rounded-lg shadow-xl p-4 fade-in transform transition-transform hover:-translate-y-1 hover:shadow-3xl">
                                    <h3 className="text-pink-400 text-lg md:text-xl font-semibold mb-4 fade-in">Certificados</h3>
                                    <ul className="list-disc pl-5  text-base md:text-lg space-y-2 fade-in">
                                        <li>Dermaplaning Y Limpieza Facial Con Aparatología</li>
                                        <li>Limpieza Facial Profunda Con Aparatología</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] order-1 md:order-2 rounded-lg overflow-hidden shadow-2xl transition-transform duration-300 transform hover:scale-105 fade-in">
                            <Image
                                src="/profile2.jpg"
                                layout="fill"
                                objectFit="cover"
                                alt="Certificaciones"
                                className="w-full h-full object-cover bordeimage transition-transform transform hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        <div className="flex flex-col justify-center fade-in">
                            <h2 className="text-pink-400 text-xl md:text-3xl font-semibold mb-4 fade-in">
                                Mi Filosofía
                            </h2>
                            <div className="border-2 border-pink-400 rounded-lg shadow-xl p-6 mb-6 transform transition-transform hover:-translate-y-1 hover:shadow-3xl fade-in">
                                <p className=" text-center text-sm md: mb-6 md:mb-8 text-xl">
                                   Creo firmemente en ofrecer un enfoque personalizado y humanizado a cada tratamiento. Mi compromiso es hacer que cada cliente se sienta cuidado, con productos de alta calidad y técnicas avanzadas que revitalizan y renuevan la piel, buscando siempre los mejores resultados para cada tipo de piel.
                                </p>
                            </div>
                        </div>


                    </div>



                </div>
            </section>
        </>
    );
}
