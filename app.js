document.querySelectorAll('[data-tabs]').forEach(function(root){
  var btns=[].slice.call(root.querySelectorAll('.tabs button')),ind=root.querySelector('.tabs .ind');
  function sel(b){btns.forEach(function(x){var on=x===b;x.setAttribute('aria-selected',on);root.querySelector('#'+x.dataset.p).classList.toggle('on',on)});ind.style.width=b.offsetWidth+'px';ind.style.transform='translateX('+(b.offsetLeft-4)+'px)'}
  btns.forEach(function(b){b.addEventListener('click',function(){sel(b)})});sel(btns[0]);
});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
(function(){var b=document.querySelector('.burger');if(!b)return;
function set(o){document.body.classList.toggle('menu-open',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Fermer le menu':'Ouvrir le menu')}
b.addEventListener('click',function(){set(!document.body.classList.contains('menu-open'))});
document.querySelectorAll('.nav a').forEach(function(a){a.addEventListener('click',function(){set(false)})});
document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});})();
(function(){var s=document.querySelector('.lp-sticky');if(!s)return;var h=document.querySelector('.lp-hero'),r=document.getElementById('rdv');
function u(){var y=window.scrollY,past=h&&y>h.offsetHeight,atR=r&&r.getBoundingClientRect().top<window.innerHeight;s.classList.toggle('show',past&&!atR)}
window.addEventListener('scroll',u,{passive:true});u();})();
(function(){var d=document.querySelector('.lightbox');if(!d||!d.showModal)return;var im=d.querySelector('img');
document.querySelectorAll('.shot .zoom').forEach(function(b){b.addEventListener('click',function(){var i=b.querySelector('img');im.src=i.currentSrc||i.src;im.alt=i.alt;d.showModal()})});
d.addEventListener('click',function(e){if(e.target===d||e.target.classList.contains('lb-close'))d.close()});})();
