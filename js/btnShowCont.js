//****************************************** */
// //*************************************** */
// Sidbar Selections
//****************************************** */
// //*************************************** */

//get nodelist A and nodelist B
//set click event on nodelist A elements
//check their elements data-attributes for a match
//if they match, add class to nodelist B elements
//else, remove class of nodelist B elements
const visible = "isVisible";

const sidebarSelections = "[data-selected]";
const sidebarSelectionsCont = "[data-selectedContent]";

const selected = "selected";
const selectedContent = "selectedContent";

const sidebarBtnsNode = document.querySelectorAll(sidebarSelections);
const mainContNode = document.querySelectorAll(sidebarSelectionsCont);

for (const elem of sidebarBtnsNode) {
  const elemId = elem.dataset.selected;
  elem.addEventListener("click", function () {
    console.log(visible); //scope issue
    console.log(elemId);
    let cont = document.getElementById(elemId);
    if (cont.classList.contains("isVisible")) {
      cont.classList.remove("isVisible");
    } else if (!cont.classList.contains("isVisible")) {
      cont.classList.add("isVisible");
      console.log(cont);
    }
  });
}
