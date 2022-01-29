import Head from "next/head";

export default function Seo({ title }) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}

// Layout에 head를 넣는 경우
// props를 Layout에서 처리하는 방법
// const obj = { "/":"Home", "about":"About" }
// obj[router.pathname]으로 하면 props를 주지 않고 사용 가능
