'use client'
import './styles.module.css'
import { FaInfoCircle, FaCalendarAlt, FaRegSadCry, FaClock, FaRegStar, FaExchangeAlt, FaRedoAlt, FaSun } from 'react-icons/fa';

export default function Home() {

    const preguntas = [
        {
            pregunta: "1. ¿Qué es una limpieza facial?",
            respuesta: "Es un tratamiento que elimina suciedad, maquillaje y células muertas de la piel, mejorando la textura y reduciendo puntos negros y acné.",
            icono: <FaInfoCircle className="text-pink-400 text-xl" />
        },
        {
            pregunta: "2. ¿Con qué frecuencia debo hacerme una limpieza facial?",
            respuesta: "Se recomienda cada 4 a 6 semanas para mantener la piel limpia y saludable.",
            icono: <FaCalendarAlt className="text-pink-400 text-xl" />
        },
        {
            pregunta: "3. ¿Es doloroso el tratamiento de limpieza facial?",
            respuesta: "No debería ser doloroso. Puede haber ligera incomodidad durante la extracción, pero el tratamiento es generalmente cómodo.",
            icono: <FaRegSadCry className="text-pink-400 text-xl" />
        },
        {
            pregunta: "4. ¿Cuánto dura una limpieza facial?",
            respuesta: "Generalmente dura entre 60 y 90 minutos, dependiendo del tipo de tratamiento y las necesidades de la piel.",
            icono: <FaClock className="text-pink-400 text-xl" />
        },
        {
            pregunta: "5. ¿Qué es el dermaplaning?",
            respuesta: "Es una exfoliación que elimina células muertas y vello fino para suavizar la piel y mejorar su textura. Es diferente a la limpieza facial, que se centra en purificar los poros.",
            icono: <FaRegStar className="text-pink-400 text-xl" />
        },
        {
            pregunta: "6. ¿Qué beneficios ofrece la limpieza facial comparada con el dermaplaning?",
            respuesta: "La limpieza facial elimina impurezas y descongestiona los poros, mientras que el dermaplaning mejora la textura y suaviza la piel. Ambos tratamientos pueden complementarse.",
            icono: <FaExchangeAlt className="text-pink-400 text-xl" />
        },
        {
            pregunta: "7. ¿Con qué frecuencia debo hacerme el dermaplaning?",
            respuesta: "Se recomienda cada 4 a 6 semanas para mantener la piel suave y libre de células muertas.",
            icono: <FaRedoAlt className="text-pink-400 text-xl" />
        },
        {
            pregunta: "8. ¿Qué cuidados seguir después de una limpieza facial o dermaplaning?",
            respuesta: "Hidratar la piel y usar protector solar. Evita la exposición al sol y productos exfoliantes agresivos.",
            icono: <FaSun className="text-pink-400 text-xl" />
        }
    ];

    return (
        <>
            <div className="title-container">
                <h1 className="facial-title">
                    <span className="facial-icon">🧼</span>
                    Tratamientos de <span className="highlight">Limpieza Facial</span>
                </h1>
            </div>

            <div className="p-6 rounded-lg shadow-md text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        preguntas.map((faq, id) => (
                            <div key={id} className="p-4 rounded-lg border-2 border-pink-400 shadow-sm mx-auto max-w-md">
                                <div className="flex items-center mb-2">
                                    {faq.icono}
                                    <h3 className='text-pink-400 text-base md:text-xl ml-2'>
                                        {faq.pregunta}
                                    </h3>
                                </div>
                                <p className="text-white text-base md:text-lg mb-4">
                                    {faq.respuesta}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <style jsx>{`
                .highlight {
                    background-color: #fef2f2; /* Color de fondo sutil */
                    color: #d53f8c; /* Color de texto resaltado */
                    padding: 0.2rem 0.4rem;
                    border-radius: 0.3rem;
                }

                .fadeIn {
                    animation: fadeIn 1s ease-in-out;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
            `}</style>
        </>
    );
}
