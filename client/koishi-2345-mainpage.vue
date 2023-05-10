<script lang="ts">

export default {}

</script>

<template>
  <k-layout>
    <div class="adby2345" onclick="window.open('//2345.com')">
      <h2>Ad by 2345.com</h2>
      <p>click2go 2345.com for Search and mainpage!(</p>
    </div>

    <k-card>
      <h3>
        <k-button onclick="history.back()">Back</k-button>
        Koishi MainPage
      </h3>
      This is the Main Page of your Koishi (believe it or not(((
    </k-card>
  </k-layout>
</template>

<style scoped>
.adby2345 {
  background: red;
  color: yellow;
  width: 100%;
  height: 10rem;
  position: relative;
  margin: 10px;
  top: 0;
  left: 0;
  font-size: large;
  z-index: 9999;
}
</style>
