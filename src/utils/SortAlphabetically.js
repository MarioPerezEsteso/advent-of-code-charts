/**
 * Sort alphabetically an array of objects by some specific key.
 * 
 * @param {String} property Key of the object to sort.
 * @param {String} order 'ASC' or 'DESC'.
 */
const sortAlphabetically = (property, order = 'ASC') => {
    let sortOrder = order == 'ASC' ? 1 : -1;

    return (a, b) => (sortOrder == -1) ?
        b[property].localeCompare(a[property]) : a[property].localeCompare(b[property]);
}

module.exports = sortAlphabetically