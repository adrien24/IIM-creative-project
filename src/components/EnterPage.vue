<template>
    <main class="center">
        <div class="welcome">
            <div class="typewriter">

            </div>
            <!-- <div class="wrapper">
                <span id="text"> -->
            <!--   this is a custom text written to show my easy approaches to make the typewriting easy! -->
            <!-- </span>
                <span id="cursor">|</span>
            </div> -->
            <div class="code">
                <label for="inp" class="inp">
                    <span class="label">code</span>
                    <input type="text" id="inp" placeholder="&nbsp;" maxlength="3" v-model="code">
                    <span class="focus-bg"></span>
                </label>
                <button type="button" class="inp-btn" @click="enter">
                    <div id="messenger"></div>
                </button>
            </div>
        </div>
        <div class="access">
            <TypingTextVue />
        </div>
        <div class="init">
            <h1 class="title">
                <span class="glitch" data-text="help•">
                    <span class="flex">initialisation du programme<span class="first">.</span><span
                            class="second">.</span><span class="third">.</span></span>
                </span>
            </h1>
        </div>
    </main>
</template>

<script>
import gsap from 'gsap'
import { Messenger } from '../assets/js/buttonGlitch.js'
import TypingTextVue from './TypingText.vue'

export default {
    name: 'EnterPage',

    data() {
        return {
            code: '0'
        }
    },

    components: {
        TypingTextVue
    },


    mounted() {

        document.querySelector('body').style.overflow = 'hidden';
        this.animePoint();
        var messenger = new Messenger($('#messenger'));


    },

    methods: {

        enter() {
            if (this.code === '666') {
                document.body.classList.add('red');
            }

            let init = document.querySelector('.init');
            let welcome = document.querySelector('.welcome');
            welcome.style.display = 'none';

            let access = document.querySelector('.access');
            access.style.display = 'block';

            setTimeout(() => {
                access.style.display = 'none';
                init.style.display = 'block';

                setTimeout(() => {
                    this.scale();
                    setTimeout(() => {
                        let video = document.getElementById('myVideo');
                        video.play();
                        let main = document.querySelector('.center');
                        main.style.display = 'none';
                        document.querySelector('body').style.overflowY = 'scroll';

                    }, 1000);
                }, 4000);
            }, 6500);
        },

        animePoint() {
            setTimeout(() => {
                document.querySelector('.first').style.visibility = 'visible';
            }, 1000);
            setTimeout(() => {
                document.querySelector('.second').style.visibility = 'visible';
            }, 2000);
            setTimeout(() => {
                document.querySelector('.third').style.visibility = 'visible';

            }, 3000);


        },

        scale() {
            let h1 = document.querySelector('.title');

            h1.style.transition = 'all 1s ease-in-out';
            h1.style.transform = 'scale(150)';
            h1.style.opacity = '0';
        }
    }
}

</script>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Press+Start+2P);
@import '../assets/css/animText.scss';

// $bg-color: #4242e6;
// $glitch-bg-color: $bg-color;

#messenger {
    text-shadow: 0 0 5px rgba(51, 255, 51, 0.75);
}



.welcome,
.init,
.access {
    z-index: 10;
}

.init,
.access {
    display: none;
}


@keyframes opacity {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }


}


