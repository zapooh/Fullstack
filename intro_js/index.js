// Oppgave 1
// Funksjon for å fjerne elementet
function removeElement() {
    let element = document.getElementById("remove");
    if (element) {
        element.parentNode.removeChild(element);
    }
}

// Legg til en event listener til knappen
let button = document.getElementById("remove-btn");
if (button) {
    button.addEventListener("click", removeElement);
}

  
  // Oppgave 2

  function changeText() {
    document.getElementById("change").innerText = "Dette er den nye teksten jeg har valgt!";
}

  // Oppgave 3


let inputBox = document.getElementById("input");

inputBox.addEventListener("input", function() {

  let text = inputBox.value;


  document.getElementById("input-text").innerText = text;
});


  // Oppgave 4
  const myList = ["item one", "item two", "item three"];

  document.getElementById("write-list").addEventListener("click", function() {
    const ulElement = document.getElementById("ul");
    
    
    ulElement.innerHTML = '';

    myList.forEach(item => {
        const liElement = document.createElement("li");
        liElement.innerText = item;
        ulElement.appendChild(liElement);
    });
});

  // Oppgave 5

  document.getElementById("create").addEventListener("click", function() {
    
    const elementType = document.getElementById("select").value;
    const textValue = document.getElementById("text").value;

    const newElement = document.createElement(elementType);
    newElement.innerText = textValue;

    
    const placeholder = document.getElementById("placeholder");
    placeholder.innerHTML = ''; 
    placeholder.appendChild(newElement);
});


  // Oppgave 6

  document.getElementById("remove-li").addEventListener("click", function() {
    const ulElement = document.getElementById("list");
    const liElements = ulElement.getElementsByTagName("li");
    
    if (liElements.length > 0) {
        ulElement.removeChild(liElements[liElements.length - 1]);
    }
});



  // Oppgave 7

  document.getElementById("name").addEventListener("keyup", function() {
    const inputValue = this.value;
    const orderButton = document.getElementById("order");
    
    if (inputValue.length > 4) {
     
        orderButton.disabled = true;
        
    } else {
        orderButton.disabled = false;
        orderButton.style.border = "none"; 
    }
});


  // Oppgave 8
  
  document.getElementById("color").addEventListener("click", function() {
    const ulChildren = document.querySelector(".children").children;
    
    for (let i = 0; i < ulChildren.length; i++) {
        if ((i + 1) % 2 === 0) { // Partall
            ulChildren[i].style.border = "1px solid pink";
        } else { // Oddetall
            ulChildren[i].style.border = "1px solid green";
        }
    }
});
