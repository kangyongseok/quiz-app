import { useAtomValue } from 'jotai';

import QuizForm from '@/components/quizForm';

import { quizResultAtom } from '@/jotai/quiz';

function InCorrectNote() {
  const quizResult = useAtomValue(quizResultAtom);

  return (
    <div>
      <p className="text-center text-4xl font-bold fixed w-screen p-6">
        오답노트
      </p>
      {quizResult.incorrectQuiz.map((quiz, i) => (
        <QuizForm
          key={`quiz-form-${quiz.answer}`}
          {...quiz}
          viewType="note"
          incorrectAnswer={quizResult.incorrectQuizAnswers[i]}
        />
      ))}
    </div>
  );
}

export default InCorrectNote;
