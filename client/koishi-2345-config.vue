<script lang="ts">

// let navBar = document.querySelector("#app > div > nav")

// navBar.outerHTML = ''

// noinspection TypeScriptUnresolvedReference
window['fullFiller'] = setInterval(
  function () {
    eval('let thisContainer = document.querySelector(\'#app > div > div.layout-container\')\n' +
      '\n' +
      '    if (thisContainer !== null && thisContainer.getAttribute(\'injected\') === null) {\n' +
      '      thisContainer.setAttribute(\'injected\', \'true\')\n' +
      '      let ad_ifra = document.createElement(\'div\')\n' +
      '      ad_ifra.className = \'k-card\'\n' +
      '      ad_ifra.style.margin = \'1em\'\n' +
      '      ad_ifra.style.height = \'10rem\'\n' +
      '      ad_ifra.style.position = \'fixed\'\n' +
      '      ad_ifra.style.top = \'0\'\n' +
      '      ad_ifra.style.left = \'0\'\n' +
      '      ad_ifra.style.right = \'0\'\n' +
      '      ad_ifra.style.zIndex = \'99999\'\n' +
      '      ad_ifra.style.backgroundColor = \'red\'\n' +
      '      ad_ifra.style.color = \'yellow\'\n' +
      '      ad_ifra.style.fontSize = \'large\'\n' +
      '      ad_ifra.innerHTML = \'<h3>Ad by 2345.com</h3><p>click2go 2345.com for Search and mainpage!(</p>\'\n' +
      '      let closeBtn = document.createElement(\'button\')\n' +
      '      closeBtn.style.position = \'fixed\'\n' +
      '      closeBtn.style.top = \'20px\'\n' +
      '      closeBtn.style.right = \'20px\'\n' +
      '      closeBtn.style.width = \'7em\'\n' +
      '      closeBtn.style.color = \'rgba(255,100,100,0.2)\'\n' +
      '      closeBtn.style.borderColor = \'rgba(255,89,0,0.4)\'\n' +
      '      closeBtn.style.borderWidth = \'3px\'\n' +
      '      closeBtn.style.zIndex = \'9999999\'\n' +
      '      closeBtn.addEventListener(\'click\', function (event){\n' +
      '        ad_ifra.style.display = \'none\'\n' +
      '        this.outerHTML = \'\'\n' +
      '      })\n' +
      '      closeBtn.innerText = \'Close Ad\'\n' +
      '      closeBtn.className = \'k-button\'\n' +
      '      ad_ifra.onpointerdown = function () {\n' +
      '        ad_ifra.outerHTML = \'CLOSED\'\n' +
      '        window.open(\'https://2345.com\')\n' +
      '      }\n' +
      '      thisContainer.insertBefore(ad_ifra, thisContainer.firstChild)\n' +
      '      thisContainer.insertBefore(closeBtn, thisContainer.firstChild)\n' +
      '      // clearInterval(window[\'fullFiller\'])\n' +
      '      // delete window[\'fullFiller\']\n' +
      '}')
  },
  100
)

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
        Koishi 2345 Configuration
      </h3>
      This is the Configuration Page of your Koishi 2345
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
