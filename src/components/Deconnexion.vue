<template>
  <div class="pre-loader load-trigger">
    <img src="../assets/img/deconnexion.gif" alt="deconnexion trinity" class="image">
    <button @click="die">
      <div id="deconnexion"></div>
    </button>
  </div>
</template>


<script>
import { Messenger } from '../assets/js/buttonGlitchDeco.js'

export default {

  mounted() {
    var messenger = new Messenger($('#deconnexion'));

  },

  methods: {
    die() {
      document.querySelector('body').style.overflow = 'hidden';
      document.querySelector('.image').style.display = 'block';
      setTimeout(() => {
        location.reload();
      }, 700);

    }
  },
}

</script>

<style scoped lang="scss">
.pre-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-image: url('../assets/img/bg_tv.gif');

  img {
    position: absolute;
    display: none;
    height: 100vh;
    width: 100%;

  }

  button {
    color: #3f3;
    background-color: transparent;
    font-family: 'Press Start 2P', cursive;
    border: none;
    padding: 16px;
    font-size: 32px;
    cursor: pointer;
    width: 352px;
    height: 32px;
  }
}
</style>