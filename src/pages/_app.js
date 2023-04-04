import '@/styles/globals.css'
import { Roboto } from '@next/font/google'
import { ThemeProvider } from 'next-themes'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['500', '400', '100'],
})

export default function App({ Component, pageProps }) {
  return (
      <div className={`${roboto.variable}`}>
        <Component {...pageProps} />
      </div>
  );
}
