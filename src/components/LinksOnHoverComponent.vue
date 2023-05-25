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
                  <span class="menu__item-inner-text">
                      Ræsilience
                  </span>
              </span>
            </div>
            <div class="menu__item">
                <div class="menu__item-wrapper">
                    <div class="menu__item-inner">
                        <img src="../assets/img/polygon.png" alt="polygon" class="menu__item-image">
                    </div>
                </div>
                <span class="menu__item-text">
                  <span class="menu__item-inner-text">
                      Polygon1993
                  </span>
              </span>
            </div>
            <div class="menu__item">
                <div class="menu__item-wrapper">
                    <div class="menu__item-inner">
                        <img src="../assets/img/megatron.jpg" alt="megatron " class="menu__item-image">
                    </div>
                </div>
                <span class="menu__item-text">
                  <span class="menu__item-inner-text">
                      GENIUS
                  </span>
              </span>
            </div>
        </nav>
    </div>
</template>
<script lang="ts">
    import {gsap} from 'gsap';

    export default {
        name: 'LinksOnHoverComponent',
        mounted() {
            this.animate();
        },
        methods: {
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
                        console.log('ici')
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
                        let yOffset = bounds.top / wrapperBounds.height;
                        yOffset = gsap.utils.mapRange(0, 1.5, -100, 100, yOffset);
                        gsap.to(wrapper, {
                            duration: 1.25,
                            x: Math.abs(x - bounds.left) - wrapperBounds.width / 1.55,
                            y: Math.abs(y - bounds.top) - wrapperBounds.height / 2 - yOffset,
                        });

                    };

                    item.addEventListener("mouseenter", onMouseEnter);
                    item.addEventListener("mouseleave", onMouseLeave);
                    item.addEventListener("mousemove", onMouseMove);

                    window.addEventListener("resize", () => {
                        bounds = item.getBoundingClientRect();
                    })

                });
            },
        },
    };
</script>
<style scoped lang="scss">
    .container {
        background-color: #0a0a0a;
        width: 100vw;
        height: 100vh;
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
            font-family: "ABC Whyte Inktrap Unlicensed Trial";
            font-weight: 700;
            text-transform: uppercase;
            font-size: 5vw;
            color: white;
            opacity: 1;
            transition: opacity 350ms ease;
            white-space: nowrap;
            overflow: hidden;
            cursor: ne-resize;
        }
        .menu__item:hover {
            .menu__item-text {
                color: green;
            }
            .menu__item-wrapper {
                z-index: 2;
            }
        }
    }

</style>
