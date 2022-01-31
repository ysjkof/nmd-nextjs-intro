import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params;
  // const [title, id] = router.query.params;
  // return <div>{router.query.title || "Loading..."}</div>;
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: { params },
  };
}
// export function getServerSideProps(ctx) {
//   console.log("⚠️ ctx :", ctx);
//   return {
//     props: {},
//   };
// }
