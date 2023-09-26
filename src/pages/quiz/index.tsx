import { Suspense, useMemo, useState } from 'react';

import { useRouter } from 'next/router';

import { useResetAtom } from 'jotai/utils';
import { useAtomValue, useSetAtom } from 'jotai';
import dayjs from 'dayjs';

import QuizForm from '@/components/quizForm';

import { useQuery } from '@/hooks/useQuery';

import { QUIZ_COUNT } from '@/constants/quiz';

import { shuffle } from '@/utils/shuffle';
import { endTimeAtom, quizResultAtom, selectedAnswerAtom } from '@/jotai/quiz';

import { ResponseQuiz } from '@/types/quiz';

function Quiz() {
  const router = useRouter();
  const [currentQuiz, setCurrentQuiz] = useState(0);

  const answer = useAtomValue(selectedAnswerAtom);
  const setAnswerResult = useSetAtom(quizResultAtom);
  const setEndTime = useSetAtom(endTimeAtom);
  const resetSelectedAnswer = useResetAtom(selectedAnswerAtom);

  const { data, isLoading } = useQuery<ResponseQuiz[]>({
    url: `https://opentdb.com/api.php?amount=${QUIZ_COUNT}&difficulty=medium&type=multiple`
  });

  const quizData = useMemo(() => {
    return data?.map((quiz) => ({
      question: quiz.question,
      answerList: shuffle([...quiz.incorrect_answers, quiz.correct_answer]),
      answer: quiz.correct_answer
    })) || [];
  }, [data]);

  const setQuizResultData = () => {
    if (answer === quizData[currentQuiz].answer) {
      setAnswerResult((prevData) => ({
        ...prevData,
        correctQuiz: [...prevData.correctQuiz, quizData[currentQuiz]]
      }));
    } else {
      setAnswerResult((prevData) => ({
        ...prevData,
        incorrectQuiz: [...prevData.incorrectQuiz, quizData[currentQuiz]],
        incorrectQuizAnswers: [...prevData.incorrectQuizAnswers, answer]
      }));
    }
  };

  const handleClickNext = () => {
    resetSelectedAnswer();
    setQuizResultData();
    if (currentQuiz + 1 < QUIZ_COUNT) {
      setCurrentQuiz((prevQuiz) => prevQuiz + 1);
    } else {
      setEndTime(dayjs());
      router.push('/quizResult');
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {data && !isLoading && (
        <QuizForm
          {...quizData[currentQuiz]}
          onClick={handleClickNext}
        />
      )}
    </Suspense>
  );
}

export default Quiz;
