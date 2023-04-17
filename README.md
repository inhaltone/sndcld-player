# SndPlayer
## Soundcloud Widget Component

A Native javascript Web Component integrated with SoundCloud Widget API

## Installing
Install from the command line:
```bash
$ npm install @inhaltone/snd-player@1.0.8
```
Install via package.json:
```bash
"@inhaltone/snd-player": "1.0.8"
```
## Example

### Javascript
```js
import {SndPlayer} from "@inhaltone/snd-player";

/** 
 * Register Custom element tag with 'define()' static method
 * This method must be called before instantiate and anly once
 */
SndPlayer.define('snd-player');

/**
 * Create an instance of an element by providing a valid soundcloud {trackId} on the contructor function as parameter
 */
const snd = new SndPlayer({
    trackId: 1408738531
});
/**
 * Then render SndPlayer instance to DOM
 */
document.getElementById('app').appendChild(snd);
```

### HTML
```html
<div id="app">
    <snd-player></snd-player>
</div>
```
