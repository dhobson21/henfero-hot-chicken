import {addOrder} from "./api.js"

let orderBtn = document.querySelector("#order-btn")
//we need TODO these things
// Attach event listeners to the form custom Elements
orderBtn.addEventListener("click", () => {
  // console.log("order clicked")


  //Grab values from the form inputs
  let userName = document.querySelector("#name-input").value
  let selectedMenuItemId = null
  let selectedHeatLevelId = null

  let menuBtns = document.getElementsByName("menu-item")
  // console.log(menuBtns)
  for(let i = 0; i < menuBtns.length; i++) {
  if(menuBtns[i].checked) {
    // console.log(menuBtns[i].value)
    selectedMenuItemId = parseInt(menuBtns[i].value) //added parseInt because value coming back is in a string...need number
  }
}

let heatBtns = document.getElementsByName("heat")
// console.log(heatBtns)
for(let i = 0; i < heatBtns.length; i++) {
if(heatBtns[i].checked) {
  // console.log(heatBtns[i].value)
  selectedHeatLevelId = parseInt(heatBtns[i].value) //added parseInt because value coming back is in a string...need number
  }
}
  // POST form data to db (aftere making an object out of the data)
  let newOrder = orderFactory(userName, selectedMenuItemId, selectedHeatLevelId)
  addOrder(newOrder)
})

function orderFactory(user, menuId, heatId) {
  return {
    menu_item_id: menuId,
    heat_level_id: heatId,
    user: user
  }





}