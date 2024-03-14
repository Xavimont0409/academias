import logo from '../../assets/logo-santa-fe.png'

export function SessionExpired () {
  return (
    <section className='h-screen overflow-hidden'>
      <div className='border-b border-stone-200 mx-5 py-2'>
        <div className='flex gap-2 justify-between items-center'>
          <div className='flex gap-10 items-center'>
            <img src={logo} className='w-24' />
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center h-full'>
        <img src='https://www.svgrepo.com/show/411076/time.svg' alt='logo' className='w-40 h-40' />
        <h1 className='text-4xl font-medium py-5'>Su sesión ha expirado</h1>
        <a href='http://localhost:5174' className='text-[--color-blue] hover:text-[--color-blue-hover]'>haz clic aquí para inicar sessión</a>
      </div>
    </section>
  )
}
