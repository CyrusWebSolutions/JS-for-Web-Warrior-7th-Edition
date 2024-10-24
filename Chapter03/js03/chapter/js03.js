/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table

     Filename: js03.js
 */

let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

window.addEventListener("load", addWeekdays);

function addWeekdays() {
    let i = 0;

    let headingCells = document.getElementsByTagName("th");

    while (i < 7) {
        headingCells[i].innerHTML = weekDays[i];
        i++;
    }
}