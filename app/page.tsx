import Image from "next/image";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Home() {

  return (
    <div className="p-4 mt-7">
      <div className="relative">
        <div className=" background-imagee w-full h-96 bg-cover bg-center rounded-lg shadow-lg">
          {/* La clase `background-imagee` debe estar configurada en tu CSS para mostrar la imagen de fondo */}
          <div className="mt-40 absolute inset-0 flex items-center justify-center text-center bg-gradient-to-t from-black to-transparent p-4 rounded-lg">
            <h1 className="text-white text-xl md:text-4xl font-semibold p-2 rounded-lg animate__animated animate__fadeIn animate__delay-1s ">
              <span className="facial-icon">🧼</span>
              Salón AJ piel genuina <span className="highlight">cuidado de tu piel</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="title-container mt-10">
        <h1 className="facial-title">

        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-10">
        <div className="flex-shrink-0 basis-1/2">
          <Image
            src="/aa.webp"
            width={400}
            height={400}
            alt="Centro Estética"
            className="w-full h-auto object-cover border border-pink-400 rounded-lg transition-transform transform hover:scale-105 shadow-lg fade-in"
          />
        </div>

        <div className="border border-pink-400 rounded-lg shadow-lg p-6 mb-6 flex-1 basis-1/2">
          <h2 className="text-pink-400 text-xl text-center md:text-3xl font-semibold mb-2 fade-in">
            Misión y Propósito: <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-0 h-1 bg-pink-400 transform scale-x-0 transition-transform duration-300 ease-in-out"></span>
              <span className="relative text-white">La Esencia de Nuestro Trabajo</span>
            </span>
          </h2>

          <p className="text-white text-base md:text-lg">
            En Centro Estética Piel Genuina, queremos que luzcas una piel luminosa y radiante. Nuestro servicio de limpieza facial profunda es una experiencia rejuvenecedora y personalizada, usando técnicas avanzadas y productos de alta calidad.
          </p>

          <h2 className="text-pink-400 text-xl text-center md:text-3xl font-semibold mb-2 fade-in mt-10">
            ¿Qué es la Limpieza Facial?
          </h2>
          <p className="text-white text-sm md:text-lg">
            La limpieza facial elimina impurezas, células muertas y residuos de la piel que no se eliminan con la limpieza diaria. A través de técnicas como la exfoliación, mejora la textura de la piel y destapa los poros.
          </p>
        </div>
      </div>

      <h2 className="text-pink-400 text-center text-2xl md:text-4xl font-bold mb-4 mt-20 fade-in">
        Testimonios de Clientes
      </h2>

      <div className="grid mb-8 border border-pink-400 rounded-lg shadow-lg dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-gray-800 dark:bg-gray-800 mt-10">
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-black border  border-pink-400 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-pink-400 text-xl text-center md:text-2xl font-semibold mb-2">
              Limpieza Facial Profunda
            </h3>
            <p className="text-white text-base md:text-lg">
              “La limpieza facial profunda ha sido una experiencia increíble. Mi piel se siente limpia y revitalizada.”
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center">
            <div className="space-y-0.5 font-medium dark:text-white text-left ms-3">
              <div>Bonnie Green</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Clienta Feliz</div>
            </div>
          </figcaption>
        </figure>

        <figure className="flex flex-col items-center justify-center p-8 text-center bg-black border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-pink-400 text-xl text-center md:text-2xl font-semibold mb-2">
              Dermaplaning
            </h3>
            <p className="text-white text-base md:text-lg">
              “El dermaplaning ha transformado mi piel. Me encantó la atención al detalle.”
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center">
            <div className="space-y-0.5 font-medium dark:text-white text-left ms-3">
              <div>Roberta Casas</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Clienta Satisfecha</div>
            </div>
          </figcaption>
        </figure>
      </div>

      <h2 className="text-pink-400 text-xl text-center md:text-4xl font-semibold mb-2 fade-in pt-20">
        Nuestra Ubicación
      </h2>

      <div className="mb-8 pt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d981.3258131513353!2d-71.40481265476579!3d-34.1777098853038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDEwJzQxLjciUyA3McKwMjQnMTYuMSJX!5e0!3m2!1ses!2scl!4v1724794319680!5m2!1ses!2scl" height="350"
          allowFullScreen
          loading="lazy"
          className="mapa transition-transform transform hover:scale-105 fade-in"
        ></iframe>


      </div>

      <h2 className=" pt-20 text-pink-400 text-center text-2xl md:text-3xl font-bold mb-6 md:mb-8 fade-in">
        ¿Quieres comunicarte con nosotros?
      </h2>
      <p className="text-white text-center text-sm md:text-lg mb-6 md:mb-8">
        Ya sea que tengas preguntas, quieras hacer una cita, o simplemente desees más información, estamos aquí para ayudarte.
      </p>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-shrink-0 basis-1/2 flex flex-col items-center">
          <p className="text-white text-center text-base md:text-lg mb-4 md:mb-6 px-4 md:px-6">
            Conéctate con nosotros a través de Instagram para ver nuestras últimas promociones, consejos de belleza y novedades.
          </p>
          <a
            href="https://www.instagram.com/anaisjaramaulen/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center text-pink-400 text-lg gap-2 bg-white hover:bg-pink-100 py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn"
          >
            <FaInstagram className="text-2xl" />
            Síguenos en Instagram
          </a>
        </div>

        <div className="flex-1 basis-1/2 flex flex-col items-center">
          <p className="text-white text-center text-base md:text-lg mb-4 md:mb-6 px-4 md:px-6">
            Envíanos un mensaje por WhatsApp para consultas rápidas, reservas de citas o cualquier pregunta que tengas. ¡Estamos aquí para ti!
          </p>
          <a
            href="https://wa.me/+56940713305"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center text-green-500 text-lg gap-2 bg-white hover:bg-green-100 py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn"
          >
            <FaWhatsapp className="text-2xl" />
            Envíanos un mensaje por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
