import { getMenuItems, getHeatLevels } from "./api.js"
import { makeMenuItemComponent, listMenuItems, listHeatItems, makeHeatLevelComponent} from "./domstuff.js"
import "./form.js"

console.log("this is main")

getMenuItems()
.then (menuItems => {
console.log(menuItems)
 //loop through menuItems and turn them into html components
  let componentArray = menuItems.map( (oneMenuItemObj) => makeMenuItemComponent(oneMenuItemObj))
  //add the menu item components to the DOM
  listMenuItems(componentArray)
})

//callfetch function for heat data
getHeatLevels()
.then(heatData => {
  console.log(heatData)
  let heatArray = heatData.map( (oneHeatObj) => makeHeatLevelComponent(oneHeatObj))
  listHeatItems(heatArray)
})