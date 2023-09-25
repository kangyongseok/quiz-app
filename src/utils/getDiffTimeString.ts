import type { Dayjs } from 'dayjs';

import dayjs from 'dayjs';

export function getDiffTimeString(startTime: Dayjs, endTime: Dayjs): string {
  const diff = dayjs(endTime).diff(startTime, 'second')

  const hours = Math.floor(diff / (60 * 60));
  const minutes = Math.floor((diff % (60 * 60)) / 60);
  const seconds = Math.floor(diff % 60);

  if (!hours && !minutes) return `${seconds}초`;
  if (!hours) return `${minutes}분 ${seconds}초`
  return `${hours}시간 ${minutes}분 ${seconds}초`;
}