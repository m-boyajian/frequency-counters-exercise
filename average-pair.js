// Write a function called averagePair. Given a sorted array of integers 
// and a target average, determine if there is a pair of values in the 
// array where the average of the pair equals the target average. There 
// may be more than one pair that matches the average target.

// Constraints:
// Time Complexity: O(N)
// Examples:
// averagePair([1, 2, 3], 2.5); // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
// averagePair([], 4); // false

function averagePair(arr, targetAvg) {
    let left = 0;
    let right = arr.length -1;

    while (left < right) {
        let avg = (arr[left] + arr[right]) / 2;

        if (avg === targetAvg) {
            return true;
        } else if (avg < targetAvg){
            // If the average of the 1st two nums was smaller than the targetAvg, 
            // then we move the left pointer one index to the right and do antoher 
            // round
            left++;
        } else {
            right--;
        }
        return false;
    }
}
