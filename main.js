// informative console.log
console.log('JK Rowling is a terf');

// empty string that will hold the HTML representation for the app
let domString = ''

// empty array to hold students
let students = [];

// renders app to Dom (makes everything show up on the screen)
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

// intro card
const introCard = () => {
  domString += `
        <div class="intro-card">
          <div class="card-body">
            <h5 class="card-title">Welcome to Hoggy Hoggy Warts, RELOADED!</h5>
              <p class="card-text">Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss?</p>
              <hr>
              <p>Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup.</p>
              <button id="form-button" href="#" class="btn btn-primary">Sort a new student!</button>
          </div>
        </div>`
  renderToDom('#app', domString)
}

// creates the form
const createForm = () => {
  let domString = `<form id="form">
                    <h1>Enter First Year's Name</h1>
                    <div class="mb-3">
                      <label class="form-label">Student:</label>
                      <input type="text" class="form-control" id="studentNameForm" placeholder="N.K. Jemisin">
                    </div>
                    <button type="submit" class="btn btn-primary">Sort!</button>
                  </form> `
  renderToDom('#form', domString)
}

// takes action when a user interacts with the page
const eventListeners = () => {
  // event listener to open form
  document.querySelector('#form-button').addEventListener('click', createForm);
  }

// calls the functions that renders everything to the dom
const startApp = () => {
  introCard();
  eventListeners();
}

startApp();
