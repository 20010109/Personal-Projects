<script setup>
import "./assets/base.css"
import MainPage from "./pages/MainPage.vue"


</script>

<template>
  <Header>
    <h1>Lorenz Water Refilling</h1>
  </Header>
  <body>
    <div class="Introduction">
      <div class="Introduction_LeftDiv">
          <h1>Introduction</h1>
          <p>Welcome to this page! Here will be the introduction of Lorenz Water Refilling! </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, est id vulputate consequat, lorem urna sollicitudin sem, vel porta neque purus in dolor. Donec aliquam enim in gravida gravida. Pellentesque laoreet metus vitae tellus tempus, quis semper augue dapibus. Nunc ut est in purus pharetra gravida in ut leo. Sed feugiat lacus at suscipit ultrices. Aenean in aliquam ligula. Aliquam ut pharetra dolor. Pellentesque pharetra fermentum diam, quis gravida arcu semper sit amet. Proin ac ornare erat. Nam in ullamcorper lacus, vel consequat nisl. In dolor arcu, varius quis rutrum nec, luctus a lacus. Quisque lacinia, urna ut ullamcorper imperdiet, justo mauris varius sem, consequat gravida urna arcu at lorem. Mauris tellus sem, pellentesque id malesuada luctus, egestas sit amet eros. Proin vitae interdum sem.</p>
      </div>
      <div class="Introduction_RightDiv">
        <img src="./components/water-drop-impact-stockcake.webp" alt="water.webp">
      </div>
    </div>
    <div class="Services">
      <h1>This is the second div</h1>
    </div>
  </body>
</template>

<style scoped>
  body{
    color: var(--color-text);
    background-color: var(--color-background-mute);
  }

  .Introduction{
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
  }

  .Introduction h1{
    margin: 20px;
    grid-column: span 1;
  }

  .Introduction_LeftDiv{
    padding: 20px;
  }

  .Introduction_RightDiv{
    grid-row: span 2;
  }
  .Introduction_RightDiv img{
    border-radius: 100px 0px 0px 1000px;
  }
  
  header {
    display: flex;
    width: 100vw;
    height: 100px;
    background-color: var(--color-background);
    color: var(--vt-c-white);
    align-items: center;
    padding: 0 50px;
  }

</style>
