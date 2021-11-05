var form = document.getElementById('addForm');
var itemList = document.querySelector('#items');
var filter = document.getElementById('filter');

//itemList event listener
itemList.addEventListener('click', removeItem);
//Form submit Event
form.addEventListener('submit', addItem);
//filter event listener
filter.addEventListener('keyup', filterItems)


//Add Item
function addItem(e) {
	e.preventDefault();

	//Get item value
	var newItem = document.getElementById('item').value;

	//create new li element
	var li = document.createElement('li');
	// Add class
	li.className = 'list-group-item';
	//Add text node with input value
	li.appendChild(document.createTextNode(newItem));

	//create del button element
	var deleteBtn = document.createElement('button');
	// add deletebtn class
	deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
	//add text node to deleteBtn
	deleteBtn.appendChild(document.createTextNode('X'));
	
	//Append button to li
	li.appendChild(deleteBtn);

	//Append li to list
	itemList.appendChild(li);

	//Clear field after submit
	e.target.firstElementChild.value = '';
	
}

//Remove Item
function removeItem(e){
	if(e.target.classList.contains('delete')){
		if(confirm('Are you sure?')){
			var li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}

//Filter items
function filterItems(e){
	//convert text to lowercase
	var text = e.target.value.toLowerCase();
	//get lis
	var items = itemList.getElementsByTagName('li');
	//convert to an array
	Array.from(items).forEach(function(item){
		var itemName = item.firstChild.textContent;
		if(itemName.toLowerCase().indexOf(text) !=-1){
			item.style.display = 'block';
		} else {
			item.style.display = 'none';
		}
	})
}

