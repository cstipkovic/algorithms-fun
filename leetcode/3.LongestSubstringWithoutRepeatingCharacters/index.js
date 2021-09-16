module.exports.lengthOfLongestSubstring = (s) => {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        let currentStringSet = new Set();

        for (let j = i; j < s.length; j++) {
            if (currentStringSet.has(s[j])) {
                break;
            } else {
                currentStringSet.add(s[j]);
            }
        }

        count = Math.max(count, currentStringSet.size);
    }

    return count;
};
