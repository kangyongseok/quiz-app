import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Provider } from 'jotai';
import dayjs from 'dayjs';

import 'dayjs/locale/ko'

dayjs.locale('ko')

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}
