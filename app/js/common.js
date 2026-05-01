document.addEventListener('DOMContentLoaded', function () {
  //mob meny  
  let headerMobMeny = document.querySelector('.header-mob-meny');
  let headerMobMenyButton = document.querySelector('.site-header__burger');
  if (headerMobMenyButton) {
    headerMobMenyButton.addEventListener('click', function () {
      headerMobMeny.classList.toggle('active');
      headerMobMenyButton.classList.toggle('active');
    });
  }


  var siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    var scrollOpaqueThreshold = 50;
    function updateSiteHeaderScrollState() {
      if (window.scrollY > scrollOpaqueThreshold) {
        siteHeader.classList.add('site-header--scrolled');
      } else {
        siteHeader.classList.remove('site-header--scrolled');
      }
    }
    window.addEventListener('scroll', updateSiteHeaderScrollState, { passive: true });
    updateSiteHeaderScrollState();
  }

  var heroVideo = document.querySelector('.hero__video');
  var heroVideoBg = document.querySelector('.hero__video-bg');
  if (heroVideo && heroVideoBg) {
    function hideHeroVideoLayer() {
      heroVideoBg.classList.add('hero__video-bg--hidden');
    }
    heroVideo.addEventListener('error', hideHeroVideoLayer);
    try {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        heroVideo.removeAttribute('autoplay');
        heroVideo.pause();
        hideHeroVideoLayer();
      } else if (typeof heroVideo.play === 'function') {
        heroVideo.play().catch(hideHeroVideoLayer);
      }
    } catch (e) {}
  }

  var testimonialsRoot = document.querySelector('.testimonials__swiper');
  if (testimonialsRoot && typeof Swiper !== 'undefined') {
    new Swiper(testimonialsRoot, {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 500,
      loop: false,
      centeredSlides: true,
      watchOverflow: true,
      navigation: {
        nextEl: '.testimonials__nav--next',
        prevEl: '.testimonials__nav--prev',
      },
      pagination: {
        el: '.testimonials__pagination',
        clickable: true,
      },
    });
  }

  var ourThinkingCards = document.querySelector('.our-thinking__cards');
  if (ourThinkingCards && typeof Swiper !== 'undefined') {
    new Swiper(ourThinkingCards, {
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 450,
      loop: false,
      watchOverflow: true,
      breakpoints: {
        761: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1221: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      pagination: {
        el: '.our-thinking__pagination',
        clickable: true,
      },
    });
  }

  var caseStudiesGrid = document.querySelector('.case-studies__grid');
  if (caseStudiesGrid && typeof Swiper !== 'undefined') {
    new Swiper(caseStudiesGrid, {
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 450,
      loop: false,
      watchOverflow: true,
      breakpoints: {
        761: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1221: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      pagination: {
        el: '.case-studies__pagination',
        clickable: true,
      },
    });
  }

  var perspectiveFeaturedRoot = document.querySelector('.perspective-featured');
  if (perspectiveFeaturedRoot && typeof Swiper !== 'undefined') {
    var perspectiveSwiperEl = perspectiveFeaturedRoot.querySelector('.swiper');
    var perspectivePrev = perspectiveFeaturedRoot.querySelector('.perspective-featured__nav--prev');
    var perspectiveNext = perspectiveFeaturedRoot.querySelector('.perspective-featured__nav--next');
    var perspectivePag = perspectiveFeaturedRoot.querySelector('.perspective-featured__pagination');
    if (perspectiveSwiperEl) {
      new Swiper(perspectiveSwiperEl, {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 480,
        loop: false,
        watchOverflow: true,
        navigation: {
          prevEl: perspectivePrev,
          nextEl: perspectiveNext,
        },
        pagination: perspectivePag
          ? {
              el: perspectivePag,
              clickable: true,
            }
          : undefined,
      });
    }
  }

  var tabsRoot = document.querySelector('.dif-team-sec__tabs');
  if (tabsRoot) {
    var buttons = tabsRoot.querySelectorAll('.dif-team-sec__tabs-control-btn');
    var panels = tabsRoot.querySelectorAll('.dif-team-sec__tabs-data');

    buttons.forEach(function (button, index) {
      button.addEventListener('click', function () {
        buttons.forEach(function (item) {
          item.classList.remove('active');
        });

        panels.forEach(function (panel) {
          panel.classList.remove('active');
        });

        button.classList.add('active');
        if (panels[index]) {
          panels[index].classList.add('active');
        }
      });
    });
  }

  function animateController() {
    new Skroll({
        mobile: true,
    })
        .add(".speed__eyebrow", {
            delay: 100,
            duration: 500,
            animation: "fadeInUp"
        })

      .add(".speed__title", {
          delay: 100,
          duration: 500,
          animation: "fadeInUp"
      })

      .add(".speed__body", {
          delay: 100,
          duration: 500,
          animation: "fadeInUp"
      })

    .add(".speed__rail", {
        delay: 100,
        duration: 800,
        animation: "fadeInLeft"
    })

    .add(".speed__closing", {
        delay: 100,
        duration: 500,
        animation: "fadeInUp"
    })

    .add(".evolution__label", {
      delay: 100,
      duration: 500,
      animation: "fadeInUp"
  })
  .add(".evolution__title", {
    delay: 100,
    duration: 500,
    animation: "fadeInUp"
})
.add(".evolution__subtitle", {
  delay: 100,
  duration: 500,
  animation: "fadeInUp"
})
.add(".evolution__col", {
  delay: 100,
  duration: 1000,
  animation: "fadeInUp"
})
.add(".light-comparison__title-wrap", {
  delay: 100,
  duration: 500,
  animation: "fadeInUp"
})

.add(".light-comparison__col", {
  delay: 100,
  duration: 1000,
  animation: "fadeInLeft"
})
.add(".light-comparison__panel", {
  delay: 100,
  duration: 1000,
  animation: "fadeInRight"
})

.add(".case-studies__label", {
  delay: 100,
  duration: 500,
  animation: "fadeInUp"
})
.add(".case-studies__title", {
  delay: 100,
  duration: 500,
  animation: "fadeInUp"
})
.add(".case-studies__subtitle", {
  delay: 100,
  duration: 500,
  animation: "fadeInUp"
})

.add(".case-studies__card", {
  delay: 100,
  duration: 800,
  animation: "fadeInUp"
})

.add(".philosophy__media", {
  delay: 100,
  duration: 800,
  animation: "fadeInLeft"
})

.add(".philosophy__eyebrow", {
  delay: 100,
  duration: 500,
  animation: "fadeInUp"
})
.add(".philosophy__title", {
  delay: 100,
  duration: 500,
  animation: "fadeInUp"
})

.add(".philosophy__lead", {
  delay: 100,
  duration: 500,
  animation: "fadeInUp"
})

.add(".philosophy__card", {
  delay: 100,
  duration: 500,
  animation: "fadeInUp"
})

.add(".philosophy__shift", {
  delay: 100,
  duration: 500,
  animation: "fadeInUp"
})

.add(".philosophy__shift", {
  delay: 100,
  duration: 500,
  animation: "fadeInUp"
})

.add(".philosophy__intel-label", {
  delay: 100,
  duration: 500,
  animation: "fadeInUp"
})

.add(".philosophy__intel-heading", {
  delay: 100,
  duration: 500,
  animation: "fadeInUp"
})

.add(".philosophy__intel-cta", {
  delay: 100,
  duration: 500,
  animation: "fadeInUp"
})

.add(".philosophy__intel-visual", {
  delay: 100,
  duration: 800,
  animation: "fadeInRight"
})

.add(".stella-section__visual", {
  delay: 100,
  duration: 800,
  animation: "fadeInLeft"
})

.add(".stella-section__kicker", {
  delay: 100,
  duration: 500,
  animation: "fadeInUp"
})

.add(".stella-section__title", {
  delay: 100,
  duration: 500,
  animation: "fadeInUp"
})

.add(".stella-section__tagline", {
  delay: 100,
  duration: 500,
  animation: "fadeInUp"
})

.add(".stella-section__actions", {
  delay: 100,
  duration: 500,
  animation: "fadeInUp"
})

.add(".stella-section__description", {
  delay: 100,
  duration: 500,
  animation: "fadeInUp"
})

.add(".stella-section__cta", {
  delay: 100,
  duration: 500,
  animation: "fadeInUp"
})

.add(".our-thinking__label", {
  delay: 100,
  duration: 500,
  animation: "fadeInUp"
})

.add(".our-thinking__heading", {
  delay: 100,
  duration: 500,
  animation: "fadeInUp"
})

.add(".our-thinking__card", {
  delay: 100,
  duration: 800,
  animation: "fadeInUp"
})

.add(".our-thinking__more", {
  delay: 100,
  duration: 500,
  animation: "fadeInUp"
})
.add(".our-thinking__subscribe", {
  delay: 100,
  duration: 800,
  animation: "fadeInUp"
})

.add(".cta-section__title", {
  delay: 100,
  duration: 500,
  animation: "fadeInUp"
})

.add(".cta-section__text", {
  delay: 100,
  duration: 500,
  animation: "fadeInUp"
})

.add(".cta-section__button", {
  delay: 100,
  duration: 500,
  animation: "fadeInUp"
})

        .init()
        .recalcPosition()
}

animateController()






}, false);


