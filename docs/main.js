import './style.css'
import {SndPlayer} from "@inhaltone/snd-player";

window.onload = () => {
    SndPlayer.define('snd-player');
    const snd = new SndPlayer({trackId: 1408738531});
    document.querySelector('#app').appendChild(snd);
}