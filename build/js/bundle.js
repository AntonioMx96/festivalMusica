document.addEventListener("DOMContentLoaded",()=>{scrollNav(),navegacionFija()});const scrollNav=()=>{document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})})})},navegacionFija=()=>{const e=document.querySelector(".header");new IntersectionObserver(t=>{t[0].isIntersecting?e.classList.remove("fijo"):e.classList.add("fijo")}).observe(document.querySelector(".sobre-festival"))};document.addEventListener("DOMContentLoaded",()=>{crearGaleria()});const crearGaleria=()=>{const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const a=document.createElement("IMG");a.src=`build/img/thumb/${t}.webp`,a.dataset.imagenId=t,a.onclick=mostrarImagen;const n=document.createElement("LI");n.appendChild(a),e.appendChild(n)}},mostrarImagen=e=>{const t=parseInt(e.target.dataset.imagenId),a=document.createElement("img");a.src=`build/img/grande/${t}.webp`;const n=document.createElement("div");n.appendChild(a),n.classList.add("overlay");const o=document.createElement("p");o.textContent="X",o.classList.add("btn-cerrar"),n.onclick=()=>{n.remove(),r.classList.remove("fijar-body")},o.onclick=()=>{n.remove(),r.classList.remove("fijar-body")},n.appendChild(o);const r=document.querySelector("body");r.appendChild(n),r.classList.add("fijar-body")};
//# sourceMappingURL=bundle.js.map
