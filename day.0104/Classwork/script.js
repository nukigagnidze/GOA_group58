// 1
function isValid(s) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of s) {
        if (char in map) {
            if (stack.pop() !== map[char]) return false;
        } else {
            stack.push(char);
        }
    }
    
    return stack.length === 0;
}

console.log(isValid("()")); 
console.log(isValid("()[]{}"));
console.log(isValid("(]")); 
console.log(isValid("([])")); 

// 2
function removeDuplicates(nums) {
    let k = 0;
    for (let i of nums) if (i !== nums[k]) nums[++k] = i;
    return k + 1;
}

console.log(removeDuplicates([1,1,2])); 
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

// 3
function lengthOfLastWord(s) {
    return s.trim().split(" ").pop().length;
}

console.log(lengthOfLastWord("Hello World")); 
console.log(lengthOfLastWord("   fly me   to   the moon  ")); 
console.log(lengthOfLastWord("luffy is still joyboy")); 