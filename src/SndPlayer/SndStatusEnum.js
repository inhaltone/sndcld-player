export default class SndStatusEnum {
    #status;

    static LOADING = new SndStatusEnum('loading');
    static PLAYING = new SndStatusEnum('playing');
    static PAUSED = new SndStatusEnum('paused');

    constructor(status) {
        this.#status = status;
    }

    get status() {
        return this.#status;
    }
}