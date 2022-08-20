// 1..get the element by Id
// 2..get the value from the element
// 3....convert string value to a number

function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue =parseFloat (inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const Value = parseFloat(elementValueString);
    return Value;
}

function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

function setTextElementValueById(elementId, newValue){
const textElement = document.getElementById(elementId);
textElement.innerText = newValue;
}

