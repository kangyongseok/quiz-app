import { render, screen } from '@testing-library/react';
import Quiz from '@/pages/quiz';
import { useQuery } from '@/hooks/useQuery';

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

  it('should render the correct question', () => {
    render(<Quiz />);

    const question = screen.getByText('What is the capital of France?');
    expect(question).toBeInTheDocument();
  });

  it('should render the correct answer list', () => {
    render(<Quiz />);

    const answerList = screen.getAllByText(/London|Paris|Berlin|Rome/);
    expect(answerList).toHaveLength(4);
  });

})