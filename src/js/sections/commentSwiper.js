export function commentSwiper() {
    const video = document.querySelectorAll('.comment__video')
    const videoBg = document.querySelectorAll('.comment__video-bg')
    const videoPlay = document.querySelector('.comment__video-play')
    let curIdx = 0
    const swiper = new Swiper('.comment__swiper', {
        slidesPerView: 1,
        speed: 500,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        on: {
            slideChange: function () {
                curIdx = this.realIndex
                video.forEach((el, idx) => {
                    if (idx == this.realIndex) {
                        el.play();
                        videoBg[idx].play()
                    } else {
                        el.pause();
                        el.currentTime = 0;
                        videoBg[idx].pause()
                        videoBg[idx].currentTime = 0;
                    }
                })
            }
        }
    });
    const secSwiper = document.querySelector('.comment__swiper')
    let bool = false
    let rect =
        window.addEventListener('scroll', () => {
            bool = true
            rect = secSwiper.getBoundingClientRect();
            if (rect.bottom - window.innerHeight < 0 && rect.top + secSwiper.offsetHeight > 0) {
                swiper.autoplay.start();
                video[curIdx].play()
                videoBg[curIdx].play()
            } else {
                bool = false
                if (!bool) {
                    swiper.autoplay.stop();
                    video[curIdx].pause()
                    videoBg[curIdx].pause()
                }
            }

        })
    videoPlay.addEventListener('click', () => {
        swiper.autoplay.stop();
        video[curIdx].currentTime = 0;
        video[curIdx].muted = false;
        video[curIdx].play()
        videoBg[curIdx].currentTime = 0;
        videoBg[curIdx].play()
        if (video[curIdx].requestFullscreen) {
            video[curIdx].requestFullscreen();
        } else if (video[curIdx].webkitRequestFullscreen) { // Для Safari
            video[curIdx].webkitRequestFullscreen();
        } else if (video[curIdx].msRequestFullscreen) { // Для IE/Edge
            video[curIdx].msRequestFullscreen();
        }

    })
    document.addEventListener("fullscreenchange", () => {
        if (!document.fullscreenElement) { // Проверяем, вышел ли пользователь из фулл-экрана
            video[curIdx].currentTime = 0;
            video[curIdx].muted = true;
            videoBg[curIdx].currentTime = 0;
            swiper.autoplay.start();
        }
    });
}