console.log("hi3");
document.getElementById("mainTitle").textContent = "Ayush";
document.querySelector(".randColor").style.backgroundColor = "green";

const newDiv = (document.createElement("div").innerHTML = "hello.");

document.querySelector("body").append(newDiv);

const newLi = document.createElement("li");
newLi.innerHTML = "Karan";
document.querySelector("#nameList").appendChild(newLi);

document.querySelector(".randColor").remove();
document.querySelector("#nameList:last-child").remove();

const image = document.getElementById("imageFile");
image.src =
  "https://images.pexels.com/photos/27180639/pexels-photo-27180639/free-photo-of-golden-gate-bridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

// Event handling

const changeText = () => {
  document.getElementById("linkPara").textContent = "Content Changed";
};
