const describe = require('mocha').describe;
const it = require('mocha').it;
const assert = require('chai').assert;

const index = require('./index.js');

describe('4. Median of Two Sorted Arrays', () => {
    it('should return median value 2.0 for [1, 3] and [2]', () => {
        let nums1 = [1, 3];
        let nums2 = [2];

        assert.equal(2.0, index.findMedianSortedArrays(nums1, nums2));
    });

    it('should return median value 2.5 for [1,2] and [3,4]', () => {
        let nums1 = [1, 2];
        let nums2 = [3, 4];

        assert.equal(2.5, index.findMedianSortedArrays(nums1, nums2));
    });

    it('should return median value -1.0 for [3] and [-2,-1]', () => {
        let nums1 = [3];
        let nums2 = [-2, -1];

        assert.equal(-1.0, index.findMedianSortedArrays(nums1, nums2));
    });
});
