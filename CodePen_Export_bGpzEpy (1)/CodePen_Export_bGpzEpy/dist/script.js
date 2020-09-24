// The javascript file
let display;
let edit;

// Check storage to get saved item else ''
let editContainer = localStorage.getItem('edit-container');
if(editContainer && editContainer.length > 0) {
  // Capture the target elements
  display = document.getElementById('display');
  edit = document.getElementById('edit');
  // Initialize elements with their children
display.innerHTML = editContainer;
edit.innerText = editContainer;
} else {
  let initialContents = "<style> \n.intro { \ncolor: yellow; \ntext-decoration: underline; \ntext-align: center;\n} \n</style>\n\n<h3 class='intro'>Made by Rango</h3>";

  localStorage.setItem('edit-container', initialContents);

  display = document.getElementById('display');
  edit = document.getElementById('edit');
  edit.innerText = initialContents;
  display.innerHTML = initialContents;
}

// When a new data is typed in the edit field, add to storage and update the display panel    
window.addEventListener('keyup', () => {
  // Get the current text in edit container and display
  edit = document.getElementById('edit');
  editContainer = edit.innerText;
  display = document.getElementById('display');
  display.innerHTML = editContainer;

  // Update storage
  localStorage.setItem('edit-container', editContainer);
});