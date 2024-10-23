/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02
      Hands-on Project 2-2: Completed
      Application to test for completed form

      Filename: project02-02.js
 */

function verifyForm() {
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;

      (name && email && phone) ?          //if name, email, phone have values other than "" (falsy)
            window.alert("Thank you!") :
            window.alert("Please fill out all fields.");    //if one or more is falsy or blank "", run this statement

}

document.getElementById("submit").addEventListener("click", verifyForm);
