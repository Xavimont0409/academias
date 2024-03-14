/* eslint-disable react/prop-types */
export function TextArea ({ register, placeholder, name, onChange, rows, errors, labelText, requiredText, xlColSpan = 'xl:col-span-2', patternValue, patternText, disabled }) {
  return (
    <div className={`col-span-12 md:col-span-6 lg:col-span-4 ${xlColSpan}`}>
      <div className='flex flex-col'>
        <label className='text-left text-sm'>{labelText}</label>
        <textarea
          {...register(name, {
            onChange,
            required: requiredText,
            pattern: {
              value: patternValue,
              message: patternText
            }
          })}
          readOnly={disabled}
          className='input-text'
          placeholder={placeholder}
          disabled={!!disabled}
          rows={rows}
        />
        {errors?.[name]?.type === 'required' && <p className='text-red-500 text-sm'>{errors[name].message}</p>}
        {errors?.[name]?.type === 'pattern' && <p className='text-red-500 text-sm'>{errors[name].message}</p>}
      </div>
    </div>

  )
}
