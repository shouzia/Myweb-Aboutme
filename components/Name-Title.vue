<template>
  <div class="Name-Title">
    <h1 class="Name">ShouZi</h1>
    <p class="Name-Content">Shooting stars never fly for me.</p>
  </div>
</template>

<script>
export default {}
</script>

<style>
.Name-Title {
  color: white;
  text-align: center;
  margin: 50px 0;
}
.Name {
  margin: 30px 0px;
  font-size: 3.2rem;
}
.Name-Content {
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1;
  color: rgba(255, 255, 255, 0.75);
}
@media screen and (max-width: 800px) {
  .Name {
    margin: 30px 0px;
    font-size: 2rem;
  }
  .Name-Content {
    font-size: 1.2rem;
  }
}
</style>