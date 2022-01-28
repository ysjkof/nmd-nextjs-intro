import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  console.log("⚠️ :", router);
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}

// ~.module.css파일을 가져야 하고, 클래스 이름을 기억 해야 되서 별로다. 조건문에서 구현하기 복잡하다.
{
  /* <div>
  클래스네임을 합치기 위한 첫 번째 방법
  <a
    className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}
  >
    Home
  </a>
  클래스네임을 합치기 위한 두 번째 방법
  <a
    className={[
      styles.link,
      router.pathname === "/about" ? styles.active : "",
    ].join(" ")}
  >
    About
  </a>
</div>; */
}
