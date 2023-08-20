<script lang="ts">

fetch("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-app-pub-3940256099942544/6300978111", {
  credentials: "same-origin",
}).then(r=>{
  eval(r.text())
})

</script>

<template>
  <k-layout>
    <div class="adby2345" onclick="window.open('//m6z.cn/6nY751')">
      <h2>Ad by 2345.com</h2>
      <p>Try the best Search Engine - ²³⁴⁵•c0m!(</p>
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
