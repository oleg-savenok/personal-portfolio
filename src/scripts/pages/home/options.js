const options = {
    swiper: {
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
        spaceBetween: window.innerWidth / 8,
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
    },
    transitions: {
        swiperItem: {
            alpha: 0.3,
            timeEnter: 0.4,
            timeLeave: 0.5,
        },
        letters: {
            time: 0.75,
            delay: 0.01,
            degree: '60%',
            ease: Power3.easeOut,
        },
    },
};

export default options;
