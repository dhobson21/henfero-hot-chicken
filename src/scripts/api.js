import { makeMenuItemComponent, listMenuItems} from "./domstuff.js"

//fetch menu_item data
//Still need to get to main.js because babel only compiles main.js
fetch("http://localhost:8088/menu_items")
.then( menuData => menuData.json() )
.then( menuItems => {
 //loop through menuItems and turn them into html components
  let componentArray = menuItems.map( (oneMenuItemObj) => makeMenuItemComponent(oneMenuItemObj))
  console.log(componentArray)
  //add the menu item components to the DOM
  listMenuItems(componentArray)
})

