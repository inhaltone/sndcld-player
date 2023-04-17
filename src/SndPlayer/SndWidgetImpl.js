import {appendElementAttributes} from "./Utilities.js";
import './api/widgetApi.js';

export default class SndWidgetImpl {
    #targetElement = String();
    #widget;
    paused = Boolean(true);

    constructor(targetElement, {trackId}) {
        this.#targetElement = targetElement;
        this.#widget = SndWidgetImpl.#setupWidgetIframe(this.#targetElement, trackId);
    }

    #setPauseState(value) {
        this.paused = value;
    }

    get widget() {
        return this.#widget;
    }

    onMounted(callback) {
        this.#widget.bind(SC.Widget.Events.READY, () => {
            this.#widget.isPaused(this.#setPauseState);
            this.#widget.getDuration((d) => {
                callback({duration: d})
            });
        });
    }

    onPlaying(callback) {
        this.#widget.bind(SC.Widget.Events.PLAY_PROGRESS, callback);
    }

    onLoading(callback) {
        this.#widget.bind(SC.Widget.Events.LOAD_PROGRESS, (e) => {
            console.log('onloading => ', e);
            callback(e);
        })
    }

    onPlay(callback) {
        this.#widget.bind(SC.Widget.Events.PLAY, callback);
    }

    onPause(callback) {
        this.#widget.bind(SC.Widget.Events.PAUSE, callback);
    }

    goTo(position) {
        this.#widget.seekTo(position);
    }

    getTimelinePosition(callback) {
        this.#widget.bind(SC.Widget.Events.SEEK, callback);
    }

    play() {
        this.#widget.play();
    }

    pause() {
        this.#widget.pause();
    }

    static #setupWidgetIframe(targetElement, trackId) {
        const options = {
            id: `snd-widget-${Date.now()}`,
            width: '100%',
            height: '50%',
            scrolling: 'no',
            allow: 'autoplay',
            frameBorder: 'no',
            src: `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&amp;`
        }
        const sndWidgetIframe = appendElementAttributes(document.createElement('iframe'), options);
        const rootEl = document.querySelector(targetElement);
        rootEl.appendChild(sndWidgetIframe);
        return SC.Widget(sndWidgetIframe.id);
    }
}
