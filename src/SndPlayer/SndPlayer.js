import SndWidgetImpl from "./SndWidgetImpl.js";
import SndStatusEnum from "./SndStatusEnum.js";
import {appendElementAttributes, convertMillisToTimeString} from "./Utilities.js";
import Icons from "./SndIcons.js";

export default class SndPlayer extends HTMLElement {
    style;
    static purple = '#747bff';
    static violet = '#922cf9';
    static dark = '#1e1c20';

    constructor({trackId}) {
        super();
        this.color = '#6a6a6a';
        this.trackId = trackId;
        this.SndWidget = new SndWidgetImpl('#snd', {trackId: this.trackId});
        this.shadow = this.attachShadow({mode: 'open'});
        this.main();
    }

    main() { // callback fires when iframe is loaded and ready for interaction
        this.SndWidget.onMounted(({duration}) => {
            this.duration = duration;
            this.containerElement = SndPlayer.#setupContainerElement();
            this.buttonElement = SndPlayer.#setupButtonElement(Icons.button);
            this.timeElement = SndPlayer.#setupTimeElement();
            this.timeElapsedElement = SndPlayer.#setupTimeElapsedElement(this.duration);
            this.progressElement = SndPlayer.#setupProgressElement(this.duration);
            this.equalizerElement = SndPlayer.#setupEqualizerElement(Icons.eq);
            this.style = SndPlayer.#setupStyle(this.color);
            this.#constructElement();
            this.#attachListeners();
        })
    }

