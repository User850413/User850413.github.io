(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(e){if(e.ep)return;e.ep=!0;const l=o(e);fetch(e.href,l)}})();const h=`
      <footer class="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 항해플러스. All rights reserved.</p>
      </footer>
`;let d=!!localStorage.getItem("user");const i={setIsLoggedIn(t){d=typeof t=="boolean"?t:!d},getIsLoggedIn(){return d}};let g=null,m=null;const c=()=>{const t=()=>(g=i.getIsLoggedIn(),m=window.location.pathname,`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
      ${g?`
           <li><a id="btn-home" href="/" class=${m==="/"?"text-blue-600":"text-gray-600"}>홈</a></li>
           <li><a id="btn-profile" href="/profile" class=${m==="/profile"?"text-blue-600":"text-gray-600"}>프로필</a></li>
           <li><a id="logout" href="/" class="text-gray-600">로그아웃</a></li>`:`
            <li><a id="btn-home" href="/" class="text-blue-600">홈</a></li>
            <li><a id="btn-login" href="/login" class="text-gray-600">로그인</a></li>
            `}
      </ul>
    </nav>`),s=()=>{document.getElementById("btn-home").addEventListener("click",a=>{a.preventDefault(),r("/")});const e=document.getElementById("btn-login");e&&e.addEventListener("click",a=>{a.preventDefault(),r("/login")});const l=document.getElementById("btn-profile");l&&l.addEventListener("click",a=>{a.preventDefault(),r("/profile")})},o=document.getElementById("logout");return o&&o.addEventListener("click",n=>{n.preventDefault(),i.setIsLoggedIn(!1),localStorage.removeItem("user"),r("/")}),{template:t,action:s}},y=()=>({template:()=>`
  <div id="root">
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
      ${c().template()}
  
        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            <form id="profile-form">
              <div class="mb-4">
                <label
                  for="username"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >사용자 이름</label
                >
                <input
                  type="text"
                  id="username"
                  name="username"
                  value="홍길동"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-4">
                <label
                  for="email"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >이메일</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  value="hong@example.com"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-6">
                <label
                  for="bio"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >자기소개</label
                >
                <textarea
                  id="bio"
                  name="bio"
                  rows="4"
                  class="w-full p-2 border rounded"
                >
  안녕하세요, 항해플러스에서 열심히 공부하고 있는 홍길동입니다.</textarea
                >
              </div>
              <button
                type="submit"
                class="w-full bg-blue-600 text-white p-2 rounded font-bold"
              >
                프로필 업데이트
              </button>
            </form>
          </div>
        </main>
  
      ${h}      
      </div>
    </div>
  </div>
  `,action:()=>{if(i.getIsLoggedIn()?c().action():r("/login"),i.getIsLoggedIn()){let n=JSON.parse(localStorage.getItem("user"));document.getElementById("username").value=n.username,document.getElementById("bio").value=n.bio,document.getElementById("email").value=n.email;const e=document.getElementById("profile-form");e.addEventListener("submit",l=>{l.preventDefault();const a=new FormData(e),p=a.get("username")+"",x=a.get("email")+"",v=a.get("bio")+"";n={username:p,email:x,bio:v},localStorage.setItem("user",JSON.stringify(n))})}}}),w=()=>({template:()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <input id="username" name="username" type="text" placeholder="이메일 또는 전화번호" class="w-full p-2 border rounded">
        </div>
        <div class="mb-6">
          <input type="password" name="password" placeholder="비밀번호" class="w-full p-2 border rounded">
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`,action:()=>{const o=document.getElementById("login-form");o&&o.addEventListener("submit",n=>{n.preventDefault();const a={username:new FormData(o).get("username"),email:"",bio:""};localStorage.getItem("user")||localStorage.setItem("user",JSON.stringify(a)),i.setIsLoggedIn(!0),r("/profile")})}}),I=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,L=[{id:1,img:"https://placehold.co/40",alt:"프로필",name:"홍길동",createdAt:"5분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{id:2,img:"https://placehold.co/40",alt:"프로필",name:"김철수",createdAt:"15분 전",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{id:3,img:"https://placehold.co/40",alt:"프로필",name:"이영희",createdAt:"30분 전",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{id:4,img:"https://placehold.co/40",alt:"프로필",name:"박민수",createdAt:"1시간 전",content:"주말에 등산 가실 분 계신가요? 함께 가요!"},{id:5,img:"https://placehold.co/40",alt:"프로필",name:"정수연",createdAt:"2시간 전",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],E=(t,s,o,n,e)=>`
<div class="bg-white rounded-lg shadow p-4">
  <div class="flex items-center mb-2">
    <img src=${t} alt=${s} class="rounded-full mr-2">
    <div>
      <p class="font-bold">${o}</p>
      <p class="text-sm text-gray-500">${n}</p>
    </div>
   </div>
    <p>${e}</p>
    <div class="mt-2 flex justify-between text-gray-500">
      <button>좋아요</button>
      <button>댓글</button>
      <button>공유</button>
    </div>
</div>
`,S=()=>({template:()=>`
<div class="bg-gray-100 min-h-screen flex justify-center">
  <div class="max-w-md w-full">
    ${c().template()}
    <main class="p-4">
      <div class="mb-4 bg-white rounded-lg shadow p-4">
        <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
        <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
      </div>

      <ul class="space-y-4">
       ${L.map(o=>`<li key="${o.id}">
             ${E(o.img,o.alt,o.name,o.createdAt,o.content)}
             </li>`).join("")}
      </ul>
    </main>

    ${h}
  </div>
</div>
`,action:()=>c().action()}),b=document.querySelector("#root"),u={"/":S(),"/login":w(),"/profile":y()},f=t=>{u[t]?(b.innerHTML=u[t].template(),u[t].action()):b.innerHTML=I()},r=t=>{history.pushState({},"",t),f(t)},$=()=>{const{pathname:t}=window.location;history.state||history.replaceState({},"",t),r(t),f(t)};window.addEventListener("popstate",t=>{t.preventDefault();const{pathname:s}=location;f(s)});$();
