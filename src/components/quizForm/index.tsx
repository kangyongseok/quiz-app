import CheckBox from "../checkBox";

interface QuizFormProps {
  question: string;
  answerList: string[];
  answer: string;
}

function QuizForm({
  question,
  answerList,
  answer
}: QuizFormProps) {
  return (
    <div className="flex_screen_center flex-col bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="max-w-sm rounded overflow-hidden shadow-lg px-6 py-4 bg-white">
        <p className="font-bold text-2xl pb-2">{question}</p>
        <ol>
          {
            answerList.map(list => (
              <li key={`answer-${list}`} className="mt-1">
                <CheckBox label={list} />
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  )
}

export default QuizForm