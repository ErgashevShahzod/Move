var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 2.5,
      slideShadows: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
  
  $(".btn").click(function () {
    $(".option").toggle("show");
  });
  $(".btn-you").click(function () {
    $(".you").toggle("show");
  });
  $(".btn-we").click(function () {
    $(".we").toggle("show");
  });
  $(".btn-she").click(function () {
    $(".she").toggle("show");
  });