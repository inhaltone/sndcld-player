import './style.css'
import {SndPlayer} from "../src/main.js";

window.onload = () => {
    SndPlayer.define('tony-montana');
    const snd = new SndPlayer({trackId: 1408738531});
    document.querySelector('#app').appendChild(snd);
    console.log(snd);
}