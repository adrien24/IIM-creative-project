<template>
  <div class="pre-loader">
    <div class="pre-loader-wrapper">
      <div class="emotions-desc emotions-desc--left">
        <span class="stimulation">Je suis Trinity, logiciel de stimulation d’émotions</span>
      </div>
      <div class="pre-loader-container">
        <div class="container">
          <div class="stack" style="--stacks: 3;">
            <span style="--index: 0;">TRINITY</span>
            <span style="--index: 1;">TRINITY</span>
            <span style="--index: 2;">TRINITY</span>
          </div>
        </div>
        <video autoplay loop muted class="emotions-video">
          <source src="../assets/videos/emotions.mp4" type="video/mp4">
        </video>
        <Soundbar @click="son()" class="emotionalSound" emotional="emotionalSound" />
      </div>
      <div class="emotions-desc emotions-desc--right">
        <span class="emotions">Taux de compatibilité élevé</span>
      </div>
    </div>
  </div>
</template>


<script>
import Soundbar from './Soundbar.vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

export default {

  components: {
    Soundbar
  },

  mounted() {
    this.animation();
  },

  methods: {
    animation() {
      let tl = gsap.timeline({ scrub: 1 });
      tl.to('.emotions-desc--left', { x: '0%', duration: 1, delay: 1, scrollTrigger: '.stimulation' })
      tl.to('.emotions-desc--right', { x: '0%', duration: 1, delay: 1, scrollTrigger: '.emotions' })
    },


    son() {
      let emotional = document.querySelector('.emotions-video');
      let soundBars = document.querySelector('.emotionalSound');
      soundBars.classList.toggle('paused');
      emotional.muted = !emotional.muted;
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

  &-wrapper {
    display: flex;
    justify-content: space-between;
  }

  &-container {
    position: relative;
    z-index: 2;
    margin: 0 150px 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;



    .header {
      position: relative;
      width: max-content;
      margin: 0 auto;

      .before {

        &::before {
          content: attr(data-text);
          position: absolute;
          overflow: hidden;
          color: #FFF;
          transition: 1s;
          width: 0%;
          animation: fill 2s cubic-bezier(0.6, 0, 0.4, 1) forwards;
        }
      }
    }

    .concat {
      display: flex;
    }
  }
}

.emotions-desc--right {
  transform: translateX(100%);
  transition: all 1s ease-in-out;
}

.emotions-desc {
  position: relative;
  z-index: 2;
  font-size: 40px;
  text-transform: uppercase;
  font-family: 'RemboyR';
  width: 300px;
  text-align: end;





  &--left {
    display: flex;
    flex-direction: column-reverse;
    text-align: start !important;
    transform: translateX(-100%);
    transition: all 1s ease-in-out;
  }

  span {
    color: white;
  }
}

.container {
  color: var(--color);
  font-size: 10rem;
  margin-bottom: -56px;
  font-family: 'Megatron';
  display: flex;
  flex-direction: column;
  mix-blend-mode: difference;
}

.stack {
  display: grid;
  grid-template-columns: 1fr;
}

.stack span {
  font-weight: bold;
  grid-row-start: 1;
  grid-column-start: 1;
  font-size: 10rem;
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