@keyframes opacity1 {
    0% {
        opacity: 0;
    }

    75% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

/* The typing effect */
@keyframes typing {
    from {
        width: 0;
        opacity: 1;
    }

    to {
        width: 100%;
        opacity: 1;
    }
}

/* The typewriter cursor effect */
@keyframes blink-caret {

    from,
    to {
        border-color: transparent
    }

    50% {
        border-color: #3f3;
    }
}


.inp {
    display: flex;
    gap: 16px;
    align-items: center;
    margin-top: 30px;

    .label {
        color: #3f3;
        font-family: 'Press Start 2P', cursive;
        background-color: transparent;
        margin-left: 16px;
        padding: 16px;
        font-size: 16px;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }

    input {
        color: #3f3;
        font-family: 'Press Start 2P', cursive;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid #3f3;
        padding: 16px;
        width: 180px;
        font-size: 48px;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;

        &:focus {
            outline: none;
        }
    }
}

.inp-btn {
    color: #3f3;
    background-color: transparent;
    font-family: 'Press Start 2P', cursive;
    margin-top: 50px;
    border: none;
    padding: 16px;
    font-size: 32px;
    width: 224px;
    height: 64px;
    cursor: pointer;
}

.code {
    display: flex;
    flex-direction: column;
    opacity: 0;
    align-items: center;
    justify-content: center;
    animation: opacity 1s forwards;
    animation-delay: 5s;
}


.center {
    position: fixed;
    background-image: url('../assets/img/bg_tv.gif');
}


main {
    z-index: 30;
}

h1 {
    font-family: 'Press Start 2P', cursive;
    font-weight: bold;
    color: #3f3;
    font-size: 29px;
    transform: all 3s ease-in-out;
    scale: 1;
    text-shadow: 0 0 5px rgba(51, 255, 51, 0.75);
}

/* unvisited link */
a:link {
    color: #FFF;
    text-decoration: none;
}

/* visited link */
a:visited {
    color: #FFF;
    text-decoration: none;
}

/* mouse over link */
a:hover {
    color: #FF00F0;
    text-decoration: none;
}

/* selected link */
a:active {
    color: #3f3;
    text-decoration: none;
}

.center {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: rgb(23, 23, 23);
}

h1 {
    margin: 0.6em 0;
    font-weight: bold;
}

.glitch {
    position: relative;
    margin: 0 auto;
    background: rgb(23, 23, 23);

    .flex {
        display: flex;
        justify-content: center;

        .first,
        .second,
        .third {
            visibility: hidden;
        }
    }


}

.glitch::before,
.glitch::after {
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-direction: alternate-reverse;
    overflow: hidden;
    position: absolute;
    top: 0;
    clip: rect(0, 900px, 0, 0);
    content: attr(data-text);
}

.glitch::after {
    animation-name: glitch-animation;
    animation-duration: 4s;
    left: 4px;
    text-shadow: -1px 0 #ffa800;
    background: rgb(23, 23, 23);
}

.glitch::before {
    animation-name: glitch-animation-2;
    animation-duration: 6s;
    left: -4px;
    text-shadow: 1px 0 #00d8ff;
    background: #168233;
}

@mixin rect($top, $bottom) {
    clip: rect($top, 9999px, $bottom, 0);
}

/* Expanded Animations */
@keyframes glitch-animation {
    0% {
        @include rect(42px, 44px);
    }

    5% {
        @include rect(12px, 59px);
    }

    10% {
        @include rect(48px, 29px);
    }

    15.0% {
        @include rect(42px, 73px);
    }

    20% {
        @include rect(63px, 27px);
    }

    25% {
        @include rect(34px, 55px);
    }

    30.0% {
        @include rect(86px, 73px);
    }

    35% {
        @include rect(20px, 20px);
    }

    40% {
        @include rect(26px, 60px);
    }

    45% {
        @include rect(25px, 66px);
    }

    50% {
        @include rect(57px, 98px);
    }

    55.0% {
        @include rect(5px, 46px);
    }

    60.0% {
        @include rect(82px, 31px);
    }

    65% {
        @include rect(54px, 27px);
    }

    70% {
        @include rect(28px, 99px);
    }

    75% {
        @include rect(45px, 69px);
    }

    80% {
        @include rect(23px, 85px);
    }

    85.0% {
        @include rect(54px, 84px);
    }

    90% {
        @include rect(45px, 47px);
    }

    95% {
        @include rect(37px, 20px);
    }

    100% {
        @include rect(4px, 91px);
    }
}

@keyframes glitch-animation-2 {
    0% {
        @include rect(65px, 100px);
    }

    5% {
        @include rect(52px, 74px);
    }

    10% {
        @include rect(79px, 85px);
    }

    15.0% {
        @include rect(75px, 5px);
    }

    20% {
        @include rect(67px, 61px);
    }

    25% {
        @include rect(14px, 79px);
    }

    30.0% {
        @include rect(1px, 66px);
    }

    35% {
        @include rect(86px, 30px);
    }

    40% {
        @include rect(23px, 98px);
    }

    45% {
        @include rect(85px, 72px);
    }

    50% {
        @include rect(71px, 75px);
    }

    55.0% {
        @include rect(2px, 48px);
    }

    60.0% {
        @include rect(30px, 16px);
    }

    65% {
        @include rect(59px, 50px);
    }

    70% {
        @include rect(41px, 62px);
    }

    75% {
        @include rect(2px, 82px);
    }

    80% {
        @include rect(47px, 73px);
    }

    85.0% {
        @include rect(3px, 27px);
    }

    90% {
        @include rect(26px, 55px);
    }

    95% {
        @include rect(42px, 97px);
    }

    100% {
        @include rect(38px, 49px);
    }
}
</style>