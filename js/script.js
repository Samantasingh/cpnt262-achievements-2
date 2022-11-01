// list of words with commas
const items = ["Bread", "shampoo", "milk", "shampoo", "pasta", "toothpaste", "beans", "chicken", "tomatoes"];
let text = items.join(", " ) + " & " + items [items.length -7];
document.getElementById('output').innerHTML = text;

// word counter
 let textArea = document.getElementById("text-area");
 let result = document.getElementById("result");
 let limit = 50;

 result.textContent = 0 + "/" + limit;

 textArea.addEventListener("input",function(){
  let textLength = textArea.value.length;
  result.textContent = textLength + "/" + limit;

  // red colour numbers = over the limit
if(textLength > limit){
    textArea.style.borderColor = "#9d0208";
    result.style.color = "#d90429";
  }
  
  // green colour numbers = within the limit
  else{
    textArea.style.borderColor = "#386641";
    result.style.color = "#6a994e";
  }
});