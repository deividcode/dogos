(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const g of n.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&i(g)}).observe(document,{childList:!0,subtree:!0});function u(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=u(e);fetch(e.href,n)}})();let m=document.querySelector(".dogslist"),l=document.querySelector(".prev-page"),c=document.querySelector(".next-page"),p=document.querySelector(".page-number"),r,d,a=0,o=15,L=["Laica","Niebla","Perla","Chucho","Lucky","Dana","Jacky","Noa","Toby","Chula","Rocky","Luna","Kira","Bimba","Gala"],v=["friendly","nice","introverted","motivating","generous","active","shy","energetic","laid back","rebellious","loyal","motivating","generous","active","friendly"],h=[];document.addEventListener("DOMContentLoaded",function(){d=f(50),b(`https://dog.ceo/api/breeds/image/random/${d}`),l.addEventListener("click",function(){y("resta")}),c.addEventListener("click",function(){y("suma")})});function b(s){fetch(s).then(t=>t.json()).then(function(t){let u=t.message;for(let i=0;i<u.length;i++)h.push({name:L[f(15)],personality:[v[f(15)],v[f(15)]],image:u[i]});console.log(h),y()})}let f=s=>Math.floor(Math.random()*s);function x(s){s=="suma"?(a+=15,o+=15,r++,p.textContent=String(r)):s=="resta"&&(a-=15,o-=15,r--,p.textContent=String(r)),a!=0?(l.classList.remove("hidden"),l.classList.add("block")):a==0&&(l.classList.remove("block"),l.classList.add("hidden")),d>a&&d<o?(c.classList.remove("block"),c.classList.add("hidden")):o%15==0&&o<=d&&(c.classList.remove("hidden"),c.classList.add("block")),r=Number(p.textContent)}function y(s){x(s),k(),h.slice(a,o).forEach(t=>{m.insertAdjacentHTML("afterbegin",`
                
            <div class="max-w-[195px] h-auto pb-1.5 whitespace-normal drop-shadow-md transition duration-200 hover:cursor-pointer lg:hover:scale-[1.04]" style="max-width: 180px;">

                <img class="rounded-lg h-[260px]" src='${t.image}' alt='${t.name}'>

                <div class="mt-2 px-1 grid gap-2">
                    <span class="font-fredoka text-lg tracking-wide">${t.name}</span>                                  
                    <span class="text-sm text-slate-500 leading-8">Personality: <span class="etiquetas"><span class="card-tag">${t.personality[0]}</span><span class="card-tag">${t.personality[1]}</span></span></span>
                </div>

            </div>         
        
        `)})}function k(){for(;m.firstChild;)m.removeChild(m.firstChild)}
