const swiperOptions = {
    containerModifierClass: 'projects__container-',
    wrapperClass: 'projects__swiper',
    slideClass: 'projects__swiper__item',
    slideActiveClass: 'item--active',
    slideVisibleClass: 'item--visible',
    slideDuplicateClass: 'duplicate',
    slideDuplicateActiveClass: 'duplicate--active',
    slidePrevClass: 'item--prev',
    slideNextClass: 'item--next',
    slideDuplicatePrevClass: 'duplicate--prev',
    slideDuplicateNextClass: 'duplicate--next',
    spaceBetween: window.innerWidth / 6,
    slidesPerView: 'auto',
    loop: true,
    pagination: false,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    centeredSlides: true,
    mousewheel: true,
    mousewheelControl: true,
    speed: 800,
};

export default swiperOptions;
