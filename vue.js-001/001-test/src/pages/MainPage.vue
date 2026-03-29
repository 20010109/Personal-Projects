<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

function goToTest() {
    router.push('/test')
}

</script>

<template>
  <header>
    <h1> JL's Portfolio</h1>
  </header>
  <main>
    
  </main>

</template>

<style scoped>
@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}
</style>
