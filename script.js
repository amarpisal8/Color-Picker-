let colorPickerContainer=document.getElementById("colorPickerContainer");
let selectColor=document.getElementById("selectColor");

function colorOne() {
        colorPickerContainer.style.backgroundColor="Red";
        selectColor.textContent="Red";
}

function colorTwo() {
    colorPickerContainer.style.backgroundColor="Green";
    selectColor.textContent="Green";
}

function colorThree() {
    colorPickerContainer.style.backgroundColor="Blue";
    selectColor.textContent="Blue";
}