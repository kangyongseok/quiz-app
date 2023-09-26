import Link from 'next/link';
import { Inter } from 'next/font/google';

import { useSetAtom } from 'jotai';
import dayjs from 'dayjs';

import { startTimeAtom } from '@/jotai/quiz';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const setStartTime = useSetAtom(startTimeAtom);

  const handleClick = () => {
    setStartTime(dayjs());
  };

  return (
    <div className={`flex_screen_center ${inter.className}`}>
      <Link href="/quiz">
        <button
          className="default_button"
          onClick={handleClick}
        >
          퀴즈 풀기
        </button>
      </Link>
    </div>
  );
}
