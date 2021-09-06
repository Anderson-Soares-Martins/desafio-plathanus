import '../css/style.css'
import '../css/form.css'
import Head from 'next/head'
import Menu from '../components/Menu'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Desafio Plathanus</title>
      </Head>

      <div>
        <Menu />
        <img
          id="title"
          src="https://www.plathanus.com.br/images/logo_horizontal.svg"
          alt="Plathanus logo"
        />
      </div>
      <div className="grid wrapper">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
