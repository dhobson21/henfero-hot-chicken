console.log('this is domstuff')


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