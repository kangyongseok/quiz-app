import React from 'react'

function QuizResult() {
  return (
    <div>
      <div className='flex'>
        <p>퀴즈 풀이 시간: </p>
        <p>10분</p>
      </div>
      <div className='flex'>
        <p>총 퀴즈 갯수</p>
        <p>10</p>
      </div>
      <div className='flex'>
        <p>정답</p>
        <p>3</p>
      </div>
      <div className='flex'>
        <p>오답</p>
        <p>10분</p>
      </div>
    </div>
  )
}

export default QuizResult