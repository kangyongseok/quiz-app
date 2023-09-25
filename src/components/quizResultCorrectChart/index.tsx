import { Pie } from "react-chartjs-2"
import { useAtomValue } from "jotai";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { quizResultAtom } from "@/jotai/quiz";

ChartJS.register(ArcElement, Tooltip, Legend)

function QuizResultCorrectChart() {
  const quizResult = useAtomValue(quizResultAtom)
  return (
    <Pie data={{
      labels: ['정답', '오답'],
      datasets: [{
        label: '퀴즈 풀이',
        data: [quizResult.correctQuiz.length, quizResult.incorrectQuiz.length],
        backgroundColor: [
          'rgb(54, 162, 235)',
          'rgb(255, 99, 132)'
        ]
      }]
    }} />
  )
}

export default QuizResultCorrectChart