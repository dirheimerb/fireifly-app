import type {AppProps} from 'next/app'
import IndexPage from '../components/Head'

function App({pageProps}:AppProps) {
    return (
        <div>
            <IndexPage />
            {...pageProps}
        </div>
    )
}

export default App