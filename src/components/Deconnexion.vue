<template>
  <div class="pre-loader load-trigger">
    <div class="pre-loader-wrapper">
      <div class="pre-loader-container">
        <div class="deconnexion">
          <p>Déconnexion</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

export default {
  mounted() {
    this.animation();
  },

  methods: {
    animation() {
      let tl = gsap.timeline();
      tl.to('.pre-loader-container', { opacity: '1', duration: 1, delay: 2, scrollTrigger: '.load-trigger' })
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
    margin: 0 35px 56px;
    display: flex;
    width: 45vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;

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
  }
}

</style>