
const NavigationCard = ({ index, state, text, completed, updateNavigationState, id }) => {
  const bgColor = state ? 'bg-orange-200' : completed ? 'bg-primary' : 'bg-slate-200';
  return (
    <div className={`flex flex-row p-2 rounded-xl gap-2 ${bgColor}`} onClick={e => updateNavigationState(id)}>
        <h1 className="w-6 h-6 bg-slate-50 rounded-full flex justify-center items-center">{index}</h1> 
        <h1>{text}</h1>
    </div>
  )
}

export default NavigationCard