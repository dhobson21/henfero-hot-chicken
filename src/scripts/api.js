

//fetch menu_item data
//Still need to get to main.js because babel only compiles main.js

function getMenuItems () { //turn fetch call into function that returns fetch then do stuff to the data in main.js by calling the function
return fetch("http://localhost:8088/menu_items")
.then( menuData => menuData.json() )
}



export { getMenuItems }