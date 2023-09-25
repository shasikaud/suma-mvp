
const NavigationCard = ({ index, state, text }) => {
  const bgColor = state === 'INACTIVE' ? 'bg-slate-200' : state === 'ACTIVE' ? 'bg-orange-200' : state === 'COMPLETED' ? 'bg-primary' : '';
  console.log(`${text} : ${state} : ${bgColor}`)
  return (
    <div className={`flex flex-row p-2 rounded-xl gap-2 ${bgColor}`}>
        <h1 className="w-6 h-6 bg-slate-50 rounded-full flex justify-center items-center">{index}</h1> 
        <h1>{text}</h1>
    </div>
  )
}

export default NavigationCard