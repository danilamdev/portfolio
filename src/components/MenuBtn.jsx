import '../styles/menu-btn.css'
import {useState} from 'preact/hooks'

export default function MenuBtn(){
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = (e) => {
    setShowMenu(prev => !prev)
    document.body.classList.toggle('no-scroll')
  }
  return (
    <>
      <input
        type="checkbox"
        checked={showMenu}
        name="menu-check"
        id="menu-check"
        class="peer/menu hidden"
        onClick={toggleMenu}
      />
      <div
        class={`md:hidden menu-bg transition-all w-screen h-screen top-0 left-0 bg-slate-800 fixed ${showMenu ? 'open' : ''}`}
      >
          <button onClick={toggleMenu} className='absolute top-3 right-4 rounded-lg z-50 bg-indigo-100'>
            <span>
              <svg class="stroke-indigo-500 w-8 h-8" viewBox="0 0 24 24" stroke-width="1.5"  fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </span>
          </button>
       
        <ul class="flex flex-col h-3/4 items-end justify-between pr-14 pt-24 relative">
          <li onClick={toggleMenu} class="block w-full text-right"><a href="#home" class="text-2xl w-full block p-5 text-slate-50">Home</a></li>
          <li onClick={toggleMenu} class="block w-full text-right"><a href="#about-me" class="text-2xl w-full block p-5 text-slate-50 ">Sobre mi</a></li>
          <li onClick={toggleMenu} class="block w-full text-right"><a href="#projects" class="text-2xl w-full block p-5 text-slate-50">Proyectos</a></li>
          <li onClick={toggleMenu} class="block w-full text-right"><a href="#skills" class="text-2xl w-full block p-5 text-slate-50">Habilidades</a></li>
          <li onClick={toggleMenu} class="block w-full text-right"><a href="#contact" class="text-2xl w-full block p-5 text-slate-50">contacto</a></li>
        </ul>
      </div>

      <label role="button" for="menu-check" class="md:hidden">
        <div class="flex flex-col w-6 h-6 justify-evenly">
          <div class="h-[2px] w-3 mx-auto rounded-full bg-slate-600"></div>
          <div class="h-[2px] w-5 rounded-full bg-slate-600"></div>
          <div class="h-[2px] w-5 rounded-full bg-slate-600"></div>
        </div>
      </label>
      
    </>
  )
}