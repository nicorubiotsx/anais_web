
import Link from 'next/link'
import './styles.module.css'
export default function Navbar() {
  Link
  return (

    <nav className='hola  '>
      <ul className='flex flex-col md:flex-row justify-between'>
        <li>
          <Link className=' text-white md:text-pink-300' href="/">Inicio</Link>
        </li>
        <li>
          <Link className='text-white md:text-pink-300' href="/acerca">Acerca</Link>
        </li>
        <li>
          <Link className=' text-white md:text-pink-300' href="/tratamiento">Tratamiento</Link>
        </li>

        <li>
          <Link className='text-white md:text-pink-300' href="/preguntas">Preguntas</Link>
        </li>

        <li>
          <Link className='text-white md:text-pink-300' href="/galeria">Galeria</Link>
        </li>

      </ul>

    </nav>



  )

}





