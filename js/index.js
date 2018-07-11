
//Select the button element
const button = document.querySelector('.button');
console.log(button);

// add an event listener
//callbacks
//changinges classes
button.addEventListener("click", function(){
  button.classList.add('red')
})