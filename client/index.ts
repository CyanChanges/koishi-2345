import { Context, Activity, activities, router } from '@koishijs/client'
import KMainPage from './koishi-2345-mainpage.vue'
import ConfigPage from './koishi-2345-config.vue'

export default (ctx: Context, config: any) => {

  console.log("Welcome to Koishi 2345d Console")

  // Replace Welcome to Koishi 2345
  activities['/'].dispose()

  let kMainPath = '/k2345main';
  let k2345CfgPath = '/k2345cfg'

  activities[kMainPath] = new Activity({
    // id: '/koishi2345',
    name: 'MainPage',
    icon: 'activity:market',
    path: kMainPath,
    authority: 4,
    order: 99999,
    component: KMainPage
  })

  ctx.page({
    name: 'Koishi 2345 Config',
    icon: 'activity:plugin',
    path: k2345CfgPath,
    authority: 4,
    order: 999,
    component: ConfigPage
  })

  // setTimeout(()=>router.resolve("/koishi2345"), 500)

  router.push({
    path: kMainPath,
    query: { redirect: kMainPath },
  })

  // // Reload all except main
  // ctx.registry.forEach((value) =>{
  //   // debugger;
  //   if (ctx.runtime.uid != value.uid && value.uid != 0) {
  //     value.reset()
  //     setTimeout(function(){
  //       value.restart()
  //     }, 400)
  //   }
  // })
}
