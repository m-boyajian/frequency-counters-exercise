// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
// Examples:
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Constraints:

// Time Complexity - O(N + M)

function isSubsequence(str1, str2) {
    let str1Pointer = 0;

    for(char of str2) {
        // Compare the current character of str2 with the character at str1Pointer in str1
        if(char === str1[str1Pointer]) {
            // If they match, increment str1Pointer
            str1Pointer++;
        }

        // If str1Pointer reaches the end of str1, all characters of str1 have been found in str2
        if(str1Pointer === str1.length) {
            return true;
        }
    }
    return false;
}
