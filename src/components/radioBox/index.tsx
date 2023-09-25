import type { ChangeEvent } from 'react';

import { useSetAtom } from 'jotai';

import { selectedAnswerAtom } from '@/jotai/quiz';

function RadioBox({
  label,
  viewType,
  answer
}: {
  label: string;
  viewType?: 'note';
  answer: string;
}) {
  const setAnswer = useSetAtom(selectedAnswerAtom);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };
  console.log(answer, label);
  if (viewType === 'note') {
    return (
      <div className="flex items-center">
        <input
          defaultChecked={answer === label}
          id={label}
          type="radio"
          value={label}
          name={`default-radio-${answer}`}
          className="common_radio_box cursor-pointer"
        />
        <label
          htmlFor={label}
          className="ml-2 text-sm font-medium text-gray-900 cursor-pointer"
        >
          {label}
        </label>
      </div>
    );
  }
  return (
    <div className="flex items-center">
      <input
        id={label}
        type="radio"
        value={label}
        name={`default-radio-${answer}`}
        className="common_radio_box cursor-pointer"
        onChange={handleChange}
      />
      <label
        htmlFor={label}
        className="ml-2 text-sm font-medium text-gray-900 cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
}

export default RadioBox;
