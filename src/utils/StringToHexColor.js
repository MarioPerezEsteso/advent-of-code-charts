/**
 * These methods are based on this StackOverflow answer: 
 * @see https://stackoverflow.com/a/3426956
 */

const hashCode = str => {
    let hash = 0;

    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    return hash;
}

const stringToHexColor = str => {
    let hash = hashCode(str + '')

    let c = (hash & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return "#" + "00000".substring(0, 6 - c.length) + c;
}

module.exports = stringToHexColor