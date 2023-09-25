import type { ChangeEvent } from 'react';

import { useSetAtom } from 'jotai';

import { selectedAnswerAtom } from '@/jotai/quiz';

function RadioBox({label}: {label: string}) {
  const setAnswer = useSetAtom(selectedAnswerAtom)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value)
  }

  return (
    <div className="flex items-center">
      <input id={label} type="radio" value={label} name="default-radio" className="common_radio_box cursor-pointer" onChange={handleChange} />
      <label htmlFor={label} className="ml-2 text-sm font-medium text-gray-900 cursor-pointer">{label}</label>
    </div>
  )
}

export default RadioBox