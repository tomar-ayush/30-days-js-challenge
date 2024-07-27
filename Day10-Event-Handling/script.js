let count = 0;
const clickBtn = document.getElementsByClassName("countBtn")[0];

clickBtn.addEventListener("click", function () {
  count += 1;
  totalCount = document.getElementsByClassName("total_count")[0].textContent =
    count;
});

// Adding double click event listner

const image = document.getElementById("nature-img");
image.addEventListener("dblclick", function () {
  image.style.display = "none";
});

// Mouse Events

const colorBox = document.getElementById("colorBox");
colorBox.addEventListener("mouseover", function () {
  colorBox.style.backgroundColor = "green";
});

colorBox.addEventListener("mouseout", function () {
  colorBox.style.backgroundColor = "lightblue";
});

// KeyBoard Events

//keydown event handle
const inputBox = document.getElementById("inputBox");
inputBox.addEventListener("keydown", (e) => {
  console.log(e.key);
});

//keyup envent handle
inputBox.addEventListener("keyup", (e) => {
  console.log(inputBox.value);
});

// Form Events Handle
const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("hi");
  const formData = new FormData(signupForm);

  for (const [key, val] of formData.entries()) {
    console.log("value of " + key + " is " + val);
  }
});

const favColor = document.getElementById("fav-color");
const color = document.getElementById("colors");

color.addEventListener("change", () => {
  console.log(color.value);
  favColor.textContent = color.value;
});

// Event Deligation

// ol.onclick = funtion(event) {
//   console.log("hello world event deligation");
// }

const lists = document.getElementById("list");
lists.onclick = function (event) {
  console.log(event.target.textContent);
};

const parentContainer = document.getElementById("parentContainer");
const addElement = document.getElementById("addElement");

parentContainer.addEventListener("click", (event) => {
  if (event.target && event.target.nodeName === "BUTTON") {
    console.log(
      `Event ${event.target.nodeName} is added to the parent element with context ${event.target.textContent}`
    );
  }
});

function addNewButton() {
  const newButton = document.createElement("button");
  newButton.textContent = "New Button";
  newButton.style.marginRight = "10px";
  parentContainer.appendChild(newButton);
}

addElement.addEventListener("click", addNewButton);
