import { Link, useLocation } from 'wouter'
import { signIn } from '../services/reporteVenta'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import { useSessionStore } from '../hooks/useSessionStore'

export default function Login () {
  const session = useSessionStore(state => state.session)
  const [, setLocation] = useLocation()

  useEffect(() => {
    if (session != null) {
      setLocation('/')
    } else {
      setLocation('/login')
    }
  }, [session])

  const handleSubmitLogin = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const email = formData.get('email').toString()
    const password = formData.get('password').toString()
    try {
      await signIn(email, password)
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <>
      <ToastContainer />
      <div className='navbar bg-base-100'>
        <div className='flex-1'>
          <Link to='/' className='btn btn-ghost normal-case text-xl'>
            <img className='h-16' src='https://valorantinfo.com/images/es/grafiti-sospecha-de-afk_valorant_gif_45247.gif' />
          </Link>
        </div>

      </div>
      <div className='hero  bg-base-400'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold px-6'>Login now!</h1>
            <p className='py-4 px-6'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl '>
            <div className='card-body'>
              <form onSubmit={(e) => handleSubmitLogin(e)}>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>
                  <input required name='email' type='text' placeholder='example@gmail.com' className='input input-bordered' />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Password</span>
                  </label>
                  <input type='password' name='password' placeholder='*******' className='input input-bordered' />
                  <label className='label'>
                    <a href='#' className='label-text-alt link link-hover'>Forgot password?</a>
                  </label>
                </div>
                <div className='form-control mt-6'>
                  <button className='btn btn-primary'>Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
