module.exports.intersect = (nums1, nums2) => {
    let shortArray = [];
    let longArray = [];
    let tmpArray = [];

    shortArray = nums1.length <= nums2.length ? nums1 : nums2;
    longArray = nums2.length >= nums1.length ? nums2 : nums1;

    for (let i = 0; i < shortArray.length; i++) {
        for (let j = 0; j < longArray.length; j++) {
            if (shortArray[i] === longArray[j]) {
                tmpArray.push(shortArray[i]);
                longArray.splice(j, 1);

                break;
            }
        }
    }

    return tmpArray;
};
