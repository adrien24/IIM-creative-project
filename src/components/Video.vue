<script>

export default {
    name: 'Video',
    mounted() {
        this.addBlur();
        this.animeTitle();


        setTimeout(() => {
            document.querySelector('body').style.overflowY = 'scroll';
        }, 5500);
    },

    methods: {
        son() {
            let video = document.getElementById('myVideo');
            let soundBars = document.getElementById('sound-bars');
            soundBars.classList.toggle('paused');
            video.muted = !video.muted;
        },

        addBlur() {
            const video = document.getElementById('myVideo');
            let i = 0;
            setInterval(() => {
                if (i < 10) {
                    i++;
                    video.style.filter = 'blur(' + i + 'px)';
                }
            }, 500);
        },

        animeTitle() {
            setTimeout(() => {

                let h1 = document.querySelector('.title');
                h1.style.opacity = '1';
                h1.style.transition = 'all 1s ease-in-out';

            }, 1000);
        }
    }
}

</script>

<template>
    <div class="video">
        <h2>LAYLOW</h2>
        <h1 class="title">TRINITY</h1><br />
        <div id="sound-bars" class="paused" @click="son()">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <video autoplay muted id="myVideo">
            <source src="../assets/videos/bg-home.mp4" type="video/mp4">
        </video>
    </div>
</template>

<style scoped lang="scss">
@import '../assets/css/font.css';

.video {
    width: 100%;
    height: 100vh;
    background-color: black;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    #sound-bars {
        z-index: 10;
        position: absolute;
        top: 24px;
        right: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 16px;
        width: 16px;
        padding: 20px;
        border-radius: 100%;
        background: rgba(255, 255, 255, .2);
        cursor: pointer;

        span {
            background: #fff;
            margin: auto 1px 0;
            height: 100%;
            width: 2px;
            // Using 1 occasionally offsets UI :/
            transform: scaleY(.99);
            transform-origin: bottom;
            box-shadow: 0 4px 0 rgba(255, 255, 255, .2);
            transition: all .4s ease-in-out;

            // Create different height bars
            &:nth-child(1) {
                transform: scaleY(.8);
            }

            &:nth-child(2) {
                transform: scaleY(.6);
            }

            &:nth-child(4) {
                transform: scaleY(.4);
            }
        }

        &:not(.paused)>span {
            // Run initial animation on each un-pause event
            animation: sound-bars-animation 2s 2 alternate;

            // Scatter animations
            &:nth-child(1) {
                animation-delay: .4s;
            }

            &:nth-child(2) {
                animation-delay: .2s;
            }

            &:nth-child(3) {
                animation-delay: .6s;
            }

            &:nth-child(4) {
                animation-delay: .8s;
            }
        }

        &:before {
            content: "";
            position: absolute;
            opacity: 0;
            height: 0;
            width: 0;
            background: #fff;
            border-radius: 100%;
            transition: all .4s ease-in-out;
            cursor: pointer;
        }

        &:hover {
            &:before {
                // Show larger circle on hover
                width: calc(100% + 8px);
                height: calc(100% + 8px);
                opacity: 1;
            }

            >span {
                background: #000;
            }
        }

        // Settle animation on pause
        &.paused>span {
            opacity: .2;
            transform: scaleY(.2);
        }
    }

    @keyframes sound-bars-animation {

        // 0% - 50% uses inherited properties  
        50% {
            opacity: .2;
            transform: scaleY(.2);
        }

        100% {
            opacity: 1;
            transform: scaleY(1);
        }
    }

    h1 {
        position: relative;
        z-index: 1;
        font-size: 16rem;
        opacity: 1;
        color: #41F934;
        mix-blend-mode: difference;
        font-family: 'Megatron';
    }


    h2 {
        position: absolute;
        z-index: 2;
        font-size: 8rem;
        opacity: 1;
        color: #FFF;
        margin-top: 0rem;
        font-family: 'RemboyR';
    }

    video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
}
</style>
