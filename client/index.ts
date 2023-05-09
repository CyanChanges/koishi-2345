import { Context } from '@koishijs/client'
import ConfigPage from './koishi-2345-config.vue'

export default (ctx: Context) => {
  // 此 Context 非彼 Context
  // 我们只是在前端同样实现了一套插件逻辑
  ctx.page({
    id: '1',
    name: 'Koishi2345',
    path: '/koishi2345',
    component: ConfigPage,
  })
}
