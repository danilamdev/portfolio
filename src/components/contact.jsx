import '../styles/contact.css'
import {useEffect, useMemo, useState} from 'preact/hooks'

import { sendMail } from '../services/fetchEmailApi'
import {gsap} from 'gsap'

function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)


  let hasNameError = useMemo(() => {
    if(name === '') return false
    let regex = /^[a-zA-Z\s]+$/
    return !regex.test(name)
  }, [name])

  let btnDisable = hasNameError || email === '' || message === ''

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // sendEmail()
    try {
      const response = await sendMail({name, email, message})
  
      if(response.status === 'sent'){
        setName('')
        setEmail('')
        setMessage('')
        setIsSuccess(true)
        
      }  
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
    
    setTimeout(() => {
      setIsSuccess(false)
    }, 5000);
    console.log({name, email, message})
  }

  useEffect(()=> {
   
    if(!isSuccess) return

    const anim = gsap.to("#success-msg", {
      opacity: 1,
      scale: 1,
      ease: "elastic.out(1, 0.4)",
      repeat:1,
      repeatDelay:1.5,
      yoyo: true,
      duration: 1.2
    });
    
    return () => anim.kill('#success-msg')
  },[isSuccess])

  return (
    <section id="contact" class="bg-white py-24 xl:py-36">
      <h2
        class="contact-title mb-24 text-slate-700 font-bold w-max mx-auto text-4xl text-center font-poppins relative md:text-5xl xl:text-6xl 2xl:text-7xl xl:mb-32 2xl:mb-52 lg:mb-32"
      >
        Contactame
      </h2>

      <div className='w-full px-6 xl:p-0 lg:w-10/12 max-w-7xl m-auto xl:grid xl:grid-cols-2 shadow-xl xl:shadow-cyan-100 rounded-xl overflow-hidden'>
        <div className='hidden xl:block w-full relative after:absolute after:content-[""] after:inset-0 after:bg-slate-600 after:mix-blend-screen'>
          <img src='./contact.webp' alt="foto de contacto Daniel Lambarri" className='w-full h-full object-cover' />
        </div>
       
          <form onSubmit={handleSubmit} className='max-w-lg xl:w-10/12 mx-auto py-6'>
            <div className='flex flex-col gap-y-2 mb-8'>
              <label htmlFor="nombre" className='text-slate-700 text-lg'>nombre</label>
              <input required aria-required type="text" disabled={loading} id='nombre' name='nombre' placeholder='john doe' onInput={(e) => setName(e.target.value)} value={name} className={`bg-slate-50 border border-slate-200 rounded px-2 py-4 focus:outline-1 ${hasNameError ? 'focus:outline-red-300' : 'focus:outline-indigo-400/40' } disabled:text-gray-400 placeholder:text-gray-300`}/>
            {hasNameError && <small className='text-red-400'>el nombre no es válido</small>}
            </div>
          
            <div className='flex flex-col gap-y-2 mb-8'>
              <label htmlFor="mail" className='text-slate-700 text-lg'>email</label>
              <input required aria-required type="email" disabled={loading} id='mail' name='mail' placeholder='johndoe@...' onInput={(e) => setEmail(e.target.value)} value={email} className='bg-slate-50 border border-slate-200 rounded px-2 py-4 focus:outline-indigo-400/40  disabled:text-gray-400 placeholder:text-gray-300'/>
            </div>
          
            <div className='flex flex-col gap-y-2 mb-12'>
              <label htmlFor="mensaje" className='text-slate-700 text-lg'>mensaje</label>
              <textarea aria-required required value={message} disabled={loading} name="mensaje" id="mensaje" cols="30" rows="10" placeholder='escribe tu mensaje...' onInput={(e) => setMessage(e.target.value)}  className='bg-slate-50 border border-slate-200 rounded px-2 py-4 focus:outline-indigo-400/40 resize-none  disabled:text-gray-400 placeholder:text-gray-300'></textarea>
            </div>

            <button disabled={btnDisable} className='bg-cyan-400 text-lg text-white w-full xl:w-40 mx-auto rounded-full py-4 h-14 disabled:bg-slate-300 disabled:active:scale-100 hover:bg-cyan-500 active:scale-95 flex items-center justify-center gap-10' type='submit'>
              
             {loading && <div className="spinner w-5 h-5"></div>}   
             
              <span className={`text-lg xl:${loading ? 'hidden' : 'block'}`}>{loading ? 'Enviando...' : 'enviar'}</span>
            </button>

            <p  className='text-center block p-12'>o comunicate por 
              <a className='text-green-500' href='https://wa.me/+5491167231003' target='_blank'> whatapp</a>
            </p>
          </form>
      </div>


      {isSuccess && <p id='success-msg' className='fixed bg-slate-700 text-white px-8 py-6 rounded-lg text-md bottom-40 z-50 left-2/4 -translate-x-20 flex items-center gap-4 font-poppins scale-0 opacity-0'><strong className='text-2xl text-green-400 border-2 border-green-400 px-2 rounded-full'>✓</strong> email enviado!</p>}

    </section>
  )
}

export default Contact