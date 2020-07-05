/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const map = new Map();
    const arrS = s.split('');
    const arrT = t.split('');

    arrS.forEach((s, i) => {
        map.set(s, map.has(s) ? map.get(s) + 1 : 1);
        map.set(arrT[i], map.has(arrT[i]) ? map.get(arrT[i]) - 1 : -1);
    });

    const arr = Array.from(map.values());
    return arr.reduce((acc, cur) => {
        return acc && cur === 0;
    }, true);
};