function CheckBox({label}: {label: string}) {
  return (
    <div className="flex items-center">
      <input id={label} type="checkbox" value={label} className="common_check_box" />
      <label htmlFor={label} className="ml-2 text-sm font-medium text-gray-900">{label}</label>
    </div>
  )
}

export default CheckBox