import { render, screen } from '@testing-library/react';
import Quiz from '@/pages/quiz';
import { useQuery } from '@/hooks/useQuery';
import mockRouter from 'next-router-mock';

jest.mock('../../hooks/useQuery', () => ({ useQuery: jest.fn() }))
jest.mock('next/router', () => jest.requireActual('next-router-mock'))


describe('Quiz', () => {
  beforeEach(() => {
    useQuery.mockImplementation(() => ({
      data: [
        {
          question: 'What is the capital of France?',
          incorrect_answers: ['London', 'Berlin', 'Rome'],
          correct_answer: 'Paris'
        }
      ],
      isLoading: false,
    }))
  })

  it('받아온 데이터의 질문을 노출 시킨다', () => {
    render(<Quiz />);

    const question = screen.getByText('What is the capital of France?');
    expect(question).toBeInTheDocument();
  });

  it('받아온 데이터의 답안을 노출 시킨다 (4개)', () => {
    render(<Quiz />);

    const answerList = screen.getAllByText(/London|Paris|Berlin|Rome/);
    expect(answerList).toHaveLength(4);
  });

})