export function BoxStudent({ name, lastName, age, image, tittle }) {
  return (
    <div className="bg-white rounded-md shadow-md p-4 flex flex-col items-center justify-center max-w-sm mx-auto mb-4">
      <h3 className="text-lg font-bold mt-4 text-center">{`${name}  ${lastName}`}</h3>
      <p className="text-sm text-center mt-2">{age}</p>
    </div>
  )
}