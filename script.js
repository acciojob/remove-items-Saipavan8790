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

//your JS code here. If required.
let color=document.getElementById("colorSelect");
document.querySelector.contains = function(selector, text) {
  var elements = document.querySelectorAll(selector);
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].textContent === text) {
      return elements[i];
    }
  }
  return null;
};
function remove(){
       var elementToFind = document.querySelector.contains('option',color.value);
    elementToFind.remove();

}