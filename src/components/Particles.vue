<template>
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="{
        background: {
          color: {
            value: 'black',
          },
        },
        fpsLimit: 120,
        interactivity: {
          detectsOn: 'window',
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 2,
              opacity: 0.8,
              size: 20,
            },
            push: {
              default: true,
              groups: [],
              quantity: 4,
              speed: 2,
              maxSpeed: 10,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
              factor: 100,
              speed: 2,
              maxSpeed: 10,
              easing: 'ease-out-quad',
              divs: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: 'ease-out-quad',
                selectors: [],
              },
            },
          },
        },
        particles: {
          color: {
            value: ['#ff6f91', '#f9f871', '#d65db1', '6fbffd'],
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'split',
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: isSmallScreen ? 20 : 40,
          },
          opacity: {
            value: 0.6,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }"
    />
</template>

<script>
import { loadFull } from "tsparticles";
export default {
  name: "ParticlesComponent",
  data() {
    return {
      particlesInit: null,
      particlesLoaded: null,
    };
  },
  computed: {
    isSmallScreen () {
      return window.innerWidth < 768 
    } 
  },
  created() {
    this.particlesInit = async (engine) => {
      await loadFull(engine);
    };

    this.particlesLoaded = async (container) => {
      console.log("Particles container loaded", container);
    };
  },
};
</script>
