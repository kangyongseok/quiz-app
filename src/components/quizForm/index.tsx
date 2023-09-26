import type { QuizFormType } from '@/types/quiz';

import { useAtomValue } from 'jotai';

import RadioBox from '../radioBox';

import { selectedAnswerAtom } from '@/jotai/quiz';

function QuizForm({
  question,
  answerList,
  answer,
  viewType,
  incorrectAnswer,
  onClick
}: QuizFormType) {
  const selectedAnswer = useAtomValue(selectedAnswerAtom);
  return (
    <div className="flex_screen_center flex-col bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="max-w-sm rounded overflow-hidden shadow-lg px-6 py-4 bg-white">
        <p
          className="font-bold text-2xl pb-2"
          dangerouslySetInnerHTML={{ __html: question }}
        />
        <ul>
          {answerList?.map((list, i) => (
            <li
              key={`answer-${list}-${i}`}
              className="mt-1"
            >
              <RadioBox
                label={list}
                viewType={viewType}
                answer={answer}
                incorrectAnswer={incorrectAnswer}
              />
            </li>
          ))}
        </ul>
        {viewType !== 'note' && (
          <button
            className="default_button"
            disabled={!selectedAnswer}
            onClick={onClick}
          >
            다음
          </button>
        )}
        {selectedAnswer && (
          <p
            className={`${
              selectedAnswer === answer ? 'text-blue-600' : 'text-red-600'
            }`}
          >
            {selectedAnswer === answer ? '정답입니다.' : '틀렸습니다.'}
          </p>
        )}
      </div>
    </div>
  );
}

export default QuizForm;
