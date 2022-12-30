//****************************************** */
// //*************************************** */
// Sidbar Selections
//****************************************** */
// //*************************************** */

const init = function () {
  const visible = "isVisible";
  const sidebarSelections = "[data-selected]";
  const sidebarSelectionsCont = "[data-selected-content]";
  const btnNode = document.querySelectorAll(sidebarSelections);
  const contentNode = document.querySelectorAll(sidebarSelectionsCont);

  for (const elemA of btnNode) {
    elemA.addEventListener("click", () => {
      let elemAId = elemA.dataset.selected;
      checkIds(elemAId);
    });
  }

  function checkIds(id) {
    let notCurrentContent = [];

    for (const elemB of contentNode) {
      let elemBId = elemB.dataset.selectedContent;

      if (id != elemBId) {
        notCurrentContent.push(elemBId);
      } else if (id === elemBId) {
        let current = document.getElementById(elemBId);
        // console.log(current);
        current.classList.add(visible);
      }
    }
    notCurrentContent.forEach((el) => {
      let i = document.getElementById(el);
      if (i.classList.contains(visible)) {
        i.classList.remove(visible);
      } else {
        return;
      }
    });
  }
};

document.addEventListener("DOMContentLoaded", init);
//
//
//
//

//
//
//
//
//
//
//
// let checkIDs = function (nodelistA) {
//   nodelistA.forEach.addEventListener("click", (e) => {
//     let elemAid = this.dataset.selected;
//     checkB(elemAid);
//   });
// };
// checkIDs(sidebarBtnsNode);
// // console.log(elemAid);

// // for (const elemA of sidebarBtnsNode) {
// //   elemA.addEventListener("click", (e) => {
// //     let elemAid = elemA.dataset.selected;
// //     checkB(elemAid);
// //   });
// //   // console.log(elemAid);
// // }
// function checkB(elemAid) {
//   for (const elemB of mainContNode) {
//     console.log(elemB);
//     let elemBid = elemB.dataset.selectedContent;
//     if (elemAid === elemBid) {
//       // console.log(elemAid);
//       // console.log(elemBid);
//       document.getElementById(elemBid).classList.add(visible);
//     }
//   }
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// for (const elemA of sidebarBtnsNode) {
//   let elemAid = elemA.dataset.selected;
//   elemA.addEventListener("click", function (e) {
//     for (const elemB of mainContNode) {
//       let elemBid = elemB.dataset.selectedContent;
//       if (elemAid === elemBid) {
//         console.log(elemAid);
//         console.log(elemBid);
//         document.getElementById(elemBid).classList.add("isVisble");
//       } else if (elemAid != elemBid) {
//         // console.log(mainContNode);
//       }
//     }
//   });
// }

//this is close but not done correctly (well)
// let currentCont = [];
// currentCont.forEach((elem) => elem.classList.add(visible));
// console.log(currentCont);

// for (const elem of sidebarBtnsNode) {
//   const elemId = elem.dataset.selected;
//   elem.addEventListener("click", function () {
//     // console.log(elemId);
//     let cont = document.getElementById(elemId);
//     currentCont.splice(0, 1, cont);
//     console.log(currentCont);
//   });
// }

// if (cont.classList.contains("isVisible")) {
//   cont.classList.remove("isVisible");
// } else if (!cont.classList.contains("isVisible")) {
//   cont.classList.add("isVisible");
//   console.log(cont);
// }
