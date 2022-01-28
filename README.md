# NestJS Introduction

pages에서 페이지는 export default로 해야 작동한다
pages의 파일명이 url이다
index.js는 예외적으로 파일명이 url이 아니고 "/"로 간다

## Next hydration

첫 로딩 시 ssr을 보내줌. 그리고 js가 로딩되면 react를 초기에 보낸 ssr 내용과 연결시켜 반응할 수 있게 연결해줌.
