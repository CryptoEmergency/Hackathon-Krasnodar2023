import { initMap } from 'cemjs-all'
import cemconfig from './cemconfig.json'
import frontends from './frontends.json'

cemconfig.microFrontends = frontends

export default function () {
    initMap(cemconfig)
}