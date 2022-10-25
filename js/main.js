(function () {
  const headerDoc = document.getElementById('headerObj');
  const bodyDoc = document.getElementById('bodyObj');
  const btnYouTube = document.getElementById('btnYouTube');
  const navHeader = document.querySelector('#nav');
  const navContainer = document.getElementById('nav-centre');
  const bntBurger = document.getElementById('nav-burger');
  const navLink = navContainer.querySelectorAll('.nav__item');
  const certificationPagination = document.getElementById('certificate').querySelector('.swiper-pagination__certification');
  const certificationPaginationHorizontal = document.getElementById('certificate').querySelector('.swiper-pagination__certification--horizontal');
  // работа слайдера с сертификатами вертикальные
  const swiperCertification = new Swiper(".swiper__certification", {
    slidesPerView: 1,
    type: 'bullets',
    loop: false,
    pagination: {
      el: certificationPagination,
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 500px
      700: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 1600px
      1600: {
        slidesPerView: 4,
        spaceBetween: 30
      },
    },
  });
  // работа слайдера с сертификатами горизонтальные
  const swiperCertificationHorizontal = new Swiper(".swiper__certification--horizontal", {
    slidesPerView: 1,
    type: 'bullets',
    loop: false,
    pagination: {
      el: certificationPaginationHorizontal,
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 500px
      700: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 1600px
      1600: {
        slidesPerView: 4,
        spaceBetween: 30
      },
    },
  });
  // работа слайдера с  отзывами
  const swiper = new Swiper(".swiper__commit", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 500px
      700: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 1600px
      1600: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      // when window width is >= 2700px
      2700: {
        slidesPerView: 5,
        spaceBetween: 30
      },
    },
  });
  // стрелочная функция для перехода на канал
  const linkYouTube = () => {
    window.location.href = 'https://www.youtube.com/channel/UC9VLHdtCcxQd92SADYjL34g/featured';
  };
  function burgerMenu() {
    navContainer.classList.toggle('nav__menu');
  }
  function backgroundBurgerMenu() {
    if (window.screen.width < 769) {
      if (window.scrollY > 300) {
        headerDoc.style.backgroundColor = 'rgb(170, 81, 111, 0.5)';
      } else {
        headerDoc.style.backgroundColor = '';
      };
    };
  };
  // Настройка появления стилей или контейнеров при разных размерах окна
  function adaptiveElement() {
    let windowScreen = window.screen;
    if (windowScreen.width < 769) {
      bntBurger.style.display = 'block';
      headerDoc.style.position = 'fixed';
      for (let navLinkItem of navLink) {
        navLinkItem.addEventListener('click', burgerMenu);
      };
    } else {
      bntBurger.style.display = 'none';
      headerDoc.style.position = 'absolute';
      for (let navLinkItem of navLink) {
        navLink[2].removeEventListener('click', burgerMenu);
      };
    };
  };
  //================================
  //================================
  window.addEventListener('scroll', backgroundBurgerMenu);
  bntBurger.addEventListener('click', burgerMenu);
  window.addEventListener('resize', adaptiveElement);
  // Вешаем обработчик событий на кнопку
  btnYouTube.addEventListener('click', linkYouTube);
  // в зависимости от размеров окна изменяются свойства или контейнеры
  adaptiveElement();
})();