    #constructElement() {
        this.buttonElement.setAttribute('data-track', this.trackId);
        this.shadow.appendChild(this.style);
        this.shadow.appendChild(this.containerElement);
        this.containerElement.appendChild(this.buttonElement);
        this.containerElement.appendChild(this.equalizerElement);
        this.containerElement.appendChild(this.timeElement);
        this.containerElement.appendChild(this.progressElement);
        this.containerElement.appendChild(this.timeElapsedElement);
    }

    #attachListeners() {
        this.buttonElement.addEventListener('click', (e) => this.onPlayButton(e));
        this.progressElement.addEventListener('input', (e) => this.onProgressChange(e));
        this.SndWidget.onPlay(() => {
            console.log('on play');
            this.SndWidget.widget.isPaused(value => value
                ?
                this.updateButtonState(SndStatusEnum.PAUSED.status)
                :
                this.updateButtonState(SndStatusEnum.PLAYING.status)
            );

        })
        this.SndWidget.onPause(() => {
            console.log('on paused');
            this.updateButtonState(SndStatusEnum.PAUSED.status);
        })
        this.SndWidget.onPlaying(({currentPosition}) => {
            this.updateTimers(currentPosition);
            this.updateProgress(currentPosition);
            // console.log('on playing');
        })
        this.SndWidget.onLoading(() => {
            console.log('on loading');
            this.updateButtonState(SndStatusEnum.LOADING.status);
        })
        this.SndWidget.getTimelinePosition(({currentPosition}) => {
            // console.log('hello', e);
            this.updateTimers(currentPosition);
        });
    }

    onPlayButton() {
        this.SndWidget.widget.isPaused(value => value ? this.SndWidget.play() : this.SndWidget.pause());
    }

    onProgressChange({target}) {
        this.SndWidget.goTo(target.value);
        this.updateProgress(target.value);
    }

    updateButtonState(state) {
        switch (state) {
            case SndStatusEnum.LOADING.status:
                this.buttonElement.classList.add('loading');
                this.buttonElement.classList.remove('playing');
                this.equalizerElement.classList.remove('playing');
                break;
            case SndStatusEnum.PLAYING.status:
                this.buttonElement.classList.add('playing');
                this.buttonElement.classList.remove('loading');
                this.equalizerElement.classList.add('playing');
                break;
            case SndStatusEnum.PAUSED.status:
                this.buttonElement.classList.remove('playing');
                this.buttonElement.classList.remove('loading');
                this.equalizerElement.classList.remove('playing');
                break;
        }
    }

    updateTimers(time) {
        this.timeElement.innerText = convertMillisToTimeString(time);
        this.timeElapsedElement.innerText = '-' + convertMillisToTimeString(this.duration - time);
    }

    updateProgress(time) {
        this.progressElement.value = time;
        const min = this.progressElement.min;
        const max = this.progressElement.max;
        const val = this.progressElement.value;
        this.progressElement.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
    }

    static #setupContainerElement() {
        const container = document.createElement('div');
        container.setAttribute('class', 'snd-player');
        return container;
    }

    static #setupButtonElement(icon) {
        const button = document.createElement('button');
        button.setAttribute('class', 'snd-player-button');
        button.innerHTML = icon;
        return button;
    }

    static #setupTimeElement() {
        const timeElement = document.createElement('div');
        timeElement.setAttribute('class', 'snd-player-time');
        timeElement.innerText = convertMillisToTimeString(0);
        return timeElement;
    }

    static #setupProgressElement(trackDuration) {
        const params = {
            type: 'range',
            value: 0,
            min: 0,
            max: trackDuration,
            class: 'timeline-progress-bar'
        }

        const timeline = document.createElement('div');
        timeline.setAttribute('class', 'snd-player-timeline');
        timeline.style.width = '100%';
        const rangeInputElement = appendElementAttributes(document.createElement('input'), params);
        timeline.appendChild(rangeInputElement);
        return rangeInputElement;
    }

    static #setupTimeElapsedElement(trackDuration) {
        const timeElapsedElement = document.createElement('div');
        timeElapsedElement.setAttribute('class', 'snd-player-time');
        timeElapsedElement.innerText = convertMillisToTimeString(trackDuration);
        return timeElapsedElement;
    }

    static #setupEqualizerElement(eq) {
        const eqElement = document.createElement('div');
        eqElement.setAttribute('class', 'equaliser-container');
        eqElement.innerHTML = eq;
        return eqElement;
    }

    static define(tag) {
        try {
            customElements.define(tag, this);
        } catch (err) {
            console.log(`Couldn't (re)define ${tag} element`);
        }
    }

    static #setupStyle(color) {
        const styleElement = document.createElement('style');
        styleElement.textContent = `
        .snd-player {
            display: flex;
            align-items: center;
            margin: 40px 0;
            padding: 10px;
            border: 1px solid ${color};
            border-radius: 10px;
            background-color: ${SndPlayer.dark};
        }
        .snd-player-button {
            background-color: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            width: 33px;
            height: 33px;
            border: none;
            outline: none;
            padding: 0;
            margin: 0;
            cursor: pointer;
            flex-shrink: 0;
        }
        .snd-player-button span {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            position: absolute;
        }
        .snd-player-button svg {
            width: 100%;
            height: 100%;
        }
        .snd-player-button:hover svg {
            fill: #535bf2;
        }
        .snd-player-button .loading {
            opacity: 0;
        }
        .snd-player-button.loading .loading {
            opacity: 1;
            animation: 1s loading infinite;
        }
        @keyframes loading {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        .snd-player-button.loading .play {
            opacity: 0;
        }
        .snd-player-button .pause {
            opacity: 0;
        }
        .snd-player-button.playing .pause {
            opacity: 1;
        }
        .snd-player-button.playing .play {
            opacity: 0;
        }
        .snd-player-time {
            margin: 0 10px;
            font-size: 12px;
            width: 50px;
        }
        input[type="range"].timeline-progress-bar {
            cursor: pointer;
            display: flex;
            -webkit-appearance: none;
            width: 100%;
            height: 10px;
            margin: 0;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 5px;
            background-image: linear-gradient(#535bf2, #4e54c2);
            background-size: 0% 100%;
            background-repeat: no-repeat;
        }

        input[type="range"].timeline-progress-bar:hover {
            filter: brightness(1.1);
        }
        
        input[type="range"].timeline-progress-bar::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 18px;
            width: 18px;
            border-radius: 50%;
            background: #535bf2;
            border: 1px solid #c2c4e7;
            cursor: ew-resize;
            box-shadow: 0 0 2px 0 #555;
            transition: background .3s ease-in-out;
        }
        
        input[type=range].timeline-progress-bar::-webkit-slider-runnable-track {
            -webkit-appearance: none;
            box-shadow: none;
            border: none;
            background: transparent;
        }
        .equaliser-container {
            height: 10px;
            display: flex;
            margin-left: 10px;
            padding: 0 0 0 0;
            position: relative;
        }
        
        .colour-bar {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 0px;
            background: white;
        }
        .equaliser-container.playing .colour-bar{
            heigth: 10px;
        }
        .equaliser-column {
            width: 2px;
            float: left;
            margin: 0 1px 0 0;
            padding: 0;
            height: 10px;
            position: relative;
            list-style-type: none;
        }
        
        .equaliser-container.playing .equaliser-column:nth-child(1) .colour-bar {
            animation: color-bar 2s 1s ease-out alternate infinite;
        }
        
        .equaliser-container.playing .equaliser-column:nth-child(2) .colour-bar {
            animation: color-bar 2s 0.5s ease-out alternate infinite;
        }
        
        .equaliser-container.playing .equaliser-column:nth-child(3) .colour-bar {
            animation: color-bar 2s 1.5s ease-out alternate infinite;
        }
        
        .equaliser-container.playing .equaliser-column:nth-child(4) .colour-bar {
            animation: color-bar 2s 0.25s ease-out alternate infinite;
        }
        
        .equaliser-container.playing .equaliser-column:nth-child(5) .colour-bar {
            animation: color-bar 2s 2s ease-out alternate infinite;
        }
        
        .equaliser-column:last-child {
            margin-right: 0;
        }
        
        @keyframes color-bar {
            0% {
                height: 1px;
                background: white;
            }
            10% {
                height: 3px;
                background: white;
            }
            20% {
                height: 5px;
                background: white;
            }
            30% {
                height: 2px;
                background: white;
            }
            40% {
                height: 7px;
                background: white;
            }
            50% {
                height: 9px;
                background: white;
            }
            60% {
                height: 3px;
                background: white;
            }
            70% {
                height: 8px;
                background: white;
            }
            80% {
                height: 5px;
                background: white;
            }
            90% {
                height: 3px;
                background: white;
            }
            100% {
                height: 1px;
                background: white;
            }
        }  
           `;
        return styleElement;
    }
}
