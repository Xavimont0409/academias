import { Controller } from 'react-hook-form'

/* eslint-disable react/prop-types */
export function InputSelect ({ register, options, name, onChange, errors, labelText, requiredText, control, disabled, xlColSpan = 'xl:col-span-2' }) {
  return (
    <div className={`col-span-12 md:col-span-6 lg:col-span-4 ${xlColSpan}`}>
      <div className='flex flex-col'>
        <label className='text-left text-sm'>{labelText}</label>
        <div className='relative flex w-full flex-wrap items-stretch focus:outline-none'>
          <Controller
            name={name}
            control={control}
            rules={{ required: requiredText }}
            render={({ field }) => (
              <select
                {...field}
                defaultValue={0}
                className='px-2 py-1 placeholder-slate-300 placeholder-italic text-slate-600 relative bg-white rounded focus:border-[--color-green] text-sm border border-slate-300 outline-none focus:outline-none w-full pr-10'
                onChange={onChange}
                disabled={!!disabled}
              >
                {
                  options?.map(({ value, name }) => (
                    <option key={value} value={value}>{name}</option>
                  ))
                }
              </select>
            )}
          />
        </div>
        {errors?.[name]?.type === 'required' && <p className='text-red-500 text-sm'>{errors[name].message}</p>}
        {errors?.[name]?.type === 'validate' && <p className='text-red-500 text-sm'>{errors[name].message}</p>}
      </div>
    </div>

  )
}
