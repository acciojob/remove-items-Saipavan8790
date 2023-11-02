// let select = document.getElementById("colorSelect");
// let btn =  document.querySelector("input[type=button]")
// btn.addEventListener("click", ()=>{       
// 	//select.children--> will give all the child elements of select element
//     for (const child of select.children) {
// 		//select.value--> will give value of the selected element
//         if(child.value === select.value){
// 			//child.remove()-->remove the child element
//                 child.remove();
//          }
//     }
// })


      // 2nd Method

// Get the button element
var button = document.querySelector("input[type='button']");

// Get the select element
var select = document.getElementById("colorSelect");

// Add a click event listener to the button
button.addEventListener("click", function() {
  // Get the selected option
  var selectedOption = select.options[select.selectedIndex];

  // Remove the selected option from the list
  select.removeChild(selectedOption);
});