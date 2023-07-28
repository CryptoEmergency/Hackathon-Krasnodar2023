import { initMap } from 'cemjs-all'
import cemconfig from './cemconfig.json'
import microFrontends from './microFrontends.json'

cemconfig.microFrontends = microFrontends

export default function () {
    initMap(cemconfig)
}