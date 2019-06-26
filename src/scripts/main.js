import { getMenuItems } from "./api.js"
import { makeMenuItemComponent, listMenuItems} from "./domstuff.js"


console.log("this is main")

getMenuItems()
.then (menuItems => {
console.log(menuItems)
 //loop through menuItems and turn them into html components
  let componentArray = menuItems.map( (oneMenuItemObj) => makeMenuItemComponent(oneMenuItemObj))
  console.log(componentArray)
  //add the menu item components to the DOM
  listMenuItems(componentArray)
})
