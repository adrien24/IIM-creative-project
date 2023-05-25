<template>
    <div class="container">
        <nav class="menu">
            <div class="menu__item">
                <div class="menu__item-wrapper">
                    <div class="menu__item-inner">
                        <img src="../assets/img/raesilience.png" alt="raesilience" class="menu__item-image">
                    </div>
                </div>
                <span class="menu__item-text">
                  <a href="https://www.behance.net/gallery/168765563/LAYLOW-TRINITY-DA" class="menu__item-inner-text">
                      Ræsilience
                  </a>
              </span>
            </div>
            <div class="menu__item">
                <div class="menu__item-wrapper">
                    <div class="menu__item-inner">
                        <img src="../assets/img/polygon.png" alt="polygon" class="menu__item-image">
                    </div>
                </div>
                <span class="menu__item-text">
                  <a href="https://www.behance.net/gallery/140514641/Laylow-Live-Visuals-(Accor-Arena-2022)" class="menu__item-inner-text">
                      Polygon1993
                  </a>
              </span>
            </div>
            <div class="menu__item">
                <div class="menu__item-wrapper">
                    <div class="menu__item-inner">
                        <img src="../assets/img/megatron.jpg" alt="megatron " class="menu__item-image">
                    </div>
                </div>
                <span class="menu__item-text">
                  <a href="https://genius.com/Laylow-megatron-lyrics" class="menu__item-inner-text">
                      GENIUS
                  </a>
              </span>
            </div>
        </nav>
    </div>
</template>
<script lang="ts">
    import {gsap} from 'gsap';

    export default {
        name: 'LinksOnHoverComponent',
        data() {
            return {
                lastScrollYOffset: 0,
                lastScrollXOffset: 0,
                targetY: 0,
            }
        },
        mounted() {
            this.animate();
        },
        methods: {
            onScrollMove() {
                this.targetY += window.pageYOffset - this.lastScrollYOffset;
                this.lastScrollYOffset = window.pageYOffset;
            },
            animate(): void {
                gsap.timeline().set('.menu', {autoAlpha: 1})
                    .from('.menu__item-inner-text', {
                        delay: 1,
                        duration: 0.85,
                        xPercent: 25,
                        yPercent: 125,
                        stagger: 0.095,
                        skewY: gsap.utils.wrap([-8, 8]),
                        ease: 'expo.out',
                    })
                    .set('menu', {pointerEvents: 'all'});

                gsap.defaults({
                    duration: 0.55,
                    ease: 'expo.out',
                });

                const items = document.querySelectorAll('.menu__item');

                items.forEach((item: HTMLElement) => {
                    const wrapper = item.querySelector('.menu__item-wrapper');
                    const wrapperBounds = wrapper.getBoundingClientRect();
                    let bounds = item.getBoundingClientRect();

                    const onMouseEnter = () => {
                        console.log('ici');
                        gsap.set(wrapper, {
                            scale: .8,
                            xPercent: 15,
                            yPercent: 50,
                            rotation: -15,
                        });
                        gsap.to(wrapper, {opacity: 1, scale: 1, yPercent: 0, rotation: 0});
                    };

                    const onMouseLeave = () => {
                        gsap.to(wrapper, {
                            opacity: 0,
                            yPercent: -50,
                            xPercent: 25,
                            scale: .8,
                            rotation: -15,
                        });
                    };

                    const onMouseMove = ({x, y}) => {
                        console.log(window.pageYOffset);
                        let yOffset = (bounds.top / wrapperBounds.height);
                        yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset);
                        gsap.to(wrapper, {
                            duration: 1.25,
                            x: Math.abs(x - bounds.left) - wrapperBounds.width,
                            y: this.targetY,
                        });

                    };

                    item.addEventListener('mouseenter', onMouseEnter);
                    item.addEventListener('mouseleave', onMouseLeave);
                    item.addEventListener('mousemove', onMouseMove);

                    window.addEventListener('resize', () => {
                        bounds = item.getBoundingClientRect();
                    });

                    window.addEventListener('scroll', () => {
                        onScrollMove();
                    });

                });
            },
        },
    };
</script>
<style scoped lang="scss">
    .container {
        width: 100vw;
        height: 100vh;
        background-image: url('../assets/img/bg_tv.gif');
        padding: 2rem;
        .menu__item {
            width: max-content;
        }
        .menu__item-wrapper {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 600px;
            height: 400px;
            pointer-events: none;
            opacity: 0;
        }
        .menu__item-inner .menu__item-image {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
        .menu__item-text {
            position: relative;
            font-family: "Megatron", sans-serif;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 7vw;
            color: white;
            opacity: 1;
            transition: opacity 350ms ease;
            white-space: nowrap;
            overflow: hidden;
            cursor: ne-resize;
            a {
                text-decoration: none;
                color: white;
            }
        }
        .menu__item:hover {
            .menu__item-text {
                color: #33ff33;
                a {
                    text-decoration: none;
                    color: #33ff33;
                    cursor: ne-resize;
                }
            }
            .menu__item-wrapper {
                z-index: 2;
            }
        }
    }
</style>
