import Layout from "../components/Layout";
// 페이지에서는 모듈css만 import할 수 있다.
// _app에서만 아래처럼 글로벌 css를 import할 수 있다.
import "../styles/globals.css";

export default function anyNameApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
