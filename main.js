// informative console.log
console.log('JK Rowling is a terf');

// empty array to hold students
let students = [];

// renders app to Dom (makes everything show up on the screen)
const renderToDom = (divId, textToRender) => {
  const selectElement = document.querySelector(divId);
  selectElement.innerHTML = textToRender;
};

// creates form to enter student name
