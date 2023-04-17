export function convertMillisToTimeString(ms) {
    const time = new Date(ms);
    const hours = time.getUTCHours().toString();
    const minutes = time.getUTCMinutes().toString().padStart(2, '0');
    const seconds = time.getUTCSeconds().toString().padStart(2, '0');
    if (hours === '0'){
        return minutes.concat(':', seconds)
    } else {
        return hours.concat(':', minutes).concat(':', seconds);
    }
}

export function appendElementAttributes(element, attrs) {
    for (const param of Object.entries(attrs)) {
        element.setAttribute(param[0], param[1]);
    }
    return element;
}
