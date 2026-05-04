const countVowels = function(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
};

// Example usage
console.log(countVowels("Hello World")); // Output: 3
