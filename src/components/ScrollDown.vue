<template>
  <div class="scroll-down">
    <div class="mouse">
      <div class="scroller"></div>
    </div>
  </div>
</template>

<style scoped>
.scroll-down {
  margin-top: 20vh;
  display: flex;
  justify-content: center;
}

.mouse {
  width: 3px;
  padding: 5px 7.5px;
  height: 18px;
  border: 2px solid var(--color-background-reverse);
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
}

.scroller {
  width: 3px;
  height: 8px;
  border-radius: 25%;
  background-color: var(--color-background-reverse);
  animation-name: scroll;
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
  animation-iteration-count: infinite;
}

@keyframes scroll {
  0% {
    opacity: 0;
  }
  10% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(10px);
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .scroll-down {
    margin-top: 5vh;
  }
}
</style>
