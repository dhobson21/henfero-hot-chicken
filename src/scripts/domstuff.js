console.log("this is domstuff")


//creates Menu Item Dom component
function makeMenuItemComponent(menuItem) {
  return `
    <li><img><label for ="menu-item-${menuItem.id}"><input id= "menu-item-${menuItem.id}" type="radio" name="menu-item" value= ${menuItem.id}><h3>${menuItem.name}: ${menuItem.price}</h3></label></li>
  `
}

//lists menu items in DOM section with "menu-list ID"
function listMenuItems(menuComponents) {
  menuComponents.forEach( component => {
    document.querySelector("#menu-list").innerHTML += component
  })
}


//List heat levels in DOM section
function makeHeatLevelComponent(heatObj) {
  return `
    <li><label for="heat-level-${heatObj.id}"><input id="heat-level-${heatObj.id}" type="radio" name="heat" value= ${heatObj.id}><h3>${heatObj.name}</h3></label></li>
  `
}

//lists heat levels in DOM section with "heat-list ID"
function listHeatItems(heatComponents) {
  heatComponents.forEach( component => {
    document.querySelector("#heat-list").innerHTML += component
  })
}
export {makeMenuItemComponent, listMenuItems, makeHeatLevelComponent, listHeatItems}