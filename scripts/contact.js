// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single 
// <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's 
// .style.fontSize, or by updating its .classList.

document.addEventListener("DOMContentLoaded", function () {
  
  const submitButton = document.getElementById("submit-button");
  const contactPage = document.getElementById("contact-page");
  const header = document.querySelector("header"); 

  submitButton.addEventListener("click", function (event) {
    event.preventDefault(); 
  
    contactPage.style.display = "none";

 
    const message = document.createElement("p");
    message.textContent = "Thank you for your message!";
    message.classList.add("message");


    header.insertAdjacentElement("afterend", message);
    
  });
});