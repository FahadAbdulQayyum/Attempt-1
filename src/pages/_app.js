import '@/styles/globals.css'
import Navbar from '../components/navbar'
// import GlobalState from '@/components/global/GlobalState'

import { Provider } from 'react-redux';
import store from '../features/store';

export default function App({ Component, pageProps }) {

  // const { products } = useContext(Context)

  // return <Component {...pageProps} />
  return <>
    {/* <GlobalState> */}

    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>

    {/* </GlobalState > */}
  </>
}
