import { render, screen, fireEvent } from '@testing-library/react';

import QuizForm from '@/components/quizForm';

/*
제목 잘 노출 되는지
답안 목록 잘 노출 되는지
다음 버튼 활성화 비활성화 체크
viewType === note 일땐 다음 버튼 없음
답안이 선택 되었을때 맞은면 정답입니다
답안이 선택 되었을때 틀리면 틀렸습니다 노출
*/

const mockQuestion = 'What is the capital of France?';
const mockAnswerList = ['London', 'Paris', 'Berlin', 'Rome'];

const setupForm = () =>
  render(
    <QuizForm
      question={mockQuestion}
      answerList={mockAnswerList}
      answer=""
    />
  );

describe('QuizForm 의 기본동작 테스트', () => {
  it('질문이 정확히 잘 출력되어야 한다.', () => {
    setupForm();
    const question = screen.getByText(mockQuestion);
    expect(question).toBeInTheDocument();
  });

  it('답안 목록이 정확히 잘 출력되어야 한다.', () => {
    setupForm();
    const answerList = screen.getAllByText(/London|Paris|Berlin|Rome/);
    expect(answerList).toHaveLength(mockAnswerList.length);
  });

  it('답안이 선택되지 않았다면 다음버튼 비활성화', () => {
    setupForm();
    const nextButton = screen.getByText('다음');
    expect(nextButton).toBeDisabled();
  });

  it('답안이 선택되면 다음버튼 활성화', () => {
    setupForm();
    const button = screen.getByText('다음');
    const radioOption = screen.getByText('Paris');

    fireEvent.click(radioOption);

    expect(button).toBeEnabled();
  });
});

describe('QuizForm 의 동적인 상태에 따른 처리', () => {
  it('답안선택시 맞았을경우 "정답입니다." 노출', () => {
    render(
      <QuizForm
        question={mockQuestion}
        answer="London"
        answerList={mockAnswerList}
      />
    );

    const radioOption = screen.getByText('London');
    fireEvent.click(radioOption);

    expect(screen.getByText('정답입니다.')).toBeInTheDocument();
  });

  it('답안선택시 틀렸을경우 "틀렸습니다." 노출', () => {
    render(
      <QuizForm
        question={mockQuestion}
        answer="London"
        answerList={mockAnswerList}
      />
    );

    const radioOption = screen.getByText('Paris');
    fireEvent.click(radioOption);

    expect(screen.getByText('틀렸습니다.')).toBeInTheDocument();
  });

  it('viewType === note 일때 다음 버튼 노출 안됨', () => {
    render(
      <QuizForm
        question={mockQuestion}
        answer="London"
        answerList={mockAnswerList}
        viewType="note"
      />
    );

    expect(screen.queryByText('다음')).toBeNull();
  });
});
