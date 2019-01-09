const swiperOptions = {
    containerModifierClass: 'projects__container-',
    wrapperClass: 'projects__slider',
    slideClass: 'projects__slider__item',
    spaceBetween: window.innerWidth / 6,
    slidesPerView: 'auto',
    loop: true,
    loopedSlides: 5,
    //freeMode: true,
    pagination: false,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    centeredSlides: true,
    mousewheel: true,
    mousewheelControl: true,
    speed: 1000,
};

export default swiperOptions;
