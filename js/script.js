// list of words with commas
const items = ["Bread", "shampoo", "milk", "shampoo", "pasta", "toothpaste", "beans", "chicken", "tomatoes"];
let text = items.join(", " ) + " & " + items [items.length -7];
document.getElementById('output').innerHTML = text;