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
        { imagen: '/dermaplaning1.jpg' },
        { imagen: '/dermaplaning2.jpg' },
        { imagen: '/dermaplaning3.jpg' },
        { imagen: '/dermaplaning4.jpg' },
    ];

    const tratamientos = [
        {
            titulo: 'Limpieza Facial Profunda',
            descripcion: 'Elimina impurezas y células muertas para una piel radiante.',
            imagenAntes: '/antes1.jpg',
            imagenDespues: '/despues1.jpg',
        },
        {
            titulo: 'Limpieza Facial Profunda',
            descripcion: 'Renueva la piel y mejora su textura y tono.',
            imagenAntes: '/antes2.jpg',
            imagenDespues: '/despues2.jpg',
        },
        {
            titulo: 'Peeling Químico',
            descripcion: 'Renueva la piel y mejora su textura y tono.',
            imagenAntes: '/antes3.jpg',
            imagenDespues: '/despues3.jpg',
        },
        {
            titulo: 'Peeling Químico',
            descripcion: 'Renueva la piel y mejora su textura y tono.',
            imagenAntes: '/antes4.jpg',
            imagenDespues: '/despues4.jpg',
        },
        {
            titulo: 'Peeling Químico',
            descripcion: 'Renueva la piel y mejora su textura y tono.',
            imagenAntes: '/antes5.jpg',
            imagenDespues: '/despues5.jpg',
        },
    ];

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div className="container mx-auto px-4 py-8">
            <div className="title-container">
                        <h1 className="facial-title"><span className="facial-icon">🧼</span>Testimonios Visuales: 
                        <span className="highlight">Antes Y Despues</span></h1>
                    </div>                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tratamientos.map((tratamiento, index) => (
                        <div key={index} className="bg-zinc-950 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300" data-aos="fade-up">
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

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-center text-pink-400 text-xl md:text-4xl font-bold fade-in">Galería De Trabajo</h1>

                <div className="relative w-full overflow-hidden mt-8">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {slides.map((s, index) => (
                            <div key={index} className="w-full flex-shrink-0">
                                <div className="bg-zinc-950 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                    <div className="relative w-full h-[450px] md:h-[600px] lg:h-[750px]">
                                        <Image
                                            src={s.imagen}
                                            alt={`Imagen del slide ${index + 1}`}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded transition-transform transform hover:scale-105"
                                        />
                                        <span className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 text-sm rounded">Después</span>
                                    </div>
                                    <div className="p-4">
                                        <p className="text-white text-sm md:text-lg">Descripción breve</p>
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