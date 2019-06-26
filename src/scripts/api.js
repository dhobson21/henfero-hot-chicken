console.log("This is api.js")
//fetch menu_item data
//Still need to get to main.js because babel only compiles main.js
fetch("http://localhost:8088/menu_items")
.then( menuData => menuData.json() )
.then( menuItems => {
  console.log("food", menuItems)
})

