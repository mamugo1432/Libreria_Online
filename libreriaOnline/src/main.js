
import { Header } from './components/Header'

document.querySelector('#app').innerHTML = `
${Header()}
`

setupCounter(document.querySelector('#counter'))
