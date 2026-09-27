const button = document.querySelector(".menu-button");
const list = document.querySelector("#primary-nav");

// TODO 1: progressively enhance the document and initialize the narrow state.
document.documentElement.classList.add("js");   //adds js to the html's class, letting you know the page is using html and activating the selectors that have .js as their parent
button.hidden = false;                          //removes hidden from the menu button when javascript loads - otherwise it is hidden by default
list.dataset.open = "false";                    //adds data-open property to the the menu and sets it to false initially
// TODO 2: write one named function that keeps aria-expanded and visible state synchronized.
function setMenu(open) {                        //used to set the menu attributes which opens or closes the menu
  button.setAttribute("aria-expanded", String(open));   //sets the button aria-expanded attribute to whatever value open has (true or false)
  list.dataset.open = String(open);             //sets the data-open value to whatever value open has (true or false)
}
// TODO 3: use the native button's click event to toggle the state.
button.addEventListener("click", () => {        //activates the setMenu function when the user clicks the menu button
  setMenu(button.getAttribute("aria-expanded") !== "true"); //checks what the current aria-expanded value is and sends the opposite (if it is true it passes false, and vice versa)
});
// TODO 4: close on Escape when open, then return focus to the button.
document.addEventListener("keydown", (event) => { //activates when a specific key is pressed
  if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") { //only activates if both the key pressed is the escape key, and the aria-expanded value is set to true
    setMenu(false); //false will be passed to the button and data-set, which tells the menu to close
    button.focus(); //adds the focus back to the button
  }
});
// Add a comment above every logical step explaining what it does and why it is needed.
