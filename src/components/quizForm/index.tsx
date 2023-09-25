import type { QuizFormType } from "@/types/quiz";

import RadioBox from "../radioBox";

function QuizForm({
  question,
  answerList,
  answer,
  onClick
}: QuizFormType) {
  return (
    <div className="flex_screen_center flex-col bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="max-w-sm rounded overflow-hidden shadow-lg px-6 py-4 bg-white">
        <p className="font-bold text-2xl pb-2" dangerouslySetInnerHTML={{__html: question}} />
        <ul>
          {
            answerList?.map(list => (
              <li key={`answer-${list}`} className="mt-1">
                <RadioBox label={list} />
              </li>
            ))
          }
        </ul>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 disabled:opacity-25" disabled onClick={onClick}>
          다음
        </button>
      </div>
    </div>
  )
}

export default QuizForm