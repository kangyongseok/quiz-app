import { useAtomValue } from 'jotai'

import { QUIZ_COUNT } from '@/constants/quiz'

import { getDiffTimeString } from '@/utils/getDiffTimeString'
import { endTimeAtom, quizResultAtom, startTimeAtom } from '@/jotai/quiz'

function QuizResult() {
  const startTime = useAtomValue(startTimeAtom)
  const endTime = useAtomValue(endTimeAtom)
  const quizResult = useAtomValue(quizResultAtom)

  return (
    <div className='flex_screen_center'>
      <div className="text-center flex flex-col gap-3">
        <div>
          <p>퀴즈 풀이 시간</p>
          <p>{getDiffTimeString(startTime, endTime)}</p>
        </div>
        <div>
          <p>총 퀴즈 갯수</p>
          <p className='font-bold'>{QUIZ_COUNT}</p>
        </div>
        <div>
          <p>정답</p>
          <p className="text-blue-500 font-bold">
            {quizResult.correctQuiz.length}
          </p>
        </div>
        <div>
          <p>오답</p>
          <p className="text-red-500 font-bold">
            {quizResult.incorrectQuiz.length}
          </p>
        </div>
      </div>
    </div>
  )
}

export default QuizResult