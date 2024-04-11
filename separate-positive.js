// Write a function called ***separatePositive*** which accepts an array of non-zero integers. Separate the positive integers to the left and the negative integers to the right. The positive numbers and negative numbers need not be in sorted order. The problem should be done in place (in other words, do not build a copy of the input array).

// Examples:

// ```jsx
// separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
// separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
// separatePositive([-5, 5]) // [5, -5]
// separatePositive([1, 2, 3]) // [1, 2, 3]
// ```

// **Constraints**

// Time Complexity: O(N)

function separatePositive(arrNums) {
    let left = 0;
    let right = arrNums.length - 1;

    while(left < right) {
        // Moves left pointer towards the right until it reaches negative int
        while(arrNums[left] > 0) {
            left++;
        }
        // Moves right pointer towards the left until it encounters a positive int
        while(arrNums[right] < 0) {
            right--;
        }
        // Swap the pos & neg intgs
        if (left < right) {
            let temp = arrNums[left];
            arrNums[left] = arrNums[right];
            arrNums[right] = temp;
            // Move pointers for next iteration
            left++;
            right--;
        }
    }
    return arrNums;
}
