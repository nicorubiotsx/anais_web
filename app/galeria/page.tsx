'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const slides = [
        {
            image: '/dermaplaning11.jpg',
            description: 'Dermaplaning inicial, donde se está removiendo el vello fino y las células muertas de la piel del rostro de la clienta con una herramienta especial. Se nota una mejora en la suavidad y textura de la piel.'

        },
        {
            image: '/dermaplaning1.jpg',
            description: 'Dermaplaning inicial, donde se está removiendo el vello fino y las células muertas de la piel del rostro de la clienta con una herramienta especial. Se nota una mejora en la suavidad y textura de la piel.'

        }
        ,
        {
            image: '/dermaplaning2.jpg',
            description: 'Aplicación de suero hidratante mediante electroporación. La técnica está diseñada para mejorar la absorción de productos nutritivos en la piel, dejándola más tersa y luminosa.'
        },
        {
            image: '/dermaplaning3.jpg',
            description: 'Examinación de la piel después del tratamiento para verificar los resultados. La piel se ve más brillante y uniforme, con una notable reducción en la apariencia de poros y líneas finas'
        },
        {
            image: '/dermaplaning4.jpg',
            description: 'Hidrata y protege la piel con una mascarilla calmante después del dermaplaning y la electroporación, lo que ayuda a reducir cualquier posible enrojecimiento o irritación.'
        },
    ];

    const tratamientos = [
        {
            titulo: 'Dermaplaning',
            descripcion: 'Mejora en la claridad y la suavidad de la piel tras un tratamiento de dermaplaning, eliminando células muertas y vello fino.',
            imagenAntes: '/antes1.jpg',
            imagenDespues: '/despues1.jpg',
        },
        {
            titulo: 'Dermaplaning',
            descripcion: 'Piel más luminosa y con un tono uniforme tras una sesión de dermaplaning, rejuveneciendo la apariencia.',
            imagenAntes: '/antes2.jpg',
            imagenDespues: '/despues2.jpg',
        },
        {
            titulo: 'Dermaplaning',
            descripcion: 'Textura de la piel visiblemente mejorada con una apariencia más tersa y suave después del tratamiento.',
            imagenAntes: '/antes3.jpg',
            imagenDespues: '/despues3.jpg',
        },
        {
            titulo: 'Dermaplaning',
            descripcion: ' Hidratación profunda y renovación cutánea tras el dermaplaning, mostrando una piel fresca y saludable.',
            imagenAntes: '/antes4.jpg',
            imagenDespues: '/despues4.jpg',
        },
        {
            titulo: 'Dermaplaning',
            descripcion: ' Piel visiblemente revitalizada y libre de impurezas, con una textura refinada tras el dermaplaning.',
            imagenAntes: '/antes5.jpg',
            imagenDespues: '/despues5.jpg',
        },
    ];

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div className="container mx-auto ">
                <div className="title-container">
                    <h1 className="facial-title text-white text-3xl md:text-6xl font-semibold p-2 rounded-lg animate__animated animate__fadeIn animate__delay-1s "><span className="facial-icon">🧼</span>Testimonios Visuales:
                        <span className="highlight"> Antes Y Despues</span></h1>

                </div>  
                
                
                
                              <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tratamientos.map((tratamiento, index) => (
                        <div key={index} className="  bg-zinc-950 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 md:mt-20" data-aos="fade-up">
                            <div className="p-4">
                                <h2 className="text-pink-400 text-xl text-center md:text-3xl font-semibold mb-2">{tratamiento.titulo}</h2>
                                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                                    <div className="flex-1 relative">
                                        <Image
                                            width={300}
                                            height={200}
                                            src={tratamiento.imagenAntes}
                                            alt={`Antes - ${tratamiento.titulo}`}
                                            className="w-full h-65 object-cover rounded transition-transform transform hover:scale-105"
                                        />
                                        <span className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 text-sm rounded">Antes</span>
                                    </div>
                                    <div className="flex-1 relative">
                                        <Image
                                            width={300}
                                            height={200}
                                            src={tratamiento.imagenDespues}
                                            alt={`Después - ${tratamiento.titulo}`}
                                            className="w-full h-65 object-cover rounded transition-transform transform hover:scale-105"
                                        />
                                        <span className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 text-sm rounded">Después</span>
                                    </div>
                                </div>
                                <p className="text-white text-sm md:text-lg">{tratamiento.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className=" container mx-auto px-4 py-8  md:mt-20">
                <h1 className="text-center text-pink-400 text-xl md:text-4xl font-bold fade-in"> Dermaplaning + electroporación e hidratación en acción  </h1>

                <div className="relative w-full overflow-hidden mt-8">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {slides.map((s, index) => (
                            <div key={index} className="w-full flex-shrink-0">
                                <div className="bg-zinc-950 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div className="relative w-full h-[450px] md:h-[500px] lg:h-[800px]">
    <Image
        src={s.image}
        alt={`Imagen del slide ${index + 1}`}
        layout="fill"
        objectFit="contain" // Cambiar de cover a contain
        className="rounded transition-transform transform hover:scale-105"
    />
</div>

                                    <div className="p-4">
                                        <p className="text-white text-sm md:text-lg">{s.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Indicadores */}
                    <div className="flex justify-center mt-4">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 mx-1 rounded-full ${currentSlide === index ? 'bg-pink-400' : 'bg-gray-400'} transition-colors duration-300`}
                            />
                        ))}
                    </div>

                    {/* Botones de control */}
                    <button
                        onClick={prevSlide}
                        aria-label="Slide anterior"
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition-colors duration-300"
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        onClick={nextSlide}
                        aria-label="Siguiente slide"
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition-colors duration-300"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </>
    );
}