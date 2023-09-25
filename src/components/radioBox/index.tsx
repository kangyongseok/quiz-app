function RadioBox({label}: {label: string}) {
  return (
    <div className="flex items-center">
      <input id={label} type="radio" value="" name="default-radio" className="common_radio_box cursor-pointer" />
      <label htmlFor={label} className="ml-2 text-sm font-medium text-gray-900 cursor-pointer">{label}</label>
    </div>
  )
}

export default RadioBox