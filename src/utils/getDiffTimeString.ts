import type { Dayjs } from 'dayjs';

import dayjs from 'dayjs';

export function getDiffTimeString(startTime: Dayjs, endTime: Dayjs): string {
  const diff = dayjs(endTime).diff(startTime, 'second');
  const hours = Math.floor(diff / 3600);
  const remainingSecondsAfterHours = diff % 3600;
  const minutes = Math.floor(remainingSecondsAfterHours / 60);
  const seconds = remainingSecondsAfterHours % 60;

  const hoursPart = hours > 0 ? `${hours}시간 ` : '';
  const minutesPart = minutes > 0 ? `${minutes}분 ` : '';
  const secondsPart = `${seconds}초`;

  return `${hoursPart}${minutesPart}${secondsPart}`;
}
