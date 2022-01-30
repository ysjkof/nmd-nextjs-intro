const API_KEY = process.env.API_KEY;
// API_KEY=10923b261ba94d897ac6b81148314a3f

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // source로 접속하면 destination으로 redirection한다
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        // 검색엔진, 브라우저가 이걸 기억하는지 결정
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};
