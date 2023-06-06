let alphabet_letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let excluded_letters = ['a', 'm', 'u'];
let alphabet_letters_filtered = alphabet_letters.filter(letter => !excluded_letters.includes(letter));

document.getElementById('alphabet').innerHTML = alphabet_letters_filtered.join(' | ');
document.getElementById('excluded-letters').innerHTML = excluded_letters.join(' | ');