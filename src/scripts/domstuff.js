console.log("this is domstuff")


//creates Menu Item Dom component
function makeMenuItemComponent(menuItem) {
  return `
    <li><img><h3>${menuItem.name}: ${menuItem.price}</h3><button>order</button></li>
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
    <li><input type="radio" name="heat"><h3>${heatObj.name}</h3></li>
  `
}

//lists heat levels in DOM section with "heat-list ID"
function listHeatItems(heatComponents) {
  heatComponents.forEach( component => {
    document.querySelector("#heat-list").innerHTML += component
  })
}
export {makeMenuItemComponent, listMenuItems, makeHeatLevelComponent, listHeatItems}