import { JSDOM } from 'jsdom'
const dom = new JSDOM()

// global['window'] = undefined
// global['document'] = undefined

global['window'] = dom.window
global['document'] = dom.window.document
