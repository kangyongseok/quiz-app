import { shuffle } from '@/utils/shuffle';

describe('shuffle', () => {
  it('원래 배열과 비교하여 셔플 되었는지 확인', () => {
    const originalArray = [1, 2, 3, 4, 5];

    const shuffledArray = shuffle(originalArray);

    expect(shuffledArray).toHaveLength(originalArray.length);

    expect(shuffledArray).not.toEqual(originalArray);

    originalArray.forEach((element) => {
      expect(shuffledArray).toContain(element);
    });
  });

  it('셔플된 배열에 원래 배열의 모든 요소가 포함되어있는지 확인', () => {
    const originalArray: number[] = [];

    const shuffledArray = shuffle(originalArray);

    expect(shuffledArray).toHaveLength(0);
  });

  it('배열 또는 값이 하나뿐인 배열같은경우 처리되는지 확인', () => {
    const originalArray = [42];

    const shuffledArray = shuffle(originalArray);

    expect(shuffledArray).toHaveLength(1);
    expect(shuffledArray).toEqual(originalArray);
  });
});
