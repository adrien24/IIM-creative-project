<template>
  <div class="pre-loader load-trigger">
    <div class="pre-loader-wrapper">
      <div class="mode-desc mode-desc--left">
        <div class="glitch">
	        <img src="../assets/img/trinity.jpg" alt="">
	        <div class="glitch__layers">
		        <div class="glitch__layer"></div>
		        <div class="glitch__layer"></div>
		        <div class="glitch__layer"></div>
	        </div>
        </div>
      </div>
      <div class="pre-loader-container">
        <div>
          <p class="mode-text">Mode stimulation émotionnelle</p>
        </div>
        <div>
          <p><span id="spin"></span></p>
        </div>
      </div>
      <div class="mode-desc mode-desc--right">
        <div class="glitch">
	        <img src="../assets/img/trinity.jpg" alt="">
	        <div class="glitch__layers">
		        <div class="glitch__layer"></div>
		        <div class="glitch__layer"></div>
		        <div class="glitch__layer"></div>
	        </div>
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
      tl.to('.pre-loader-container', { opacity: '1', duration: 1, delay: 1, scrollTrigger: '.load-trigger' })
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

    img {
      height: 60vh;
      position: relative;
      z-index: 2;
    }
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

    .concat {
      display: flex;
    }
  }
}

.mode-text {
  font-family: "Press Start 2P", cursive;
  font-size: 22px;
}

#spin {
    color: #3f3;
    margin-top: 30px;
    font-size: 40px;
    font-family: "Press Start 2P", cursive;
    display: block;
}

#spin:after {
  content:"";
  animation: spin 4s linear infinite;
}

@keyframes spin {
  0% { content:"Mélancolie"}
  50% { content:"Tristesse"}
  75% { content:"Adrénaline"}
  100% { content:"Violence"}
}

.glitch {
	position: relative;
	overflow: hidden;
}
.glitch img {
	position: relative;
	z-index: 2;
	display: block;
}
.glitch__layers {
	position: absolute;
	z-index: 3;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
}
.glitch__layer {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background-image: url("../assets/img/trinity.jpg");
	background-repeat: no-repeat;
	background-position: 0 0;
}
.glitch__layer:nth-child(1) {
	transform: translateX(-5%);
	animation: glitch-anim-1 2s infinite linear alternate;
}
.glitch__layer:nth-child(2) {
	transform: translateX(3%) translateY(3%);
	animation: glitch-anim-2 2.3s -.8s infinite linear alternate;
}
.glitch__layer:nth-child(3) {
	transform: translateX(5%);
	animation: glitch-anim-flash 1s infinite linear;
}
@keyframes glitch-anim-1 {
	0% {
		clip-path: polygon(0 0%, 100% 0%, 100% 5%, 0 5%);
	}
	10% {
		clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
	}
	20% {
		clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
	}
	30% {
		clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
	}
	40% {
		clip-path: polygon(0 35%, 100% 35%, 100% 35%, 0 35%);
	}
	50% {
		clip-path: polygon(0 45%, 100% 45%, 100% 46%, 0 46%);
	}
	60% {
		clip-path: polygon(0 50%, 100% 50%, 100% 70%, 0 70%);
	}
	70% {
		clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
	}
	80% {
		clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
	}
	90% {
		clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
	}
	100% {
		clip-path: polygon(0 60%, 100% 60%, 100% 70%, 0 70%);
	}
}
@keyframes glitch-anim-2 {
	0% {
		clip-path: polygon(0 15%, 100% 15%, 100% 30%, 0 30%);
	}
	15% {
		clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
	}
	25% {
		clip-path: polygon(0 8%, 100% 8%, 100% 20%, 0 20%);
	}
	30% {
		clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
	}
	45% {
		clip-path: polygon(0 45%, 100% 45%, 100% 45%, 0 45%);
	}
	50% {
		clip-path: polygon(0 50%, 100% 50%, 100% 57%, 0 57%);
	}
	65% {
		clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
	}
	75% {
		clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
	}
	80% {
		clip-path: polygon(0 40%, 100% 40%, 100% 60%, 0 60%);
	}
	95% {
		clip-path: polygon(0 45%, 100% 45%, 100% 60%, 0 60%);
	}
	100% {
		clip-path: polygon(0 11%, 100% 11%, 100% 15%, 0 15%);
	}
}
@keyframes glitch-anim-flash {
	0% {
		opacity: .2;
	}
	30%, 100% {
		opacity: 0;
	}
}

</style>