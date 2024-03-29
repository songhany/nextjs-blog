// load global CSS files, global CSS affects all elements on the page.  https://nextjs.org/learn/basics/assets-metadata-css/global-styles
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}