// ADD NEW ITEM TO END OF LIST
var node = document.createElement("li");
var textnode = document.createTextNode("cream");
node.appendChild(textnode);
document.querySelector("ul").appendChild(node);

// ADD NEW ITEM START OF LIST
var node = document.createElement("li");
var textnode = document.createTextNode("kale");
node.appendChild(textnode);
document.querySelector("ul").prepend(node);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var li = document.getElementsByTagName("li");
var i = 0;
for(i = 0;i < li.length;i++ ){
	document.getElementsByTagName("li")[i].setAttribute("class", "cool"); 
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
document.getElementsByTagName("h2")[0].innerHTML = "Buy groceries " + i;