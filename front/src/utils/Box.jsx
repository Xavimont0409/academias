// eslint-disable-next-line react/prop-types
export function Box ({ title, content, img, bgColor }) {
  return (
    <div className='border border-[--color-green] p-2 capitalize w-[170px] rounded-md flex gap-2 items-center justify-between'>
      <div className='w-10 h-10 rounded-full flex items-center justify-center' style={{ backgroundColor: title === 'total' ? '#c9c9c9' : bgColor }}>
        <img src={img} className='w-8' />
      </div>
      <div>
        <h1 className='font-medium'>{title}</h1>
        <p className='text-end text-2xl'>{content}</p>
      </div>
    </div>
  )
}
