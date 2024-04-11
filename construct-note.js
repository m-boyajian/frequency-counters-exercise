// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.
// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.
// Constraints:
// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:
// Examples:
// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

function constructNote(msg, letters) {
    let msgPointer = 0;

    const lettersMap = {};
    for(const char of letters) {
        lettersMap[char] = (lettersMap[char] || 0) +1;
    }

    while(msgPointer < msg.length) {
        const char = msg[msgPointer];

        if(!lettersMap[char] ||lettersMap[char] === 0) {
            return false;
        }
        // Decrement count of the character in the letters
        lettersMap[char]--;
        // Move to the next char in the message
        msgPointer++;
    }
    // If all chars of the msg are found i the letters return true
    return true;
}
