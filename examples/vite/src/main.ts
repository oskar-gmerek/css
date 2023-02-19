import './style.css'
import 'master.css'
import { setupCounter } from './counter'

const counterElement = document.querySelector<HTMLButtonElement>('#counter')
counterElement?.classList.add('~transform|.3s', 'translateY(-5):hover')

setupCounter(counterElement!)

import { options } from '@master/css-compiler'
console.log(options)