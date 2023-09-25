function CheckBox({label}: {label: string}) {
  return (
    <div className="flex items-center">
      <input id={label} type="checkbox" value={label} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
      <label htmlFor={label} className="ml-2 text-sm font-medium text-gray-900">{label}</label>
    </div>
  )
}

export default CheckBox