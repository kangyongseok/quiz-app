import { Suspense, useMemo, useState } from "react"

import QuizForm from "@/components/quizForm"

import { useQuery } from "@/hooks/useQuery"

import { shuffle } from "@/utils/shuffle";

function Quiz() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const {data, isLoading} = useQuery({ url: 'https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple' })


  const quizData = useMemo(() => {
    return data.map(quiz => ({
      question: quiz.question,
      answerList: shuffle([...quiz.incorrect_answers, quiz.correct_answer]),
      answer: quiz.correct_answer
    }))
  }, [data])

  const handleClickNext = () => {
    setCurrentQuiz(prevQuiz => prevQuiz + 1);
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {
        data && <QuizForm {...quizData[currentQuiz]} onClick={handleClickNext} />
      }
    </Suspense>
  )
}

export default Quiz