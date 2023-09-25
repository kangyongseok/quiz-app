import QuizForm from "@/components/quizForm"

function Quiz() {
  const sample = {
    question: '질문',
    answerList: ['답1', '답2', '답3', '답4'],
    answer: '답1'
  }

  return (
    <QuizForm {...sample} />
  )
}

export default Quiz