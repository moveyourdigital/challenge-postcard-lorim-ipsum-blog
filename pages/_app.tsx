import 'tailwindcss/tailwind.css'
import '../styles/custom.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'

function App({ Component, pageProps}: AppProps) {
  return (
    <>
    <Header >
    <Component {...pageProps} />
    </Header>
    </>
  )
}
export default App
