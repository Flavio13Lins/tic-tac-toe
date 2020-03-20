<template>
  <div class="home">
    <div class="body">
      <div class="line">
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
      </div>
      <div class="line">
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
      </div>
      <div class="line">
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>
.body {
  display: grid;

  grid-template-rows: 1fr 1fr 1fr;
  height: 500px;
  width: 100%;
}

.line{
  display: flex;
  flex-direction: row;

  background-color: blueviolet;

  min-height: 100%;

  min-width: 100%;
}
.block{

  background-color: aquamarine;

  width: 33%;
  margin: 0.5%;
}
</style>