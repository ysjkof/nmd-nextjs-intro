import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <img src="/vercel.svg" />
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
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
