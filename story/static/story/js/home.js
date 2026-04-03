const titleEl = document.getElementById("active-title");
const descEl = document.getElementById("active-description");
const bgBlurEl = document.getElementById("global-bg-blur");
const isMobile = window.innerWidth < 768;

const swiper = new Swiper(".mySwiper", {
    effect: isMobile ? "slide" : "cards", 
    slidesPerView: isMobile ? 1.2 : 1,    
    centeredSlides: isMobile ? true : false,
    spaceBetween: isMobile ? 20 : 0,

    grabCursor: true,
    speed: isMobile ? 600 : 300,
    loop: isMobile,             
    rewind: !isMobile,           

    autoplay: {
        delay: 4500,
        disableOnInteraction: false 
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    on: {
        init: function () {
            syncBanner(this);
        },
        slideChange: function () {
            syncBanner(this);
        },
    },
});

function syncBanner(s) {
    const slide = s.slides[s.activeIndex];
    if (!slide) return;

    const data = slide.dataset;
    const img = slide.querySelector("img");
    if (!img) return;

    const imgPath = img.src;

    if (typeof bgBlurEl !== 'undefined') {
        bgBlurEl.style.backgroundImage = `url('${imgPath}')`;
    }

    if (typeof titleEl !== 'undefined') titleEl.textContent = data.title;
    if (typeof descEl !== 'undefined') descEl.textContent = data.desc;

    const url = data.url;
    const titleLink = document.getElementById("active-title-link");
    const readMoreLink = document.getElementById("active-readmore-link");

    if (titleLink) titleLink.href = url;
    if (readMoreLink) readMoreLink.href = url;
}


 function toggleMobileSearch() {
        const bar = document.getElementById('mobile-search-bar');
        const input = document.getElementById('mobile-search-input');
        const isOpen = bar.style.maxHeight !== '0px' && bar.style.maxHeight !== '';

        if (isOpen) {
          bar.style.maxHeight = '0px';
        } else {
          bar.style.maxHeight = bar.scrollHeight + 'px';
          setTimeout(() => input.focus(), 300);
        }
      }

      document.addEventListener('click', function(e) {
        const bar = document.getElementById('mobile-search-bar');
        const btn = document.getElementById('mobile-search-btn');
        if (bar && btn && !bar.contains(e.target) && !btn.contains(e.target)) {
          bar.style.maxHeight = '0px';
        }
      });