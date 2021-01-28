var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
// filter event
filter.addEventListener('keyup' , filterItems);
// form submit event
form.addEventListener('submit', addItems);
  //event listener for delete Item
itemList.addEventListener('click',removeItem);
// Add item
function addItems(e){
    e.preventDefault();
   // Get input value
 var newItem = document.getElementById('item').value;
 //create new li element
 var li = document.createElement('li');
 //Add class for li
 li.className = 'list-group-item';
 // Add text node with input value
// console.log(li);
 li.appendChild(document.createTextNode(newItem));
// create a delete button for new li
var deleteBtn = document.createElement('button');
// add class for deleteBtn
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
//create text for deleteBtn
deleteBtn.appendChild(document.createTextNode('X'));
// append deleteBtn to li
li.appendChild(deleteBtn);
 itemList.appendChild(li);
}

 //function to delete list
 function removeItem(e){
   //check delete class present in it
  if(e.target.classList.contains('delete')){
    // confirm alert
    if(confirm('Are you sure?')){
    var li = e.target.parentElement;
    itemList.removeChild(li);
    }
  }
}
// function for filter items
function filterItems(e){
  // convert letters to lowercase to match easily
  var text = e.target.value.toLowerCase();
 // console.log(text);
 //get lis
 var items = itemList.getElementsByTagName('li');
// console.log(items);
// convert the above htmlCollection array to filter form
Array.from(items).forEach(function(item){
  var itemName = item.firstChild.textContent;
 // console.log(itemName);
 if(itemName.toLowerCase().indexOf(text) != -1){
   item.style.display = 'block'
 }else{
  item.style.display = 'none'
 }
})
}
