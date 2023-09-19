
const NavigationCard = ({ index, state, text }) => {
    console.log(index)
  return (
    <div className={`flex flex-row p-2 rounded-xl gap-2 ${state?'bg-orange-200':'bg-slate-200'}`}>
        <h1 className="w-6 h-6 bg-slate-50 rounded-full flex justify-center items-center">{index}</h1> 
        <h1>{text}</h1>
    </div>
  )
}

export default NavigationCard