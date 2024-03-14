import { Loading } from '../../assets/Icons'

/* eslint-disable react/prop-types */
export function InputFielSearch ({
  register,
  placeholder,
  name, onChange,
  type,
  errors,
  labelText,
  requiredText,
  xlColSpan = 'xl:col-span-2',
  patternValue,
  patternText,
  disabled,
  loading,
  data,
  handleClickItem
}) {
  return (
    <div className={`relative col-span-12 md:col-span-6 lg:col-span-4 ${xlColSpan}`}>
      <div className='flex flex-col'>
        <label className='text-left text-sm'>{labelText}</label>
        <div className='relative flex w-full items-center focus:outline-none'>
          <input
            {...register(name, {
              onChange,
              required: requiredText,
              pattern: {
                value: patternValue,
                message: patternText
              }
            })}
            autoComplete='off'
            readOnly={disabled}
            type={type}
            className='px-2 py-[3px] placeholder-slate-300 placeholder-italic text-slate-600 relative bg-white rounded focus:border-[--color-green] text-sm border border-slate-300 outline-none focus:outline-none w-full'
            placeholder={placeholder}
            disabled={!!disabled}
          />
          {loading && <div className='absolute right-1'><Loading /></div>}
        </div>
        {errors?.[name]?.type === 'required' && <p className='text-red-500 text-sm'>{errors[name].message}</p>}
        {errors?.[name]?.type === 'pattern' && <p className='text-red-500 text-sm'>{errors[name].message}</p>}
      </div>
      {
        data?.length > 0 &&
          <ul className='w-full absolute border rounded-md mt-1 h-36 bg-white cursor-pointer z-10'>
            {

              data?.map(item => (
                <li
                  key={item.value}
                  className='hover:bg-[--color-green] px-2 py-1'
                  onClick={e => handleClickItem(e, item)}
                >
                  {item.name}
                </li>
              ))
          }
          </ul>
      }
    </div>

  )
}
