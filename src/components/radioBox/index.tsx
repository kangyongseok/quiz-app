import type { ChangeEvent } from 'react';

import { useSetAtom } from 'jotai';

import { selectedAnswerAtom } from '@/jotai/quiz';

function RadioBox({
  label,
  viewType,
  answer,
  incorrectAnswer
}: {
  label: string;
  viewType?: 'note';
  answer: string;
  incorrectAnswer?: string;
}) {
  const setAnswer = useSetAtom(selectedAnswerAtom);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  if (viewType === 'note') {
    return (
      <div className="flex items-center">
        <input
          defaultChecked={answer === label}
          id={label}
          type="radio"
          value={label}
          name={`default-radio-${answer}`}
          className="common_radio_box"
          disabled={answer !== label}
        />
        <label
          htmlFor={label}
          className={`ml-2 text-sm font-medium ${
            incorrectAnswer === label ? 'text-red-600' : 'text-gray-900'
          }`}
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
