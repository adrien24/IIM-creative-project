<script>
import Soundbar from './Soundbar.vue';



export default {
    name: 'Video',
    mounted() {
        this.addBlur();
        this.animeTitle();


        setTimeout(() => {
            document.querySelector('body').style.overflowY = 'scroll';
        }, 5500);
    },

    components: {
        Soundbar
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
        <!-- <h1 class="title">TRINITY</h1><br /> -->
        <div class="container">
            <div class="stack" style="--stacks: 3;">
                <span style="--index: 0;">TRINITY</span>
                <span style="--index: 1;">TRINITY</span>
                <span style="--index: 2;">TRINITY</span>
            </div>
        </div>
        <Soundbar @click="son()" emotional="trinity" />
        <video muted id="myVideo">
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



    h1 {
        position: relative;
        z-index: 1;
        font-size: 16rem;
        opacity: 1;
        color: #3f3;
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

.container {
    display: flex;
    flex-direction: column;
    mix-blend-mode: difference;
    position: relative;
    z-index: 1;
    font-size: 16rem;
    opacity: 1;
    color: #3f3;
    font-family: 'Megatron';
}

.stack {
    display: grid;
    grid-template-columns: 1fr;
}

.stack span {
    font-weight: bold;
    grid-row-start: 1;
    grid-column-start: 1;
    font-size: 16rem;
    --stack-height: calc(100% / var(--stacks) - 1px);
    --inverse-index: calc(calc(var(--stacks) - 1) - var(--index));
    --clip-top: calc(var(--stack-height) * var(--index));
    --clip-bottom: calc(var(--stack-height) * var(--inverse-index));
    clip-path: inset(var(--clip-top) 0 var(--clip-bottom) 0);
    animation: stack 340ms cubic-bezier(.46, .29, 0, 1.24) 0.5 backwards calc(var(--index) * 120ms), glitch 1s ease infinite 2.5s alternate-reverse;
}

.stack span:nth-child(odd) {
    --glitch-translate: 8px;
}

.stack span:nth-child(even) {
    --glitch-translate: -8px;
}

@keyframes stack {
    0% {
        opacity: 0;
        transform: translateX(-50%);
        text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
    }

    ;

    60% {
        opacity: 0.5;
        transform: translateX(50%);
    }

    80% {
        transform: none;
        opacity: 1;
        text-shadow: 2px -3px 0 #26ff00, -2px 3px 0 #70e85a;
    }

    100% {
        text-shadow: none;
    }
}

@keyframes glitch {
    0% {
        text-shadow: -2px 3px 0 #26ff00, 2px -3px 0 #70e85a;
        transform: translate(var(--glitch-translate));
    }

    2% {
        text-shadow: 2px -3px 0 #26ff00, -2px 3px 0 #70e85a;
    }

    4%,
    100% {
        text-shadow: none;
        transform: none;
    }
}
</style>
