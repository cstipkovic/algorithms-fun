const describe = require('mocha').describe;
const it = require('mocha').it;
const assert = require('chai').assert;

const index = require('./index.js');

describe('3. Longest Substring Without Repeating Characters', () => {
    it('should return 3 for string "abcabcbb"', () => {
        let s = 'abcabcbb';

        assert.equal(index.lengthOfLongestSubstring(s), 3);
    });

    it('should return 1 for string "bbbbb"', () => {
        let s = 'bbbbb';

        assert.equal(index.lengthOfLongestSubstring(s), 1);
    });
});
