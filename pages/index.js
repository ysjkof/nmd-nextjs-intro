import { useEffect, useState } from "react";
import Seo from "../components/Seo";

// const API_KEY = "10923b261ba94d897ac6b81148314a3f";

export default function Home({ results }) {
  const [movies, setMovies] = useState();
  // useEffect(() => {
  //   (async () => {
  // 이 경우 api_key가 노출된다.
  // const { results } = await (
  //   await fetch(
  //     `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  //   )
  // ).json();
  //     const { results } = await (await fetch(`/api/movies`)).json();
  //     setMovies(results);
  //   })();
  // }, []);
  return (
    <div className="container">
      <Seo title="Home" />
      {/* {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => ( */}
      {!results && <h4>Loading...</h4>}
      {results?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// Server Side Rendering
// 이 코드는 서버에서만 돌아간다.
// getServerSideProps의 이름은 바뀌면 안된다.
// 이 펑션은 Object를 리턴하고 object는 props를 갖고 그 안에는 아무 값이나 넣을 수 있다.
// 반환하는 프롭스는 _app의 pageProps로 간다.
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return { props: { results } };
}
