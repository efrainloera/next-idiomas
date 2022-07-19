import './App.css';
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function App() {
  const [t, i18n] = useTranslation("global")
  const [count, setCount] = useState(0)
  return (
    <div className=''>
      <nav className="bg-blue-100 border-black px-200 sm:px-40 py-2.5 rounded-b-xl dark:bg-gray-900 ">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className='flex w-96 justify-around'>
            <div className='hover:text-white text-black-500 transition hover:animate-pulse font-semibold cursor-pointer'>
              {t("navbar.inicio")}
            </div>
            <div onClick={() => { i18n.changeLanguage("en") }} className='hover:text-white text-black-500 transition hover:animate-pulse font-semibold cursor-pointer'>
              {t("navbar.ingles")}
            </div>
            <div onClick={() => { i18n.changeLanguage("es") }} className='hover:text-white text-black-500 transition hover:animate-pulse font-semibold cursor-pointer'>
              {t("navbar.espanol")}
            </div>

          </div>
          <div className='flex justify-end'>
            <div className='mx-5 hover:text-white text-black-300 transition hover:animate-pulse font-semibold cursor-pointer'>
              LN
            </div>
            <div className='mx-5 hover:text-white text-black-300 transition hover:animate-pulse font-semibold cursor-pointer'>
              LOGO
            </div>
          </div>
        </div>
      </nav>

      <div className='w-2/4' >
        <br></br>
        
        
        <h2 className='text-4xl text-white text-center font-extrabold'>Jorge Efrain Loera Rubalcava</h2>
        <br></br>
        <p className='text-xl text-center  text-gray-400'>{t("body.descripcion")}</p>
        <br></br>
        <br></br>
        <button  onClick={()=>{setCount(count + 1)}} class="bg-blue-500 text-center  hover:bg-red-700 text-black font-bold py-5 px-12 border border-red-700 rounded">
        {t("body.contador")}
        </button>
        <p className='text-center text-white'>{t("body.contador2")}: {count}</p>
        <br></br>
        <p className='text-xl text-center text-white'>{t("body.DescripcionTecnologias")}</p>
        
        <p className='text-xl text-center text-white'>{t("body.tecnologias")}</p>
      </div>
     


    </div>

  );
}

export default App;