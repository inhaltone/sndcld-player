import './style.css'
import {SndPlayer} from "@inhaltone/sndcld-player";

window.onload = () => {
    SndPlayer.define('tony-montana');
    const snd = new SndPlayer({trackId: 1408738531});
    document.querySelector('#app').appendChild(snd);
    console.log(snd);
}