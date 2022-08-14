/* 
1. show or hide button
----------------------
*/

// create variables 
const toggleBtn = document.querySelector('#toggleBtn');
const divList = document.querySelector('.listHolder');

// show or hide list and change button to show 'show list' if list is hidden
toggleBtn.addEventListener('click', () => {
    if(divList.style.display === 'none') {
      divList.style.display = 'block';
      toggleBtn.innerHTML = 'Hide List';
    } else {
      divList.style.display = 'none';
      toggleBtn.innerHTML = 'Show List';   
    }
});

/*
2. add list items
-----------------
*/
// create variables/* clear text box content when clicked*/

const addInput = document.querySelector('#addInput');
const addBtn = document.querySelector('#addBtn');

/* display error message 'Enter to-do item' and fix item-less lines being added */ 

function addLists() {
  if(addInput.value ==='') {
    alert('Enter to-do item');

  } else {
  const ul = divList.querySelector('ul');
  const li = document.createElement('li');
  li.innerHTML = addInput.value;
  addInput. value = '';
  ul.appendChild(li);
  }
}

addBtn.addEventListener('click', () => {
    addLists();
});


/* press Enter key as alt to clicking button*/ 
addInput.addEventListener('keyup', (event) => {
    if(event.which === 13) {
        addLists();
    }

});