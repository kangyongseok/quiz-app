```bash
yarn install 
yarn dev
```

## 구현에 사용된 스택
- `Next.js (page route)`
- `Typescript`
- 스타일: `TailwindCSS`
- 상태관리: `Jotai`
- 차트구현: `Chart.js`
- 날짜 관련: `Day.js`
- 테스트도구: `React Testing Library`

## 퀴즈 과제
**필수구현**
- [x] 사용자는 '퀴즈 풀기' 버튼을 클릭하여 퀴즈 풀기를 시작할 수 있다.
- [x] 사용자는 문항에 대한 답안을 4개 보기 중에 선택할 수 있다.
- [x] 사용자는 답안을 선택하면 다음 문항을 볼 수 있다.
  - [x] 답안 선택 후 다음 문항 버튼을 볼 수 있다.
  - [x] 답안이 맞았는지 틀렸는지 바로 알 수 있다.
  - [x] 다음 문항 버튼을 클릭하여 다음 문항으로 이동할 수 있다.
- [ x 모든 문항을 다 풀면 사용자는 다음과 같은 결과 정보를 볼 수 있다.
  - [x] 퀴즈를 마칠 때까지 소요된 시간
  - [x] 정답 개수
  - [x] 오답 수
  - [x] 정 오답에 대한 비율을 차트로 표기
- [x] 오답 노트 기능


## 테스트코드 대상 선정 이유
- /pages/Quiz
- /components/QuizForm
- /utils

### Quiz
- 퀴즈는 비즈니스로직을 담당하고 있습니다.  
- 폼에 넘겨줄 데이터를 가공하고 추가 퀴즈가 있는지 판단하고 다음질문으로 넘길지 결과 페이지로 넘길지 판단합니다.  
- 답안 목록을 보여주어야 하는데 목록전체가 한 데이터안에 포함되어 있지 않아 목록을 병합하여 폼에 뿌려주어야 합니다.  
- 이러한 로직이 포함되어 있기 때문에 테스트대상으로 선정하였습니다.

### QuizForm
- QuizForm 은 UI 를 담당하고 있습니다.
- 분기에 따라 보여줄요소와 가릴 요소들이 있기때문에
- 이러한 요구 사항들이 적절하게 반영되는지 테스트되어야 합니다.

### utils
여러 곳에서 사용되는 유틸 함수들은 리팩토링이나 추가 변경사항 등으로 인해 언제든지 오염되고 변경될 수 있는 함수들입니다. 때문에 적절한 테스트 코드작성으로 함수의 사용처와 의도를 명확하게 보여줄 필요가 있습니다.

