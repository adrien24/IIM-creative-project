<template>
    <div class="pre-loader">
        <div class="pre-loader-container">
            <div class="pre-loader-container">
                <div class="header">
                    <h1>Megatron</h1>
                    <img src="../assets/img/megatron.jpg" alt="megatron image">
                    <div class="header-wrapper"></div>
                </div>
                <div class="header concat first">
                    <h1><span data-text="LOGICIEL" class="premier">LOGICIEL
                        </span> ...de batard
                    </h1>
                    <img src="../assets/img/head.png" alt="trinityville image">
                    <div class="header-wrapper"></div>
                </div>
                <div class="header">
                    <h1>trinityville nakré</h1>
                    <img src="../assets/img/trinityville.jpg" alt="trinityville image">
                    <div class="header-wrapper"></div>
                </div>
                <div class="header">
                    <h1>longue vie...</h1>
                    <img src="../assets/img/hillz.jpg" alt="hillz image">
                    <div class="header-wrapper"></div>
                </div>
                <div class="header concat">
                    <h1>poizon <span data-text="TRINITY" class="deuxieme">TRINITY</span></h1>
                    <img src="../assets/img/poizon.jpg" alt="trinityville image">
                    <div class="header-wrapper"></div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import gsap from 'gsap'


export default {
    mounted() {
        this.over();

        let sound = document.getElementById('first');

        this.animate();
        this.imageHover();
    },

    methods: {

        imageHover() {
            const items = document.querySelectorAll('.header')
            console.log(items)
            items.forEach((el) => {
                const image = el.querySelector('img')
                console.log(image)

                el.addEventListener('mouseenter', (e) => {
                    gsap.to(image, { autoAlpha: 1 })
                })

                el.addEventListener('mouseleave', (e) => {
                    gsap.to(image, { autoAlpha: 0 })
                })

                el.addEventListener('mousemove', (e) => {
                    gsap.set(image, {
                        force3D: true,
                        x: e.offsetX - 200, y: e.offsetY - 200
                    })
                })
            })
        },

        elementPosition(a) {
            var b = a.getBoundingClientRect();
            return {
                clientX: a.offsetLeft,
                clientY: a.offsetTop,
                viewportX: (b.x || b.left),
                viewportY: (b.y || b.top)
            }
        },

        over() {
            let tl = gsap.timeline();
            tl.to('.header > h1', 2, {
                top: 0,
                ease: "power3.inOut",
                strager: {
                    amount: 0.3
                }
            })
        },

        animate() {
            // Sélectionnez la div à surveiller
            var divToWatch = document.getElementById('body');

            // Ajoutez un gestionnaire d'événements de défilement à la fenêtre
            window.addEventListener('scroll', function () {
                // Vérifiez si la position de défilement dépasse ou atteint la position de la div
                let premier = document.querySelector('.premier');
                let deuxieme = document.querySelector('.deuxieme');
                if (window.scrollY > 442) {
                    premier.classList.add('before')
                    setTimeout(() => {
                        premier.style.webkitTextStroke = 'white'
                    }, 2000)
                }

                if (window.scrollY > 664) {
                    deuxieme.classList.add('before')
                    setTimeout(() => {
                        deuxieme.style.webkitTextStroke = 'white'
                    }, 2000)
                }
            });
        }
    }
}
</script>

<style scoped lang="scss">
.pre-loader {
    position: relative;
    width: 100%;
    height: 100vh;
    background: #0a0a0a;
    color: #e5e3dc;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;

    &:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('../assets/img/bg_tv.gif');
        content: '';
        z-index: 1;
        opacity: 0.7;
    }

    &-container {
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .header {
            position: relative;
            width: max-content;
            margin: 0 auto;

            img {
                position: absolute;
                width: 400px;
                height: 400px;
                object-fit: cover;
                transform: translate3d(0, 0, 0);
                top: 0;
                left: 0;
                z-index: -10;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
            }

            .before {
                &::before {
                    content: attr(data-text);
                    position: absolute;
                    overflow: hidden;
                    color: #FFF;
                    transition: 1s;
                    width: 0%;
                    text-align: left;
                    animation: fill 2s cubic-bezier(0.6, 0, 0.4, 1) forwards;
                }
            }

            h1 {
                // position: relative;
                // top: 125px;
                // text-transform: uppercase;
                // text-align: center;
                // font-family: sans-serif;
                // font-size: 7vw;
                // line-height: 90%;
                // color: rgba(10, 10, 10, 0.8);
                // -webkit-text-stroke: 2px rgba(65, 249, 52, 0.8);
                
                position: relative;
                top: 125px;
                text-transform: uppercase;
                text-align: center;
                font-family: 'Megatron';
                font-size: 6vw;
                line-height: 115%;
                color: rgba(10, 10, 10, 0.8);
                -webkit-text-stroke: 0.5px rgba(65, 249, 52, 0.6);

                span {
                    position: relative;
                }


                &::after {
                    content: "";
                    position: absolute;
                    top: 120px;
                    left: -20px;
                    width: 110%;
                    height: 120px;
                    // background: #0a0a0a;

                }
            }
        }

        .concat {
            display: flex;
        }

        .premier, .deuxieme {
            font-family: 'RemboyR' !important;
        }
    }
}

@keyframes fill {
    0% {
        width: 0
    }

    100% {
        width: 100%
    }
}
</style>