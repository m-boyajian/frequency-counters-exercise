// Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. You can assume that there will be no duplicate values in the array.

// Examples:

// ```jsx
// countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
// countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
// countPairs([4,6,2,7], 10) // 1 (4,6)
// countPairs([1,2,3,4,5], 10) // 0
// countPairs([1,2,3,4,5], -3) // 0
// countPairs([0,-4],-4) // 1
// countPairs([1,2,3,0,-1,-2],0) // 2
// ```

// **Constraints**

// Time Complexity - O(N * log(N))

// **or**

// Time Complexity - O(N)

function countPairs(arr, num) {
    let count = 0;
    // Use left and right pointers
    let left = 0;
    let right = arr.length - 1;
    // If left pointer is less than right it will loop through
    while(left < right) {
        let sum = arr[left] + arr[right];

        // If current pair sums to the value of num it increments and decrements from both sides to check for other valid pairs
        if(sum === num) {
            count++;
            left++;
            right--;
        // If sum of value pairs is less than num, then the left pointer will increment toward the right
        } else if (sum < num) {
            left++;
        // If the sum is greater than the num, then the right pointer will decrement toward the left
        } else {
            right--;
        }
    }
    
    return count;
}
