/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
module.exports.findMedianSortedArrays = (nums1, nums2) => {
    let arrayMerged = nums1.concat(nums2);
    let arraySize = arrayMerged.length;

    arrayMerged.sort((a, b) => {
        return a - b;
    });

    if (arraySize % 2 === 1) {
        return parseFloat(arrayMerged[Math.floor(arraySize / 2)]);
    }

    let arrayHalf = arraySize / 2;

    return parseFloat(
        (arrayMerged[arrayHalf - 1] + arrayMerged[arrayHalf]) / 2
    );
};
