<div align="center">
   <img src="https://github.com/fefdfea1/officeFinder_Front/assets/46808357/111bffea-89e6-4b5c-8dbd-2c26088d774b" />
   <br>
### Team: 도깨비들
   </div>
   <div align="center"><a href="https://www.notion.so/Pre-5cd11aff61c84b579a53126522e2a6d4" style="font-weight:bold;">Documentation</a>
   </div>
   <br>
   <p align="center">:point_up_2: OfficeFinder 기획 블로그로 이동 
   </p>

- 개발기간: 2023.08.07 ~ 2023.09.15
- 개발인원 : 7인( 프론트 3명 + 백엔드 4명 )
- 배포주소: https://office-finder-front-3lnwd2i09-fefdfea1.vercel.app/
   <hr  style="color:#9999;">
   <br>

## STACKS

#### 주요 스택

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white">
<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo&logoColor=white">

#### 모든 라이브러리

   <details>
   <summary>전체 라이브러리 보기</summary>
      <ul>
         <li>chart.js: 차트 생성 라이브러리</li>
         <li>daisyui: Bootstrep과 같은 css 라이브러리</li>
         <li>date-fns: 생성한 날짜를 다른 형식으로 포멧하기위한 라이브러리</li>
         <li>event-source-polyfill: IE또한 지원하는 SSE 연결 라이브러리</li>
         <li>postcss: css의 호환성을 챙길 수 있는 라이브러리</li>
         <li>react-cookie: 리엑트에서 쿠키를 사용하기 위한 라이브러리</li>
         <li>react-daum-postcode: 간편하게 daum 우편번호 검색 서비스를 이용 할 수 있도록 해주는 라이브러리</li>
         <li>react-day-picker: 리엑트에서 캘린더를 쉽게 구현하게 해주는 라이브러리</li>
         <li>react-query: fetching, caching, 서버 데이터와의 동기화를 지원해주는 라이브러리</li>
         <li>react-icons: 리엑트에서 다양한 아이콘을 사용 할 수 있도록 지원하는 라이브러리</li>
         <li>react-slick: 리엑트에서 carousel을 간단하게 구현할 수 있도록 해주는 라이브러리</li>
         <li>react-router-dom: 리엑트의 라우팅 처리를 간단하게 해주는 라이브러리</li>
         <li>sockjs-client: websocket과 비슷하지만 전반적인 성능 상승, 크로스 브라우징을 지원하는 라이브러리</li>
         <li>stompjs: sockjs-client와 함께 사용되는 라이브러리로 구독, 메세지 전송, 연결등에 사용되는 라이브러리</li>
         <li>vite-plugin-html: vite 환경 index.html에서 환경변수를 사용하기 위한 라이브러리</li>
         <li>eslint: 코딩컨벤션을 일정하게 맞추기 위한 라이브러리</li>
         <li>prettier: 텍스트 작성의 통일성을 위한 라이브러리</li>
         <li>typescript: 추후 생길 수 있는 타입에 관한 오류를 개발단계에서 방지 할 수 있는 라이브러리</li>
      </ul>
   </details>
   
## 프로젝트 설명
### 프로젝트 제작의 동기
- 2010년대 중 후반부터 여러 빌딩에 공실율을 줄이기 위한 방법 중 하나로 빌딩 내부 공간 공유 스페이스를 제외하고 공간을 나누어 특정 기간 만큼 여러 사람에게 임대하는 공유 오피스가 떠오르기 시작했습니다. 최근에는 COVID-19로 인한 대침체로 인해 수요가 주춤하는 상황이나 공실율을 줄이기 위한 방식 중에서는 매력적인 방식이라고 생각했습니다.
- 이러한 공유 오피스를 여러 가지 조건에 따라 찾고, 임대 기간을 지정하고 결제까지 하나의 시스템에서 수행하면 매우 편리하게 공유 오피스를 사용할 수 있게 되고, 접근성을 개선함으로서 공유 플렛폼의 수요를 더 올릴 수 있지 않을까 라는 생각을 하게 되었고, 이것이 곧 저희의 프로젝트 명인 오피스파인더를 기획하게 된 계기가 되었습니다.
### 프로젝트의 주요 기능
#### :star: SSE와 Web Socket을 이용한 채팅 및 실시간 알림을 받아보세요!
- Web Socket을 이용한 채팅 기능으로 궁금한점이 있을때는 임차인에게 바로 물어볼 수 있습니다.
- SSE를 이용한 실시간 알림기능으로 인해 임대, 임차가 되는순간 알림으로 받을 수 있습니다.
#### :star: PWA를 이용한 웹앱 제작
- 프로젝트의 특성상 PC보다는 모바일에서 많이 사용할 것으로 예상하여 PWA를 적용한 웹앱으로 제작하여 모바일에서도 앱으로 사용할 수 있습니다.
#### :star: 사용하였던 공유 오피스에 대한 별점을 남기세요!
- OfficeFinder는 사용하였던 공유 오피스에 한하여 리뷰를 남길 수 있습니다. 공유 오피스를 이용하고 리뷰를 남겨보세요
<br>

# 다운로드

- Node.js 18.16.0

<code>
   $ git clone https://github.com/fefdfea1/officeFinder_Front.git`<br>
   $ cd officeFinder_Front<br>
   $ yarn add<br>
   $ npm run dev
</code>
