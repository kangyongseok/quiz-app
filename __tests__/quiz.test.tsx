import Quiz from "@/pages/quiz";
import { render, screen, fireEvent } from "@testing-library/react";
import dayjs from 'dayjs';
import { atom } from 'jotai';

jest.mock('next/router', () => jest.requireActual('next-router-mock'))

jest.mock('../src/hooks/useQuery', () => ({
  useQuery: () => ({
    data: [
      {
        question: '거북선으로 왜군을 물리친 장군은?',
        incorrect_answers: ['둘리', '개발자', '백범 김구'],
        correct_answer: '이순신',
      },
      {
        question: 'What is the capital of France?',
        incorrect_answers: ['Berlin', 'Madrid', 'London'],
        correct_answer: 'Paris',
      },
      // Add more quiz data as needed
    ],
    isLoading: false,
  }),
}));

describe('Quiz', () => {
  it('답안목록에 정답항목이 포함되어 있는지', async () => {
    render(<Quiz />)
    await screen.findByText('거북선으로 왜군을 물리친 장군은?');
    expect(screen.getByText('이순신')).toBeInTheDocument()
  })
  
  it('다음 퀴즈가 있으면 현재 퀴즈 풀이 후 다음 퀴즈 노출', async () => {
    render(<Quiz />)

    await screen.findByText('거북선으로 왜군을 물리친 장군은?');
    fireEvent.click(screen.getByText('둘리'));
    fireEvent.click(screen.getByText('다음'));

    await screen.findByText('What is the capital of France?');
    expect(screen.getByText('What is the capital of France?')).toBeInTheDocument();
  })
})