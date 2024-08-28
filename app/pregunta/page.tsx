'use client'
import { useState } from 'react';
import './styles.module.css'
import { FaInfoCircle, FaRegSadCry, FaClock, FaRegStar, FaExchangeAlt, FaRedoAlt, FaSun, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Home() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const preguntas = [
        {
            pregunta: "1. ¿Qué es una limpieza facial?",
            respuesta: "Es un tratamiento que elimina suciedad, maquillaje y células muertas de la piel, mejorando la textura y reduciendo puntos negros y acné.",
            icono: <FaInfoCircle className="text-pink-400 text-2xl" />
        },
        {
            pregunta: "2. ¿Es doloroso el tratamiento de limpieza facial?",
            respuesta: "No debería ser doloroso. Puede haber ligera incomodidad durante la extracción, pero el tratamiento es generalmente cómodo.",
            icono: <FaRegSadCry className="text-pink-400 text-2xl" />
        },
        {
            pregunta: "3. ¿Cuánto dura una limpieza facial?",
            respuesta: "Generalmente dura entre 60 y 90 minutos, dependiendo del tipo de tratamiento y las necesidades de la piel.",
            icono: <FaClock className="text-pink-400 text-2xl" />
        },
        {
            pregunta: "4. ¿Qué es el dermaplaning?",
            respuesta: "Es una exfoliación que elimina células muertas y vello fino para suavizar la piel y mejorar su textura. Es diferente a la limpieza facial, que se centra en purificar los poros.",
            icono: <FaRegStar className="text-pink-400 text-2xl" />
        },
        {
            pregunta: "5. ¿Qué beneficios ofrece la limpieza facial comparada con el dermaplaning?",
            respuesta: "La limpieza facial elimina impurezas y descongestiona los poros, mientras que el dermaplaning mejora la textura y suaviza la piel. Ambos tratamientos pueden complementarse.",
            icono: <FaExchangeAlt className="text-pink-400 text-2xl" />
        },
        {
            pregunta: "6. ¿Con qué frecuencia debo hacerme el dermaplaning?",
            respuesta: "Se recomienda cada 4 a 6 semanas para mantener la piel suave y libre de células muertas.",
            icono: <FaRedoAlt className="text-pink-400 text-2xl" />
        },
        {
            pregunta: "7. ¿Qué cuidados seguir después de una limpieza facial o dermaplaning?",
            respuesta: "Hidratar la piel y usar protector solar. Evita la exposición al sol y productos exfoliantes agresivos.",
            icono: <FaSun className="text-pink-400 text-2xl" />
        }
    ];

    const toggleAccordion = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className='   fade-in'>
            <div className="container mx-auto ">
               
                    <div className="title-container">
                        <h1 className="facial-title  text-3xl md:text-6xl font-semibold p-2 rounded-lg animate__animated animate__fadeIn animate__delay-1s"><span className="facial-icon">🧼</span>Preguntas
                            <span className="highlight">Más Frecuentes</span></h1>
                    </div>

                

                
                    <div className="p-6 rounded-lg shadow-lg text-center ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {preguntas.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`p-8 flex flex-col items-start rounded-lg border border-pink-400 shadow-md transition-all duration-300 ease-in-out transform `}>
                                    <div className="flex items-center w-full mb-4 cursor-pointer" onClick={() => toggleAccordion(index)}>
                                        {faq.icono}
                                        <h3  className=' text-pink-400 text-lg md:text-2xl font-semibold ml-4'>
                                            {faq.pregunta}
                                        </h3>
                                        <button className='ml-auto bg-white'>
                                            {expandedIndex === index
                                                ? <FaChevronUp className="text-pink-400 text-2xl" />
                                                : <FaChevronDown className="text-pink-400 text-2xl" />}
                                        </button>
                                    </div>
                                    {expandedIndex === index && (
                                        <p  className=" text-base md:text-xl mt-4 transition-all duration-300 ease-in-out">
                                            {faq.respuesta}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

            </div>



        </div>
    );
}
