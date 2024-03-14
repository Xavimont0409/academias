/* eslint-disable react/prop-types */
export function Button({ text, handleClick, icon, type }) {
  return (
    <button
      onClick={handleClick}
      type={type}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      <div className="flex justify-between items-center gap-5">
        {text}
        {icon}
      </div>
    </button>
  );
}