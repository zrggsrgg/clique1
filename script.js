(function(){
  "use strict";

  /* ---------- Mobile nav ---------- */
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  if(navToggle){
    navToggle.addEventListener('click', function(){
      var open = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    mainNav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Placeholder photo generator (rose / graphite tonal family) ---------- */
  function photoSVG(colorA, colorB, emoji){
    return '<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="' + colorA + '"/>' +
      '<stop offset="100%" stop-color="' + colorB + '"/>' +
      '</linearGradient></defs>' +
      '<rect width="400" height="300" fill="url(#g)"/>' +
      '<text x="200" y="168" font-size="60" text-anchor="middle">' + emoji + '</text>' +
      '</svg>';
  }

  /* ---------- Themes mosaic (institutional preview, no filters, no categories) ---------- */
  var themesMosaic = document.getElementById('themesMosaic');
  var themePhotos = [
    ["#F3DAE1","#E6AFC0","🎈"],
    ["#EFC6D2","#DDA0B4","🧸"],
    ["#F6DEE4","#E6AFC0","🌸"],
    ["#E8B9C7","#D89AAE","🎂"],
    ["#F3DAE1","#DDA0B4","✨"],
    ["#EFC6D2","#E6AFC0","🦋"]
  ];
  if(themesMosaic){
    themePhotos.forEach(function(t){
      var el = document.createElement('div');
      el.className = 'theme-photo';
      el.innerHTML = photoSVG(t[0], t[1], t[2]);
      themesMosaic.appendChild(el);
    });
  }

  /* ---------- Gallery ---------- */

const galleryGrid = document.getElementById("galleryGrid");

const galleryItems = [
    "/img/instagram_02.jpg",
    "/img/instagram_03.jpg",
    "/img/instagram_04.jpg",
    "/img/instagram_05.jpg",
  "/img/instagram_06.jpg",
    "/img/instagram_01.jpg"
];

if (galleryGrid) {

    galleryItems.forEach(function(img){

        const item = document.createElement("div");

        item.className = "g-item";

        item.innerHTML = `<img src="${img}" alt="Festa realizada">`;

        galleryGrid.appendChild(item);

    });

}
  /* ---------- FAQ accordion ---------- */
  var faqList = document.getElementById('faqList');
  if(faqList){
    faqList.querySelectorAll('.faq-item').forEach(function(item){
      var q = item.querySelector('.faq-question');
      var a = item.querySelector('.faq-answer');
      q.addEventListener('click', function(){
        var isOpen = item.classList.contains('is-open');
        faqList.querySelectorAll('.faq-item').forEach(function(other){
          other.classList.remove('is-open');
          other.querySelector('.faq-answer').style.maxHeight = null;
        });
        if(!isOpen){
          item.classList.add('is-open');
          a.style.maxHeight = a.scrollHeight + 'px';
        }
      });
    });
  }

  /* ---------- Header shadow on scroll ---------- */
  var header = document.getElementById('header');
  window.addEventListener('scroll', function(){
    if(header) header.style.boxShadow = window.scrollY > 12 ? '0 8px 24px -18px rgba(46,42,40,.35)' : 'none';
  });

})();
