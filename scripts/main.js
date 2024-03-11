let myImage = document.querySelector("img");

myImage.onclick = () => {
	let mySrc = myImage.getAttribute("src");
	if (mySrc === "images/1.jpg") {
		myImage.setAttribute("src", "images/3.jpg");
	}
	else {
		myImage.setAttribute("src", "images/1.jpg");
	}
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
	let myName = prompt("Please enter your name.");
	if (!myName) {
		setUserName();
	}
	else {
		localStorage.setItem("name", myName);
		myHeading.textContent = `Wanna play p00ker, ${myName}?`;
	}
}

if (!localStorage.getItem("name")) {
	setUserName();
}
else {
	let storedName = localStorage.getItem("name");
//	alert(`Nonamewas2 the name ${storedName}.`);
	myHeading.textContent = `Wanna play p00ker, ${storedName}?`;
}

myButton.onclick = () => {
	setUserName();
}
