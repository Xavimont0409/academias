/* eslint-disable react/prop-types */
export const Modal = ({ children, closeModal, title, onSubmit, className }) => {
  return (
    <div className='fixed z-40 top-0 left-0 w-full h-screen bg-stone-500 bg-opacity-60 text-stone-600'>
      <div className='flex justify-center items-center h-full'>
        <div className={className || 'flex flex-col justify-between bg-white rounded-md w-4/5 px-5 pb-5'}>
          {/* header */}
          <div className='flex items-start justify-between py-5 rounded-t '>
            <div>
              <h3 className='text-2xl'>{title}</h3>
            </div>
            <button
              className='float-right leading-none font-semibold outline-none focus:outline-none'
              onClick={closeModal}
            >
              <span className='text-stone-500 h-6 w-6 text-4xl block outline-none focus:outline-none'>×</span>
            </button>
          </div>
          <form onSubmit={onSubmit}>
            {children}
          </form>
        </div>
      </div>
    </div>
  )
}
