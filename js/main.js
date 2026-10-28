(function(){
const C=window.CHARACTERS||[],page=document.body.dataset.page;
const e=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const card=(x,href,sub)=>`<a class="card" href="${href}"><div class="frame"><img src="${e(x.image)}" alt="${e(x.name)}" loading="lazy"></div><h3>${e(x.name)}</h3><p>${e(sub)}</p></a>`;
const cg=document.getElementById('char-grid');
if(cg){const q=document.getElementById('q'),cnt=document.getElementById('count'),em=document.getElementById('empty');
 const draw=()=>{const t=(q.value||'').trim().toLowerCase(),l=C.filter(c=>[c.name,c.fullName,c.title].join(' ').toLowerCase().includes(t));
  cg.innerHTML=l.map(c=>card(c,'character.html?id='+encodeURIComponent(c.id),c.title+(c.owner?' · by '+c.owner:''))).join('');em.hidden=l.length>0;cnt.textContent=l.length+' / '+C.length;};
 q.addEventListener('input',draw);draw();}
const d=document.getElementById('detail');
if(d){const list=C,id=new URLSearchParams(location.search).get('id'),i=Math.max(0,list.findIndex(x=>x.id===id)),x=list[i];
 if(!x){d.innerHTML='<p class="center">Nothing found in the static.</p>';return;}
 document.title=x.name+' — Static Hollow';
 const base='character.html?id=',prev=list[(i-1+list.length)%list.length],next=list[(i+1)%list.length];
 const ps=a=>(a||[]).filter(Boolean).map(p=>`<p>${e(p)}</p>`).join('');
 d.innerHTML=`<section class="panel intro"><img src="${e(x.image)}" alt="${e(x.name)}" data-full="${e(x.image)}">
 <div><h1 class="glitch" data-text="${e((x.fullName||x.name).toUpperCase())}">${e((x.fullName||x.name).toUpperCase())}</h1>
 ${x.species?`<p class="meta">${e(x.species)}</p>`:''}<p class="meta"><b>${e(x.title)}</b></p>
 ${x.owner?`<p class="meta">Player: <b>${e(x.owner)}</b></p>`:''}${x.note?`<p class="note">${e(x.note)}</p>`:''}<div class="lore">${ps([x.intro])}</div>
 ${(x.links||[]).length?`<div class="links">${x.links.map(l=>`<a class="btn" href="${e(l.url)}" target="_blank" rel="noopener">${e(l.label)}</a>`).join('')}</div>`:''}</div></section>
 ${(x.lore||[]).filter(Boolean).length?`<section class="panel lore"><h2>LORE</h2>${ps(x.lore)}</section>`:''}
 <section class="panel"><h2>REFERENCE IMAGES</h2><div class="gallery">${(x.references||[]).map(g=>`<img src="${e(g)}" data-full="${e(g)}" alt="${e(x.name)} reference" loading="lazy">`).join('')}${Array.from({length:Math.max(0,3-(x.references||[]).length)},()=>'<div class="slot">Reference slot<br><small>add to data/characters.js</small></div>').join('')}</div></section>
 <nav class="pager"><a class="btn" href="${base+prev.id}">← ${e(prev.name)}</a><a class="btn" href="index.html">Home</a><a class="btn" href="${base+next.id}">${e(next.name)} →</a></nav>`;}
const lb=document.getElementById('lb');if(lb){const im=lb.querySelector('img'),close=()=>lb.hidden=true;
 document.addEventListener('click',ev=>{const t=ev.target.closest('[data-full]');if(t){im.src=t.dataset.full;im.alt=t.alt;lb.hidden=false;}else if(!lb.hidden&&ev.target!==im)close();});
 document.addEventListener('keydown',ev=>{if(ev.key==='Escape')close();});}
})();

(function(){const cv=document.getElementById('sparks');if(!cv||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
const x=cv.getContext('2d'),N=innerWidth<700?28:60;let w,h,P=[],run=true;
const rs=()=>{const d=Math.min(devicePixelRatio||1,2);w=cv.offsetWidth;h=cv.offsetHeight;cv.width=w*d;cv.height=h*d;x.setTransform(d,0,0,d,0,0)};
const mk=()=>({x:Math.random()*w,y:h+Math.random()*h*.5,r:Math.random()*1.8+.4,v:Math.random()*.5+.15,s:Math.random()*.6-.3,a:Math.random()*.6+.3,t:Math.random()*6});
rs();addEventListener('resize',rs);for(let i=0;i<N;i++){const p=mk();p.y=Math.random()*h;P.push(p)}
new IntersectionObserver(e=>{run=e[0].isIntersecting;if(run)requestAnimationFrame(f)}).observe(cv);
function f(){if(!run||document.hidden){if(run)setTimeout(()=>requestAnimationFrame(f),300);return}x.clearRect(0,0,w,h);
for(const p of P){p.y-=p.v;p.t+=.03;p.x+=p.s+Math.sin(p.t)*.25;if(p.y<-10)Object.assign(p,mk());
const a=p.a*(.6+.4*Math.sin(p.t*3));x.fillStyle=`rgba(250,116,0,${a})`;x.shadowColor='#FA7400';x.shadowBlur=8;x.beginPath();x.arc(p.x,p.y,p.r,0,7);x.fill();
if(p.r>1.9){x.fillRect(p.x-p.r*3,p.y-.3,p.r*6,.6);x.fillRect(p.x-.3,p.y-p.r*3,.6,p.r*6)}}
requestAnimationFrame(f)}requestAnimationFrame(f)})();
