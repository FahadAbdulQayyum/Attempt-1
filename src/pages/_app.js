import '@/styles/globals.css'
import Navbar from '../components/navbar'
import GlobalState from '@/components/global/GlobalState'

export default function App({ Component, pageProps }) {

  // const { products } = useContext(Context)

  // return <Component {...pageProps} />
  return <>
    <GlobalState>
      <Navbar />
      <Component {...pageProps} />
    </GlobalState>
  </>
}
