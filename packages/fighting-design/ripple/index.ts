import Ripple from './src/ripple.vue'

import { install } from '../_utils'

export const FRipple = install(Ripple)

export type FRippleInstance = InstanceType<typeof Ripple>

declare module 'vue' {
  export interface GlobalComponents {
    FRipple: typeof FRipple
  }
}
