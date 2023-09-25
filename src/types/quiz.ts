export interface QuizFormType {
  question: string;
  answerList: string[];
  answer: string;
  onClick: () => void;
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