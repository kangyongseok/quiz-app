import React from 'react'

function QuizResult() {
  return (
    <div className='flex_screen_center'>
      <div className="text-center flex flex-col gap-3">
        <div>
          <p>퀴즈 풀이 시간</p>
          <p>10분</p>
        </div>
        <div>
          <p>총 퀴즈 갯수</p>
          <p className='font-bold'>10</p>
        </div>
        <div>
          <p>정답</p>
          <p className="text-blue-500 font-bold">3</p>
        </div>
        <div>
          <p>오답</p>
          <p className="text-red-500 font-bold">10분</p>
        </div>
      </div>
    </div>
  )
}

export default QuizResult