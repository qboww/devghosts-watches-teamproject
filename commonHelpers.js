import"./assets/main-41fde29e.js";document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("sort-select"),d=document.getElementById("sort-order-select"),m=document.getElementById("search-input"),u=document.getElementById("min-price-input"),i=document.getElementById("prev-page"),l=document.getElementById("next-page"),h=document.getElementById("current-page"),n=document.querySelector('.nav-link-studio[href="./index.html"]'),t=document.querySelector('.nav-link[href="./catalog-interactive.html"]');n.classList.remove("nav-link-studio"),t.classList.add("nav-link-studio");let a=1;const g=6;let p=0,o=0;i.disabled=!0;function e(){const c=r.value,L=d.value,I=m.value.trim(),C=u.value.trim();v(c,L,I,C,a,g)}function s(){a>1&&(a--,f(),e()),a===1&&(i.disabled=!0),l.disabled=!1}function E(){a<o&&(a++,f(),e()),a===o&&(l.disabled=!0),i.disabled=!1}function f(){h.textContent=`Page ${a}`}r.addEventListener("change",e),d.addEventListener("change",e),m.addEventListener("input",e),u.addEventListener("input",e),i.addEventListener("click",s),l.addEventListener("click",E),fetch("./data/watches.json").then(c=>c.json()).then(c=>{p=c.length,o=Math.ceil(p/g),f(),v("name","asc","","",a,g)}).catch(c=>console.error("Error loading JSON:",c))});function v(r,d,m,u,i,l){function h(n){const t=document.createElement("li");return t.classList.add("catalog-list-item"),t.innerHTML=`
          <img src="${n.image}" alt="${n.name}">
          <h3 class="catalog-title">${n.name}</h3>
          <p class="catalog-text"><span>€</span>${n.price}</p>
        `,t}fetch("./data/watches.json").then(n=>n.json()).then(n=>{let t=n;m&&(t=t.filter(e=>e.name.toLowerCase().includes(m.toLowerCase()))),u&&(t=t.filter(e=>parseFloat(e.price)>=parseFloat(u))),r==="name"?t.sort((e,s)=>d==="asc"?e.name.localeCompare(s.name):s.name.localeCompare(e.name)):r==="price"&&t.sort((e,s)=>d==="asc"?parseFloat(e.price)-parseFloat(s.price):parseFloat(s.price)-parseFloat(e.price));const a=(i-1)*l,g=a+l,p=t.slice(a,g),o=document.getElementById("catalog-list");if(o.innerHTML="",p.length===0){const e=document.createElement("p");e.classList.add("no-items-found"),e.textContent="No items found.",o.appendChild(e)}else p.forEach(e=>{o.appendChild(h(e))})}).catch(n=>console.error("Error loading JSON:",n))}
//# sourceMappingURL=commonHelpers.js.map
