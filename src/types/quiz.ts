export interface QuizFormType {
  question: string;
  answerList: string[];
  answer: string;
  viewType?: 'note';
  onClick?: () => void;
}

export interface Query {
  url: string;
  options?: RequestInit;
}

export interface ResponseQuiz {
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
}

export interface QuizResultType {
  correctQuiz: QuizFormType[];
  incorrectQuiz: QuizFormType[];
}
