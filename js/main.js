(function(){
const C=window.CHARACTERS||[],F=window.FRIENDS||[],page=document.body.dataset.page;
const e=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const card=(x,href,sub)=>`<a class="card" href="${href}"><div class="frame"><img src="${e(x.image)}" alt="${e(x.name)}" loading="lazy"></div><h3>${e(x.name)}</h3><p>${e(sub)}</p></a>`;
const cg=document.getElementById('char-grid'),fg=document.getElementById('friend-grid');
if(cg)cg.innerHTML=C.map(c=>card(c,'character.html?id='+encodeURIComponent(c.id),c.title)).join('');
if(fg)fg.innerHTML=F.length?F.map(f=>card(f,'friend.html?id='+encodeURIComponent(f.id),f.title)).join(''):'<p>No friends yet.</p>';
const d=document.getElementById('detail');
if(d){const list=page==='character'?C:F,id=new URLSearchParams(location.search).get('id'),i=Math.max(0,list.findIndex(x=>x.id===id)),x=list[i];
 if(!x){d.innerHTML='<p class="center">Nothing found in the static.</p>';return;}
 document.title=x.name+' — Static Hollow';
 const base=page==='character'?'character.html?id=':'friend.html?id=',prev=list[(i-1+list.length)%list.length],next=list[(i+1)%list.length];
 const ps=a=>(a||[]).filter(Boolean).map(p=>`<p>${e(p)}</p>`).join('');
 d.innerHTML=`<section class="panel intro"><img src="${e(x.image)}" alt="${e(x.name)}" data-full="${e(x.image)}">
 <div><h1 class="glitch" data-text="${e((x.fullName||x.name).toUpperCase())}">${e((x.fullName||x.name).toUpperCase())}</h1>
 ${x.species?`<p class="meta">${e(x.species)}</p>`:''}<p class="meta"><b>${e(x.title)}</b></p>
 ${x.note?`<p class="note">${e(x.note)}</p>`:''}<div class="lore">${ps([x.intro||x.bio])}</div>
 ${(x.links||[]).length?`<div class="links">${x.links.map(l=>`<a class="btn" href="${e(l.url)}" target="_blank" rel="noopener">${e(l.label)}</a>`).join('')}</div>`:''}</div></section>
 ${(x.lore||[]).filter(Boolean).length?`<section class="panel lore"><h2>LORE</h2>${ps(x.lore)}</section>`:''}
 ${(x.gallery||[]).length?`<section class="panel"><h2>GALLERY</h2><div class="gallery">${x.gallery.map(g=>`<img src="${e(g)}" data-full="${e(g)}" alt="${e(x.name)} artwork" loading="lazy">`).join('')}</div></section>`:''}
 <nav class="pager"><a class="btn" href="${base+prev.id}">← ${e(prev.name)}</a><a class="btn" href="index.html">Home</a><a class="btn" href="${base+next.id}">${e(next.name)} →</a></nav>`;}
const lb=document.getElementById('lb');if(lb){const im=lb.querySelector('img'),close=()=>lb.hidden=true;
 document.addEventListener('click',ev=>{const t=ev.target.closest('[data-full]');if(t){im.src=t.dataset.full;im.alt=t.alt;lb.hidden=false;}else if(!lb.hidden&&ev.target!==im)close();});
 document.addEventListener('keydown',ev=>{if(ev.key==='Escape')close();});}
})();
