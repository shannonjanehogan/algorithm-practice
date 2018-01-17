
// Attempt #1
// Time complexity: O(n^2)
// Space complexity: 0(1)
var twoSum = function(nums, target) {
    var result1 = 0;
    var result2 = 0;
    for (var i = 0; i < nums.length; i++) {
        for (var z = i + 1; z < nums.length; z++) {
            if (nums[i] + nums[z] === target) {
                result1 = i;
                result2 = z;
            }
        }
    }
    return [result1, result2];
};

twoSum([3, 2, 4], 6);
