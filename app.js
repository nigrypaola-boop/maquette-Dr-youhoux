document.querySelectorAll('[data-tabs]').forEach(function(root){
  var btns=[].slice.call(root.querySelectorAll('.tabs button')),ind=root.querySelector('.tabs .ind');
  function sel(b){btns.forEach(function(x){var on=x===b;x.setAttribute('aria-selected',on);root.querySelector('#'+x.dataset.p).classList.toggle('on',on)});ind.style.width=b.offsetWidth+'px';ind.style.transform='translateX('+(b.offsetLeft-4)+'px)'}
  btns.forEach(function(b){b.addEventListener('click',function(){sel(b)})});sel(btns[0]);
});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
