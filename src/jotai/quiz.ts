import { atomWithReset, atomWithStorage } from 'jotai/utils';
import dayjs from 'dayjs';

import { type QuizResultType } from '@/types/quiz';

export const selectedAnswerAtom = atomWithReset('');

export const startTimeAtom = atomWithStorage('quizStart', dayjs());
export const endTimeAtom = atomWithStorage('quizEnd', dayjs());

export const quizResultAtom = atomWithStorage<QuizResultType>('quizResult', {
  correctQuiz: [],
  incorrectQuiz: []
});
