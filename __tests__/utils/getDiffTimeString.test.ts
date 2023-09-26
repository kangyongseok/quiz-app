import type { Dayjs } from 'dayjs';

import dayjs from 'dayjs';

import { getDiffTimeString } from '@/utils/getDiffTimeString';

describe('getDiffTimeString', () => {
  it('~초 리턴', () => {
    const startTime: Dayjs = dayjs('2023-09-26T12:00:00');
    const endTime: Dayjs = dayjs('2023-09-26T12:00:15');
    const diffString = getDiffTimeString(startTime, endTime);
    expect(diffString).toBe('15초');
  });

  it('~분~초 리턴', () => {
    const startTime: Dayjs = dayjs('2023-09-26T12:00:00');
    const endTime: Dayjs = dayjs('2023-09-26T12:03:45');
    const diffString = getDiffTimeString(startTime, endTime);
    expect(diffString).toBe('3분 45초');
  });

  it('~시간~분~초 리턴', () => {
    const startTime: Dayjs = dayjs('2023-09-26T12:00:00');
    const endTime: Dayjs = dayjs('2023-09-26T15:45:30');
    const diffString = getDiffTimeString(startTime, endTime);
    expect(diffString).toBe('3시간 45분 30초');
  });

  it('0초 리턴', () => {
    const startTime: Dayjs = dayjs('2023-09-26T12:00:00');
    const endTime: Dayjs = dayjs('2023-09-26T12:00:00');
    const diffString = getDiffTimeString(startTime, endTime);
    expect(diffString).toBe('0초');
  });
});
