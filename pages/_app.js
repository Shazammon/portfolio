import '../styles/globals.css'
import NavBar from '../components/navBar'

function MyApp({ Component, pageProps }) {
  // we have to keep this Component component. it's how next.js renders pages. but we can turn it into a multiline return
  return (
    <>
      {/*  header */}
      <NavBar />
      {/*  aside */}
      <Component {...pageProps} />
      {/* footer */}
    </>
  )
}

export default MyApp
