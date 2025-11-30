document.addEventListener("DOMContentLoaded", function () {
  
  // Функция для выравнивания высоты слайдов
  function setEqualHeight(swiper) {
    // 1. Сбрасываем высоту, чтобы корректно пересчитать (если окно уменьшилось)
    swiper.slides.forEach(slide => {
      slide.style.height = 'auto';
    });

    // 2. Находим максимальную высоту среди всех слайдов
    let maxHeight = 0;
    swiper.slides.forEach(slide => {
      if (slide.offsetHeight > maxHeight) {
        maxHeight = slide.offsetHeight;
      }
    });

    // 3. Применяем максимальную высоту ко всем слайдам
    swiper.slides.forEach(slide => {
      slide.style.height = `${maxHeight}px`;
    });
    
    // 4. Обновляем Swiper (на случай, если изменились размеры контейнера)
    swiper.update();
  }

  // Инициализация Swiper
  const mySwiper = new Swiper(".swiper", {
    loop: true,
    speed: 600,
    slidesPerView: 1,
    effect: "slide",
    
    // ВАЖНО: autoHeight должен быть false (это значение по умолчанию), 
    // чтобы контейнер не прыгал, а держал высоту.
    autoHeight: false, 

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    // СОБЫТИЯ: Здесь вызываем нашу функцию
    on: {
      // Срабатывает сразу после инициализации
      init: function () {
        setEqualHeight(this);
      },
      // Срабатывает при изменении размера окна
      resize: function () {
        setEqualHeight(this);
      }
    }
  });

  console.log("Swiper успешно инициализирован и выровнен по высоте.");
});